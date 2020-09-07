const validation = (Job, req, res, next) => {
  if (Job.jobtitle === "") {
    res.end("fwrfrefrcwcdw");
  }
  if (Job.description === "") {
    res.end("fwrfrefrcwcdw");
  }
};

module.exports = validation();