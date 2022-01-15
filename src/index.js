const express = require("express");
const { connectToDatabase } = require("./utils/db");
const blogsRouter = require("./routers/blogRouter");
const usersRouter = require("./routers/userRouter");
const login = require("./controllers/login");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use("/api/blogs", blogsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", login);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err });
});

async function start() {
  console.log("Connecting to db");
  await connectToDatabase();
  app.listen(port, () => {
    console.log("Listening on " + port);
  });
}

start();
