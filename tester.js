const sequelize = require('./config/connection');

sequelize.sync({ force: true });
console.log('\n----- DATABASE SYNCED -----\n');