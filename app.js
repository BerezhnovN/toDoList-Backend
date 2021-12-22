const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());

const url = "mongodb+srv://BerezhnovNik:nberezhnov123@cluster0.rfpwv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url, { useUnifiedTopology: true });

const apiRoutes = require("./src/modules/routes/routes");

app.use(bodyParser.json());
app.use("/", apiRoutes);

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});