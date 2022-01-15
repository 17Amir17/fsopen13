const { User, waitForUser } = require("./schemas/user");
const { Blog, waitForBlog } = require("./schemas/blog");

const init = (async () => {
  await waitForBlog;
  await waitForUser;
  return true;
})();

module.exports = { Blog, User, init };
