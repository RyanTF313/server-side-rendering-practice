const express = require("express");
const app = express();

const loggerMsg = require("./constants/methods/loggerMsg");

const jsxViewEngine = require("jsx-view-engine");
app.set("view engine", "jsx");
app.engine("jsx", jsxViewEngine());

const fruits = require("./models/fruits.js");
const veggies = require("./models/veggies.js");

app.use(express.urlencoded({ extended: false }));
app.use(loggerMsg);


app.get("/", function (req, res) {
    res.render("Index", { fruits });
  });
app.get("/fruits", function (req, res) {
  res.render("fruits/Index", { fruits });
});
app.get("/veggies", function (req, res) {
    res.render("veggies/Index", { veggies });
  });
app.get("/fruits/new", function (req, res) {
  res.render("fruits/New");
});
app.get("/veggies/new", function (req, res) {
    res.render("veggies/New");
  });

app.get("/fruits/:indexOfFruitsArray", function (req, res) {
  res.render("fruits/Show", {
    fruit: fruits[req.params.indexOfFruitsArray],
  });
});
app.get("/veggies/:indexOfVeggiesArray", function (req, res) {
    res.render("veggies/Show", {
      veggie: veggies[req.params.indexOfVeggiesArray],
    });
  });

app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect("/fruits");
});
app.post("/veggies", (req, res) => {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    veggies.push(req.body);
    res.redirect("/veggies");
  });


app.listen(3005, function () {
  console.log("Listening on port 3005");
});
