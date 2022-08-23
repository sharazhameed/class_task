const mongoose = require('mongoose');

const connectDatabase = async () => {
  const databaseInfo = await mongoose.connect(process.env.DATABASE_URL);
  console.log(`Database intialized at ${databaseInfo.connection.host}`);
};
module.exports = connectDatabase;
