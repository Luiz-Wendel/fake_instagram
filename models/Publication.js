const { Model, DataTypes } = require('sequelize')

class Publication extends Model {
  static init(connection) {
    super.init({
      image: DataTypes.STRING,
      description: DataTypes.STRING(500),
      created_at: DataTypes.DATE
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
  }
}

module.exports = Publication