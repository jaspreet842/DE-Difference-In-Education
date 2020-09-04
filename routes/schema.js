const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginInfo', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log(`MongoDB connected`))
    .catch((err) => console.log(err));

//CREATE MONGOOSE SCHEMA AND CONVERT IT INTO MODEL
const loginInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    skill: {
        type: String,
        required: true
    },
    file: {
        data: Buffer, 
        contentType: String
    },
    phone: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});
const loginInfo = mongoose.model('loginInfo', loginInfoSchema);

module.exports = loginInfo;