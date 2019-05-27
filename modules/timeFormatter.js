var os = require('os');

function formatTime() {

    var uptime = os.uptime();
    console.log('diff', (uptime % 3600))
    if ((uptime / 3600).toFixed(0) !== '0') {
        return (uptime / 3600).toFixed(0) + 'h, ' + ((uptime % 3600) / 60).toFixed(0) + 'min and ' + (uptime % 60) + ' seconds'
    } else if (((uptime % 3600) / 60).toFixed(0) !== '0') {
        return ((uptime % 3600) / 60).toFixed(0) + ' min and ' + (uptime % 60) + ' seconds'
    } else{
        return (uptime % 60) + ' seconds';
    }
}

exports.print = formatTime;