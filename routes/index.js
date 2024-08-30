var express = require("express");
var router = express.Router();
const passport = require("passport");
const localStrategy = require("passport-local");
const userModel = require("./users");
const projectModel = require("./project");
const proposalModel = require("./proposal");
passport.use(new localStrategy(userModel.authenticate()));

//get routes 

router.get("/", function (req, res) {
  res.render("index",{title:"skillsync"});
});


module.exports = router;
