process.stdin.setEncoding('utf-8')
process.stdout.write('Type OS or NodeVersion or sysLang or /exit\n');
process.stdin.on('readable', function() {
    var input = process.stdin.read()
    var instruction = input.toString().trim()
    switch (instruction) {
        case 'OS' :
            process.stdout.write('OS version is ' + process.env.OS)
            break
        case 'NodeVersion':
            process.stdout.write('Node version is ' + process.versions.node)
        case 'sysLang':
            process.stdout.write('Language is ' + process.env.LANG)
        case '/exit':
            process.stdout.write('Exiting program')
            process.exit()
            break
        default:
            process.stderr.write('Wrong instruction')
    }
})