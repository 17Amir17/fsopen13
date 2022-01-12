const express = require("express");
const { Blog } = require("../db/index");
const router = express.Router();

router.get("/api/blogs", async (req, res, next) => {
  try {
    const blog = await Blog.findAll();
    res.json(blog);
  } catch (error) {
    next(error);
  }
});

router.post("/api/blogs", async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body);
    res.json(blog);
  } catch (error) {
    next(error);
  }
});

router.delete("/api/blogs/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) throw "no id given";
    const blog = await Blog.findByPk(id);
    if (!blog) throw "blog not found";
    await blog.destroy();
    res.json({ message: "deleted!" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
