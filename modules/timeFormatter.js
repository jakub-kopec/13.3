var os = require('os');

function formatTime() {
    var uptime = os.uptime();
    return (uptime / 3600).toFixed(0) + 'h, ' + ((uptime % 3600) / 60).toFixed(0) + 'min and ' + (uptime % 60) + ' seconds';
}

exports.print = formatTime;