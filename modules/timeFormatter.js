var os = require('os');

function formatTime(uptime) {
    if (uptime > 3600) {
        return Math.floor(uptime / 3600) + 'h, ' + Math.floor((uptime % 3600) / 60) + 'min and ' + (uptime % 60) + ' seconds'
    } else if (((uptime % 3600) / 60) !== '0') {
        return Math.floor((uptime % 3600) / 60) + ' min and ' + (uptime % 60) + ' seconds'
    } else{
        return (uptime % 60) + ' seconds';
    }
}

exports.print = formatTime;