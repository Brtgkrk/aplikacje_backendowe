const express = require('express');
const mongoose = require('mongoose');

const courseRouter = require('./routes/courseRoutes');
const userRouter = require('./routes/userRoutes');
const opinionRouter = require('./routes/opinionRoutes');

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb+srv://jakub:GCuw6X6rODrU9E8w@cluster0.ifqq5.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'));

// ROUTER

app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/opinions', opinionRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Running on port ${port}...`);
});