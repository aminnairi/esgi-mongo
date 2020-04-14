"use strict";

const mongoose = require("mongoose");

const connection = mongoose.connect(`mongodb://admin:password@mongo:27017/SampleCollections`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected")).catch(() => console.error("Connection failed"));

module.exports = connection;
