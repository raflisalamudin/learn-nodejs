const express = require("express");
const expresslayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");
app.use(expresslayouts);

app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
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

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID: ${req.query.category}`);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
