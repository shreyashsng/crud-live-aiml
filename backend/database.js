const mongoose=require('mongoose');
async function dbConn(){
    const conn=await mongoose.connect('mongodb+srv://work4mirrorbug2:root@cluster0.wdclqdd.mongodb.net/crud-live-aiml?retryWrites=true&w=majority&appName=Cluster0')
    if (conn){
        console.log("Database successfully connected")
    }
    else{
        console.log("Database not connected")
    }
}

module.exports =dbConn;