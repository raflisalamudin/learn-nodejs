const validator = require("validator");
const chalk = require("chalk");

// console.log(validator.isEmail("rafli@gmail.com"));
// console.log(validator.isMobilePhone("08123456789", "id-ID"));
// console.log(validator.isNumeric("0123456789"));

// console.log(chalk.italic.bgBlue.black("Hello World!"));
const nama = "Rafli";
const pesan = chalk`lorem, ipsum {bgBlue sit dolor} amet consectrtur {bgGreen.black.strikethrough adipisicing} elit. Nama saya : ${nama}`;
console.log(pesan);
