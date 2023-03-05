const fs = require('fs');
const path = require('path');

const LOG_PATH = path.resolve(process.cwd(), 'logs/server-logs.txt');

if (!fs.existsSync(LOG_PATH)) fs.writeFileSync(LOG_PATH, '', 'utf8');

const textFile = fs.readFileSync(LOG_PATH, 'utf8');
const array = textFile.split('\n');

const logMessage = (type, message) => {
    array.push(`${new Date().toISOString()}: [${type}] ${message}`)
    fs.writeFileSync(LOG_PATH, array.join('\n'), 'utf8');
}

module.exports = {
    log: message => logMessage('LOG', message),
    error: message => logMessage('ERR', message)
}