const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB ="mongodb://127.0.0.1:27017/HospitalProject"
mongoose
  .connect(connectDB)
  .then(() => console.log("Connection successfully"))
  .catch((e) => console.log(e));
