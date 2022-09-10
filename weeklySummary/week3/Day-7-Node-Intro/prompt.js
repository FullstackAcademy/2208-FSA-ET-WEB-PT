const ls = require('./ls');

// Prompt the user for an input
process.stdout.write('prompt > ');

// On input...
process.stdin.on('data', (data) => {
    // Change into something readable
    const command = data.toString().trim();
    console.log(command);

    // Do stuff..
    if (command === 'ls') ls();
    else {
        process.stdout.write('You typed: ' + command);
    }

    // Prompt the user for an input
    process.stdout.write('\nLine 19 happened ');
    process.stdout.write('\nprompt > ');
})