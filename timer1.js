// get args from command line
const argsArr = process.argv.slice(2);


for (let i = 0; i < argsArr.length; i++) {
  if (argsArr[i] < 0 || typeof argsArr[i] !== 'number') {
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, argsArr[i] * 1000);
}