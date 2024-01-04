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
