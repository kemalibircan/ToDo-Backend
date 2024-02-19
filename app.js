const express = require('express')
const app = express()
const port = 3001
const dbConnection = require("./models/dbConnection.js");
const bodyParser = require("body-parser");

const userRouter = require("./routers/userRouter.js");

app.use(bodyParser.json());
app.use("/api/v1/users", userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



dbConnection();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})