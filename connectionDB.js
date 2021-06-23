const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const connec = await mongoose.connect(
        "mongodb+srv://najla:test1234@cluster0.8khdg.mongodb.net/people?retryWrites=true&w=majority",
        {
          useUnifiedTopology: true,
          useNewUrlParser: true,       
          useCreateIndex: true,
          useFindAndModify: false 
        }
      );
      console.log(`MongoDB connected: ${connec.connection.host}`);
    } catch (error) {
      console.log(`Error found: ${error.message}`);
      process.exit(1);
    }
  };
  module.exports = connectDB;
