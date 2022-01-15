const { Model, DataTypes } = require("sequelize");

const { sequelize } = require("../connection");

class User extends Model {}

const waitForUser = (async () => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      underscored: true,
      timestamps: false,
      modelName: "user",
    }
  );
  await User.sync();
})();

module.exports = { User, waitForUser };
