const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect("mongodb+srv://ksaikat009:gHt0UA5Q35r1JzsR@cluster0.euybszc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

module.exports = connect;