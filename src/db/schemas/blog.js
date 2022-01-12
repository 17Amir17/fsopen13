const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../connection");
class Blog extends Model {}

const waitForBlog = (async () => {
  await Blog.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      author: {
        type: DataTypes.TEXT,
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      underscored: true,
      timestamps: false,
      modelName: "blog",
    }
  );
  await Blog.sync();
})();

module.exports = { Blog, waitForBlog };
