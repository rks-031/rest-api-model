This repo demonstrates how to build a `REST-API`. <br/>
The tech stack used here are: Node.js and Express.js <br/>
Source: `Web Dev Simplified`

# Stages of building:
1. Install dependencies
2. Create the server
3. Create the router
4. Create the route
5. Create the model
6. Test your API

# Connection:

**In .env file:** DATABASE_URL = mongodb://localhost/shoes <just an example >
<br/>
**In server.js file:** <br/>
const mongoose = require("mongoose"); <br/>
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

# To check if database is connected:
const db = mongoose.connection; <br/>

db.on("error", (error) => {
  console.log("error");
}); <br/>

db.once("open", () => {
  console.log("Connected to database");
});


# Extension used for testing the API
REST Client<br/>
To use this create a file with a .rest extension and all the urls for different operations.
<br/>
![image](https://github.com/rks-031/rest-api-model/assets/103258259/a2a6fb50-149e-4d72-a075-17453b1cd3ee)


