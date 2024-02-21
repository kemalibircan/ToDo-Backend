const express = require('express')
const app = express()
const port = 3001
const dbConnection = require("./models/dbConnection.js");
const bodyParser = require("body-parser");
const cors = require('cors');

const userRouter = require("./routers/userRouter.js");
const listRouter = require("./routers/listRouter.js");
const taskRouter = require("./routers/taskRouter.js");
app.use(cors()); 
app.use(bodyParser.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/list", listRouter);
app.use("/api/v1/task", taskRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



dbConnection();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})