const express = require("express");
const { Blog, waitForBlog } = require("./schemas/blog");

const app = express();

const init = (async () => {
  await waitForBlog;
  return true;
})();

module.exports = { Blog, init };
