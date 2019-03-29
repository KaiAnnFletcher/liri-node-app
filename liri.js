// required packages
require("dotenv").config();
var axios = require("axios");

//required files in folder
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);