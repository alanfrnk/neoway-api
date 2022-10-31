const util = require('../shared/util')
const os = require('os')

class DocumentService {
    async get(req, res, next) {
        try {
            const uptime = os.uptime()

            return util.resultSuccess(res, uptime);
        } catch (err) {
            util.resultError400(res, util.formatError('default.error.unknown'));
            next(err);
        }
    }
}

module.exports = new DocumentService();
