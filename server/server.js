const express = require("express");
const userRouter = require("./Routes/userRoute");
const adminRouter = require("./Routes/adminRoute");
const doctorRoute=  require("./Routes/doctorsRoutes");
const app = express();
require("dotenv").config;
require("./config/dvConfig");

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
