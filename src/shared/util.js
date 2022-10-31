const i18n = require("i18n")

var Util = new Object()

Util.formatError = function (messageCode) {
    var error = {
        message: translate(messageCode),
        variant: 'error'
    }
    return error
}

Util.formatWarning = function (messageCode) {
    var warning = {
        message: translate(messageCode),
        variant: 'warning'
    }
    return warning
}

Util.resultSuccess = (res, data, count = 0, limit = 10, page = 1) => {
    const result = {
        success: true,
        result: {
            message: translate('default.success.message'),
            variant: 'success'
        },
        data,
        totalDocs: count,
        rowsPerPage: parseInt(limit),
        totalPages: Math.ceil(count / limit),
        currentPage: parseInt(page),
    }

    return res.status(200).json(result)
}

Util.resultError400 = (res, error) => {
    const result = {
        success: false,
        error,
    }

    return res.status(400).json(result)
}

Util.resultError200 = (res, error) => {
    const result = {
        success: false,
        error,
    }

    return res.status(200).json(result)
}

Util.resultWarning400 = (res, error) => {
    const result = {
        success: false,
        error,
    }
    
    return res.status(400).json(result)
}

function translate(code) {
    i18n.setLocale(getLocaleConfig())
    return i18n.__(code)
}

function getLocaleConfig() {
    return 'pt-BR'
}

module.exports = Util
