const express = require("express");
const { Blog, init } = require("./db/index");
const blogsRouter = require("./routers/blogRouter");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(blogsRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err });
});

(async () => {
  await init;
  console.log("DB Ready!");
  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
})();
