const express = require("express");
const cors = require("cors"); // Import cors
const { connectToMongoDB } = require("./Component/MongodbConnection");
const register = require("./routes/User/AddUser");
const login = require("./routes/User/Login");
const resetpassword = require("./routes/User/ResetPassword");
const usreget = require("./routes/User/GetUser");
const usredelete = require("./routes/User/deleteUser");
const useredit = require("./routes/User/EditUser");
const addprofile = require("./routes/Profile/AddProfile");
const editprofile = require("./routes/Profile/EditProfile");
const getprofile = require("./routes/Profile/GetProfile");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("start");
});

app.use("/api", register);
app.use("/api", login);
app.use("/api", resetpassword);
app.use("/api", usreget);
app.use("/api", usredelete);
app.use("/api", useredit);

app.use("/api", addprofile);
app.use("/api", editprofile);
app.use("/api", getprofile);
console.log("sdk drrrswf s trujscdsfgfghujh ff");

// Start the server
connectToMongoDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});
