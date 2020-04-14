"use strict";

const express = require("express");
const SakilaFilm = require("./models/SakilaFilm");

SakilaFilm.find().limit(1).then(console.log);
