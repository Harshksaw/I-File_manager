
const express = require('express');
const mongoose = require('mongoose');


const testingRouter = express.Router();

const TestSchema = new mongoose.Schema({
    name: String,
    description: String
  });
  
  
  const Test = mongoose.model('testing', TestSchema);
  
  testingRouter.post('/test', async (req, res) => {
    console.log(req.body);
    const test = new Test(req.body);
  
    await test.save();
    res.send(test);
  });
  
  testingRouter.get('/test', async (req, res) => {
    const tests = await Test.find();
    res.send(tests);
  });
  
  testingRouter.put('/test/:id', async (req, res) => {
    const test = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(test);
  });
  
  testingRouter.delete('/test/:id', async (req, res) => {
    await Test.findByIdAndDelete(req.params.id);
    res.send('Deleted');
  });
  
module.exports = testingRouter;