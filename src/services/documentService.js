const Document = require('../models/document')
const validateDocument = require('../validation/document')
const util = require('../shared/util')
const _ = require('lodash')

class DocumentService {
    async create(req, res, next) {
        try {
            const { error, isValid } = validateDocument.create(req.body);

            if (!isValid) {
                return util.resultError200(res, error);
            }

            const documents = await Document.find({ documentNumber: req.body.documentNumber });

            if (!_.isEmpty(documents)) {
                return util.resultError200(
                    res,
                    util.formatWarning('error.already.exists.document.number')
                );
            }

            const newDocument = new Document(req.body).save();

            return util.resultSuccess(res, newDocument);
        } catch (err) {
            util.resultError400(res, util.formatError('default.error.unknown'));
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const { error, isValid } = validateDocument.update(req.body)

            if (!isValid) {
                return util.resultError200(res, error)
            }

            if (!req.params.id) {
                return util.resultError200(
                    res,
                    util.formatError('error.id.not.provided')
                )
            }

            const documents = await Document.find({ documentNumber: req.body.documentNumber });

            if (!_.isEmpty(documents)) {
                return util.resultWarning400(
                    res,
                    util.formatWarning('error.already.exists.document.number')
                );
            }

            const newDocument = await Document.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            )

            return util.resultSuccess(res, newDocument);
        } catch (err) {
            util.resultError400(res, util.formatError('default.error.unknown'));
            next(err);
        }
    }

    async getAll(req, res, next) {
        try {
            const { like, page, limit } = req.query;

            let filter = {
                $and: [
                    {status: 'active'},
                ]
            }

            if (like) {
                filter.$and.push({
                    $or: [
                        { documentNumber: { $regex: '.*' + like + '.*', $options: 'i' } },
                    ]
                });
            }       
            
            let documents = [];
            if (page && limit) {
                documents = await Document.find(filter)
                                        .limit(limit * 1)
                                        .skip((page - 1) * limit)  
                                        .sort({date: 'desc'});
            } else {
                documents = await Document.find(filter)
                                        .sort({date: 'desc'});
            }

            const count = await Document.countDocuments(filter);

            return util.resultSuccess(res, documents, count, limit, page);
            
        } catch (err) {
            util.resultError400(res, util.formatError('default.error.unknown'));
            next(err);
        }
    }

    async get(req, res, next) {
        try {
            if (!req.params.id) {
                return util.resultError400(res, util.formatError('error.id.not.provided'))
            }

            let document = await Document.findById(req.params.id)

            if (_.isEmpty(document)) {
                return util.resultError400(res, util.formatError('error.document.not.found'));
            }            

            return util.resultSuccess(res, document);
        } catch (err) {
            util.resultError400(res, util.formatError('default.error.unknown'));
            next(err);
        }
    }

    async delete (req, res, next) {
        try {
            if (!req.params.id) {
                return util.resultError400(res, util.formatError('error.id.not.provided'))
            }

            const document = await Document.findByIdAndDelete(req.params.id)

            return util.resultSuccess(res, document);

        } catch (err) {
            util.resultError400(res, util.formatError('default.error.unknown'));
            next(err);
        }
    }
}

module.exports = new DocumentService();
