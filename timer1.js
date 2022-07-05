// get args from command line
const argsArr = process.argv.slice(2);

for (let i = 0; i < argsArr.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, argsArr[i] * 1000);
}