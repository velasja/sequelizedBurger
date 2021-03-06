module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }    
  },
    {
      timestamps: true,
      createdAt: "created_on",
      updatedAt: false,
      deletedAt: false
    }
  );
  return Burger;
  console.log(Burger);
};