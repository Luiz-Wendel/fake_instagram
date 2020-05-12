module.exports = {
  dialect: 'mysql', // db language
  host: 'localhost', // db host, in our case local db
  username: 'root', // username for db
  password: '', // password for db
  database: 'fake-inst', // set db name to use or create
  define: {
    timestamps: true, // set timestamps (created_at and updated_at) for all db tables
    underscored: true // set snake case isntead of native sequelize pascal/camel case
  }
}