import mongoose from "mongoose";
let alreadyConnected = false;

export async function ensureDbConnected() {
  if (alreadyConnected) {
    return;
  }
  alreadyConnected = true;
  await mongoose.connect(
    "mongodb+srv://user1:user1457!@cluster0.ozolgl3.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "shopical",
    }
  );
}
