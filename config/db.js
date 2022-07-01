const { Sequelize } = require('sequelize');

const db = new Sequelize(
  {
    dialect: "mysql",
    host: "localhost",        
    username: "root",
    password: "Coline66..",
    database: "groupomania"    
  },
);
db.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = db;
