const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  if (key > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    },key * 1000);
  }

  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
});
