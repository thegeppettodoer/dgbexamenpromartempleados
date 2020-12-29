const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");
const toobusy = require("toobusy-js");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const session = require("express-session");

//usando morgan para mostrar los get, post,put, etc
app.use(morgan("dev"));
//Routes
app.use(require("./rutas"));

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.urlencoded({extended: false})); //Parse URL-encoded bodies
// app.use(bodyParser.urlencoded({ limit: "1kb" }));
// app.use(bodyParser.json({ limit: "1kb" }));
app.use(bodyParser.json());
// app.use(express.multipart({ limit:"10mb" })); //podemos usar multer pa subir files
// app.use(bodyParser.limit("5kb"));

// app.use(express.limit('2mb'));

//Monitoreo de eventos loop
app.use(function (req, res, next) {
  if (toobusy()) {
    // log if you see necessary
    console.log("Servidor ocupado");
    res.send(503, "Servidor ocupado");
  } else {
    next();
  }
});

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);



app.listen(port, function () {
  console.log("App listening on port: " + port);
});
console.log("puerto: ", port);
//    console.log("path: ", path);
