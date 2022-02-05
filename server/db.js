const mongoose = require('mongoose')

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true, 

      useUnifiedTopology: true 
    };
    await mongoose.connect(
      "mongodb+srv://belial:kiLLer123@devconnector-belial.o7kq5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("Connected to database");
  } catch (error) {
    console.log(
      "Could not connect to database",
      error
    );
  }
}