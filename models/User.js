const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.hasMany(models.Publication, {
      foreignKey: 'user_id',
      as: 'publications'
    })
  }
}

module.exports = User