const util = require('../shared/util')
const _ = require('lodash')

class ValidateDocument {

    create (body) {
        let error = {}
        
        if (!_.isEmpty(body)) {
            if (_.isEmpty(body.documentNumber)) {
                error = util.formatError('error.document.number.not.provided');
            }

            if (_.isEmpty(body.type)) {
                error = util.formatError('error.type.not.provided');
            }
        
        } else {
            error = util.formatError('error.document.not.provided');
        }

        return {
            error,
            isValid: _.isEmpty(error)
        }
    }

    update (body) {
        let error = {}
        
        if (_.isEmpty(body)) {
            error = util.formatError('error.document.not.provided');
        }

        return {
            error,
            isValid: _.isEmpty(error)
        }
    }

}

module.exports = new ValidateDocument() 