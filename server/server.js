const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require('./config/db'); 
const userRouter = require('./routes/userRouter'); 
const passport = require("passport");
const cors = require("cors")

//configure our project to access config values from this location
dotenv.config({ path: "./config/config.env" });

connectDB(); 

//initialize our app with express
const app = express();

//use the morgan logger ONLY if we are running this project in dev
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

//you wont believe necessary this is for the ability to read json - shouldnt this be built into express?//
app.use(express.json());

app.use(cors({origin:true, credentials: true}))

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next()
})

app.use(passport.initialize());

app.use('/user', userRouter); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening to PORT: ${PORT}`);
});
