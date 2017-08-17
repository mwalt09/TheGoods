// Dependencies
// npm install sequelize-mysql-timestamp
// var sequelize = require("sequelize");

// const TIMESTAMP = require("sequelize-mysql-timestamp")(sequelize);



// Creating Goods model
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pricePerHour: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    outTimeStamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    inTimeStamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    totalCost: {
      type: DataTypes.DECIMAL(10,2),
    },
    itemPhoto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

  Item.associate = function(models) {
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Item;
};
