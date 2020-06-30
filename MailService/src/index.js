const express = require("express");
const bodyParser = require("body-parser");
const sendMailToUser = require("./MailSender");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.status(200).send("API is working!");
});

app.post("/send/mail", async (req, res) => {
  try {
    const params = req.body;
    console.log("PARAMS => ", params);
    const response = await sendMailToUser(params);
    res.status(200).send('Your mail was send succesfully');
  } catch (error) {
    res.status(500).send("Something happend, please try again");
  }
});

app.listen(3001, () => {
  console.log("app is running in port 3001");
});
