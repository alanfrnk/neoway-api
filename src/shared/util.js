const i18n = require("i18n")
// const moment = require('moment');
// const CryptoJS = require('crypto-js');
// const isEmpty = require("../validation/is-empty");
// const mongoCache = require("../../store");

var Util = new Object()

Util.formatError = function (messageCode) {
    var error = {
        message: translate(messageCode),
        variant: 'error'
    }
    return error
}

// Util.formatErrorIugu = function (message) {
//     var error = {
//         message: message,
//         variant: 'error'
//     }
//     return error;
// }

Util.formatWarning = function (messageCode) {
    var warning = {
        message: translate(messageCode),
        variant: 'warning'
    }
    return warning
}

// Util.messages = function (code) {
//     return translate(code);
// }

// Util.getLocaleConfigured = function () {
//     return getLocaleConfig();
// }

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

// Util.isEmpty = value =>
//     value === undefined ||
//     value === null ||
//     (typeof value === 'object' && Object.keys(value).length === 0) ||
//     (typeof value === 'string' && value.trim().length === 0) ||
//     (typeof value === 'array' && value.length === 0)

// Util.resultError402 = (res, error, req = null, idSocket = null) => {
//     const result = {
//         success: false,
//         error,
//     }

//     if (req && idSocket) {        
//         emitSocket(idSocket, req, result);
//     }
    
//     return res.status(402).json(result);
// }

Util.resultWarning400 = (res, error) => {
    const result = {
        success: false,
        error,
    }
    
    return res.status(400).json(result)
}

// Util.generatePassword = (passwordLength) => {
//     var numberChars = "0123456789";
//     var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var lowerChars = "abcdefghijklmnopqrstuvwxyz";
//     var allChars = numberChars + upperChars + lowerChars;
//     var randPasswordArray = Array(passwordLength);
//     randPasswordArray[0] = numberChars;
//     randPasswordArray[1] = upperChars;
//     randPasswordArray[2] = lowerChars;
//     randPasswordArray = randPasswordArray.fill(allChars, 3);
//     return shuffleArray(randPasswordArray.map((x) => {
//         return x[Math.floor(Math.random() * x.length)]
//     })).join('');
// }

// Util.reportOptions = (data) => {
//     return {
//         uri: process.env.REPORT_ENDPOINT,
//         method: 'POST',
//         auth: {
//             username: process.env.REPORT_USER,
//             password: process.env.REPORT_PASS
//         },
//         json: data
//     }
// }

// Util.groupBy = (array, f) => {
//     var groups = {};

//     array.forEach((o) => {
//         var group = JSON.stringify(f(o));
//         groups[group] = groups[group] || [];
//         groups[group].push(o);
//     });

//     return Object.keys(groups).map(function(group) {
//         return groups[group];
//     });
// }

// Util.setCached = async (filter, data) => {
//     if (!isEmpty(data)) {
//         const key = generateMD5Filter(filter);
//         await mongoCache.set(key, JSON.parse(JSON.stringify(data)));
//     }
// }

// Util.getCached = async (filter) => {
//     const key = generateMD5Filter(filter);
//     const data = await mongoCache.get(key);    
//     return data;
// }

// Util.calculateDurationTime = calculateDurationTime;

// function generateMD5Filter(filter) {
//     const data = JSON.stringify(filter);
//     const md5 = CryptoJS.MD5(data).toString();
//     return md5;
// }

// function emitSocket(idSocket, req, result) {
//     return req.app.locals.socket.emit(idSocket, result);
// }

function translate(code) {
    i18n.setLocale(getLocaleConfig())
    return i18n.__(code)
}

function getLocaleConfig() {
    return 'pt-BR'
}


// function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }

// function calculateDurationTime(dateStart, dateEnd) {
//     if (dateStart && dateEnd) {
//         const start = moment(dateStart);
//         const end = moment(dateEnd);

//         duration = moment.duration(end.diff(start));

//         const hours = parseInt(duration.asHours());
//         const minutes = parseInt(duration.asMinutes())%60;
//         const seconds = parseInt(duration.asSeconds())%60;

//         const formatTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

//         return formatTime;
//     }

//     return null;
// };

module.exports = Util
