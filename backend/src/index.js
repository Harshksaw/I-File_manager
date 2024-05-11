


import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

const TestSchema = new mongoose.Schema({
    name: String,
    description: String
  });
  
const Test = mongoose.model('Test', TestSchema);
  
  app.post('/test', async (req, res) => {
    const test = new Test(req.body);
    await test.save();
    res.send(test);
  });
  
  app.get('/test', async (req, res) => {
    const tests = await Test.find();
    res.send(tests);
  });
  
  app.put('/test/:id', async (req, res) => {
    const test = await Test.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(test);
  });
  
  app.delete('/test/:id', async (req, res) => {
    await Test.findByIdAndDelete(req.params.id);
    res.send('Deleted');
  });
  

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})















