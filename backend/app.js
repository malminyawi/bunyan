//dotenv 
require( "dotenv").config();
//express
const express = require ( "express");
const app = express(); 
//middleware json
app.use(express.json());
//connection DB
//simple logger 
if(process.env.NODE_ENV === "dev") {
    app.use (( req , res , next)=>{
        console.log(`${req.method} ${req.originalUrl}`);
        next();
    }
    )}
    //test route 
    app.get("/test", (req , res ) =>{
        return res.json({msg:"test route"})
    });

    const connectDB = require("./config/db");
    connectDB();
// port
const PORT = process.env.PORT || 8000;
//run server 
app.listen(PORT, ()=> {
    console.log(`server is running ${PORT}`);
});
