const util = require('../shared/util')
const _ = require('lodash')
const { cpf, cnpj } = require('cpf-cnpj-validator')

class ValidateDocument {

    create (body) {
        let error = {}
        
        if (!_.isEmpty(body)) {
            if (_.isEmpty(String(body.documentNumber))) {
                error = util.formatError('error.document.number.not.provided')
            }

            if (_.isEmpty(body.type)) {
                error = util.formatError('error.type.not.provided')
            }

            const isValidCpf = cpf.isValid(String(body.documentNumber))
            const isValidCnpj = cnpj.isValid(String(body.documentNumber))

            if (!isValidCpf && !isValidCnpj) {
                error = util.formatError('error.cpf.cnpj.not.valid')
            }
        } else {
            error = util.formatError('error.document.not.provided')
        }

        return {
            error,
            isValid: _.isEmpty(error)
        }
    }

    update (body) {
        let error = {}
        
        if (_.isEmpty(body)) {
            error = util.formatError('error.document.not.provided')
        }

        const isValidCpf = cpf.isValid(String(body.documentNumber))
        const isValidCnpj = cnpj.isValid(String(body.documentNumber))

        if (!isValidCpf && !isValidCnpj) {
            error = util.formatError('error.cpf.cnpj.not.valid')
        }

        return {
            error,
            isValid: _.isEmpty(error)
        }
    }

}

module.exports = new ValidateDocument() 