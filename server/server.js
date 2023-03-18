const express = require("express")
const app  = express()
// Global Variables
const PORT = 8000
const DB = "jokes_db"

// * Middleware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require("./config/mongoose.config")(DB)
require("./routes/jokes.routes")(app)

app.listen(PORT,()=>{
    console.log(">>> SERVER IS RUNNING ON PORT : "+ PORT +" <<<");
})