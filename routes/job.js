const express = require("express");
const Job = require("../model/job/Job");
const Router = express.Router();

const validation = (req, res, next) => {
  const {
    jobtitle,
    description,
  } = req.body;
  if (jobtitle === "" || description === "") {
    res.json({
      message: "Invalid validation"
    });
  }
  next();
};

//Post jobs
Router.post("/postjob", validation, function (req, res) {
  const job = new Job({
    jobtitle: req.body.jobtitle,
    description: req.body.description,
  });
  job
    .save()
    .then(function (data) {
      res.json({
        message: "jobs saved",
        data
      });
    })
    .catch(function (err) {
      res.json({
        message: err
      });
    });
});
//get specific job with id
Router.get("/getjob/:id", function (req, res) {
  Job.findById({
      _id: req.params.id,
    })
    .then(function (job) {
      res.json({
        job
      });
    })
    .catch(function (err) {
      console.log(err);
    });
});

module.exports = Router;