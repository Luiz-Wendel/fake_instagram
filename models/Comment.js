const { Model, DataTypes } = require('sequelize')

class Comment extends Model {
  static init(connection) {
    super.init({
      comment: DataTypes.STRING(500),
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

    this.belongsTo(models.Publication, {
      foreignKey: 'publication_id',
      as: 'publication'
    })
  }
}

module.exports = Comment