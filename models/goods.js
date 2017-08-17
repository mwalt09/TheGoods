// Dependencies
// npm install sequelize-mysql-timestamp
// var sequelize = require("sequelize");

// const TIMESTAMP = require("sequelize-mysql-timestamp")(sequelize);



// Creating Goods model
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    from: {
      type: DataTypes.DATE,
      allowNull: true
    },
    to: {
      type: DataTypes.DATE,
      allowNull: true
    },
    totalCost: {
      type: DataTypes.DECIMAL(10,2),
    },
    itemPhoto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

  Item.associate = function(models) {
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Item;
};
