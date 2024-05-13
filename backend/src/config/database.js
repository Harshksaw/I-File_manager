const mongoose = require('mongoose');



const {MONGODB_URI,NODE_ENV} =require('./server.config');


const connectToDB = async ()=> {
    console.log('Connecting to the DB server ---->');   


    try {
        if(NODE_ENV == "development") {
            await mongoose.connect(MONGODB_URI , {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              })
              .then(() => console.log('Database connected successfully !'))
              .catch(err => console.log(err));
        } 
    } catch(error) {
        console.log('Unable to connect to the DB server ---->');
        console.log(error);
    }

}

module.exports = connectToDB;