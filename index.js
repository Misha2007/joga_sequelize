const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const articleRouter = require("./routes/article");
const authorRouter = require("./routes/author");

app.use("/", articleRouter);
app.use("/article", articleRouter);
app.use("/author", authorRouter);

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
