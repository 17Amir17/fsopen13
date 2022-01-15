const express = require("express");
const { Blog, User } = require("../models/index");
const auth = require("../middlware/auth");
const router = express.Router();

router.get("", async (req, res, next) => {
  try {
    const blog = await Blog.findAll({
      include: {
        model: User,
        attributes: ["name"],
      },
    });
    res.json(blog);
  } catch (error) {
    next(error);
  }
});

router.post("", auth, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.decodedToken.id);
    const blog = await Blog.create({
      ...req.body,
      userId: user.id,
    });
    res.json(blog);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const blog = await getBlogByReq(req);
    await blog.destroy();
    res.json({ message: "deleted!" });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const blog = await getBlogByReq(req);
    blog.likes++;
    await blog.save();
    res.json(blog);
  } catch (error) {
    next(error);
  }
});

async function getBlogByReq(req) {
  const id = req.params.id;
  if (!id) throw "no id given";
  const blog = await Blog.findByPk(id);
  if (!blog) throw "blog not found";
  return blog;
}

module.exports = router;
