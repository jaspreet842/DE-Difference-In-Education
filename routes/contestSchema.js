const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/loginInfo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`MongoDB connected for contest`))
    .catch((err) => console.log(err));

//CREATE MONGOOSE SCHEMA AND CONVERT IT INTO MODEL
const contestSchema = new mongoose.Schema({
    organizer: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});
const contest = mongoose.model('contest', contestSchema);

module.exports = contest;