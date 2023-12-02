import mongoose from "mongoose";

const connection = {
  isConnected: false,
};

async function ensureDbConnect() {
  if (connection.isConnected) {
    return;
  }

  let db = await mongoose.connect(
    "mongodb+srv://cod3r:MaodgvFbZ5CEO3en@cluster0.ozolgl3.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, dbName: "shopical" }
  );

  connection.isConnected = true;
}

export default ensureDbConnect;
