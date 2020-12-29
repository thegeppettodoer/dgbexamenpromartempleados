const { Router } = require("express");
const router = Router();
const { login, register, empleados } = require("./funcionesexternas");
const { RateLimiter } = require("rate-limiter");
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var user = null;
//database firebase
const firebase = require("firebase");
const config = {
  apiKey: "AIzaSyB5SmL0TRYYWK578eVlQd1kClZX-qxWnLY",
  authDomain: "wf-learning-share.firebaseapp.com",
  databaseURL: "https://wf-learning-share.firebaseio.com",
  projectId: "wf-learning-share",
  storageBucket: "wf-learning-share.appspot.com",
  messagingSenderId: "246496321648",
  appId: "1:246496321648:web:8179171dcf7c32a69794b5",
  measurementId: "G-BH34R2CFB1",
};
if (!firebase.apps.length) {
  // console.log(">AuthProvider> 1 !firebase.apps.length");
  firebase.initializeApp(config);
} else {
  // console.log(">AuthProvider> 0 firebase.apps.length");
  firebase.app();
}

var limiter = new RateLimiter();
//   limiter.addLimit("/login", "GET", 5, 500),

router.get("/", (req, res) => {
  res.json({ status: 200, message: "hello...get>" });
});

router.post("/login", urlencodedParser, (req, res) => {
  var email = req.body.email;
  var pass = req.body.pass;
  var returnLogin = login(email, pass).then((e) => {
    console.log("router login objet ", e);
    if (e.error === -1) {
      res.json(e);
    } else {
      user = email;
      res.json({
        status: 200,
        message: "hello...post login email,password> " + JSON.stringify(e),
      });
    }
  });
});

router.post("/register", urlencodedParser, (req, res) => {
  var email = req.body.email;
  var pass = req.body.pass;
  var username = req.body.username;
  var name = req.body.name;

  var returnRegister = register(email, username, name, pass).then((e) => {
    if (e.error === -1) {
      res.json(e);
    } else {
      console.log("router register ok ", e);

      res.json({
        status: 200,
        message: "hello...post register email,password> " + JSON.stringify(e),
      });
    }
  });
});

router.post("/empleados", urlencodedParser, (req, res) => {
  var id = req.body.id;
  var employee_name = req.body.employee_name;
  var employee_salary = req.body.employee_salary;
  var employee_age = req.body.employee_age;
  var profile_image = req.body.profile_image;
  var username = req.body.username;

  var returnEmpleados = empleados(
    id,
    employee_name,
    employee_salary,
    employee_age,
    profile_image,
    username
  ).then((e) => {
    if (e.error === -1) {
      res.json(e);
    } else {
      console.log("router empleados ok ", e);

      res.json({
        status: 200,
        message: "hello...post empleados email,password> " + JSON.stringify(e),
      });
    }
  });
});

router.put("/", (req, res) => {
  res.json({ status: 200, message: "hello...put>" });
});

module.exports = router;
