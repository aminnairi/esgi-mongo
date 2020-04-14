"use strict";

const mongoose = require("mongoose");
const database = require("../lib/database");

const SakilaFilm = mongoose.model("SakilaFilm", new mongoose.Schema({
    Category: String,
    Length: {
        type: Number,
        default: 0
    },
    Title: String
}, {
    collection: "Sakila_films"
}));

module.exports = SakilaFilm;
