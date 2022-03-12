const Result = require("../models/resultModel");

exports.findResults = async (req, res) => {
  const results = await Result.find();
  res.send({ data: results });
};

exports.createResult = async (req, res) => {
  const result = new Result(req.body);
  await result.save();
  res.send({ data: result }); 
};

exports.findResult = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    res.send({ data: result });
  } catch {
    res.status(404).send({ error: "Result is not found!" });
  }
};

exports.updateResult = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    Object.assign(result, req.body);
    result.save();
    res.send({ data: result });
  } catch {
    res.status(404).send({ error: "Result is not found!" });
  }
};

exports.deleteResult = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    await result.remove();
    res.send({ data: true });
  } catch {
    res.status(404).send({ error: "Result is not found!" });
  }
};
