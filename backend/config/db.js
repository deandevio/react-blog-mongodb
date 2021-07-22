import mongoose from "mongoose";

const DB_CONNECT = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongo is running on host ${db.connection.host}`);
  } catch (error) {
    console.log(err);
  }
};

export default DB_CONNECT;
