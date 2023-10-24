// const nama = "Rafli";
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama("Rafli Salamudin"));

// const fs = require("fs"); //core module
// const cetakNama = require("./coba"); // local module
// const moment = require("moment"); // third module / npm module / node_modules

// console.log("Hello Rafli");

// const cetakNama = require("./coba");
// const PI = require("./coba");
const coba = require("./coba");

console.log(coba.cetakNama("Rafli"), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());
