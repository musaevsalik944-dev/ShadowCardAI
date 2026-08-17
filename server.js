const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.post("/generate", async (req, res) => {

  const { prompt } = req.body;

  console.log("Запрос от ShadowCard AI:", prompt);


  res.json({
    message: "Сервер получил запрос",
    prompt: prompt
  });

});


app.listen(3000, () => {
  console.log("ShadowCard AI server запущен");
});
