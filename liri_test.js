/*
// required packages
require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs")

//required files in folder
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Take two arguments.
// The first will be the action (i.e."spotify-this-song")
// The second will be the name of song, movie, artist/bandname).
var action = process.argv[2];
var value = process.argv[3];

//switch case statements
switch (action) {
  case "spotify-this-song":
    spotifyThisSong();
    break;
  
  case "movie-this":
    movieThis();
    break;
  
  case "concert-this":
    concertThis();
    break;
  
  case "do-what-it-says":
    doWhatItSays();
    break;
  }

//Code for Spotify
function spotifyThisSong() {
var songName = "";

for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    songName = songName + "+" + nodeArgs[i];
    console.log(songName);
  }
  else {
    songName += nodeArgs[i];
    console.log(songName);
  }
}

spotify.search({ type:'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    const items = data.items
    let i
    for(i = 0; i < items.length; i++) {
      console.log ("Artist/s:" + items[i].artists);
      console.log("Name of Song:" + items[i].track);
      console.log("Preview Link:" + items[i].preview_url);
      console.log("Album:" + items[i].album);
    }

  /*console.log(data);
  console.log("Artist/s:" + data.artists);
  console.log("Name of Song:" + data.track);
  console.log("Preview Link:" + data.preview_url);ls
  console.log("Album:" + data.album); 
  });
});
}

//code for OMDB
function movieThis() {
  var movieName = "";

for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
    console.log(movieName);
  }
  else {
    movieName += nodeArgs[i];
    console.log(movieName);
  }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Title: " + response.data.title);
    console.log("Year: " + response.data.year);
    console.log("IMDB Rating: " + response.data.imdb_rating)
    console.log("Rotten Tomatoes Rating: " + response.data.tomato_rating);
    console.log("Production Country: " + response.data.country);
    console.log("Language: " + response.data.language);
    console.log("Plot: " + response.data.plot);
    console.log("Actors: " + response.data.actors);
  });
}

//code for Bands In Town
function concertThis() {

  var artistName = "";

for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    artistName = artistName + "+" + nodeArgs[i];
    console.log(artistName);
  }
  else {
    artistName += nodeArgs[i];
    console.log(artistName);
  }
}

var queryUrl = "http://www.omdbapi.com/?t=" + artistName + "&y=&plot=short&apikey=trilogy";

axios.get(queryUrl).then(
  function(response) {
    console.log("Venue: " + response.venue.name);
    console.log("Location: " + response.city);
    console.log("Event Date: " + response.datetime)
    /*console.log("Rotten Tomatoes Rating: " + response.datetime);
    console.log("Production Country: " + response.data.country);
    console.log("Language: " + response.data.language);
    console.log("Plot: " + response.data.plot);
    console.log("Actors: " + response.data.actors);
  });
}

function doWhatItSays() {
  // We will read the existing text file
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
  // Break down all the comma-separated phrases inside
  data = data.split(",");
  var result = 0;

  // Loop through those phrases and pull the spotify-this-song function.
   for (var i = 0; i < data.length; i++) {
      if (data[i]) {
      result += (data[i]);
      }
    }

  //We will now print to the terminal and execute the spotify-this-song function
  console.log(result);
  spotifyThisSong();
});
}*/