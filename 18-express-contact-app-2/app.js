const express = require("express");
const expresslayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require('./utils/contacts');

const app = express();
const port = 3000;


app.set("view engine", "ejs"); // gunakan ejs
app.use(expresslayouts); // Third-party Middleware
app.use(express.static("public")); // Build-in middleware



app.get("/", (req, res) => {
  
  const mahasiswa = [
    {
      nama: "Rafli",
      email: "rafli@gmail.com",
    },
    {
      nama: "Kamaludin",
      email: "kamaludin@gmail.com",
    },
    {
      nama: "Biru",
      email: "biru@gmail.com",
    },
  ];
  res.render("index", {
    nama: "Rafli Salamudin",
    title: "Halaman Home",
    mahasiswa,
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res, next) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();

  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts,
  });
});

// halaman form tambah data contact
app.get("./contact/add", (req, res) => {
  res.render("add-contact", {
    layout: "layouts/main-layout",
    title: "Form Tambah Data Contact",
  });
});

// halaman detail contact
app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  
  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman Detail Contact",
    contact,
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
