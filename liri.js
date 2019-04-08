// required packages
require("dotenv").config();
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

//required files in folder
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

// Store all of the arguments in an array -- process.env will always return an array

// Take two arguments.
// The first will be the action (i.e."spotify-this-song")
// The second will be the name of song, movie, artist/bandname).
var nodeArgs = process.argv;
const userActions = process.argv[2];
const value = process.argv[3];

//switch case statements
switch (userActions) {
   case "spotify-this-song":
      spotifyThisSong(value);
      break;

   case "movie-this":
      movieThis(value);
      break;

   case "concert-this":
      concertThis(value);
      break;

   case "do-what-it-says":
      doWhatItSays(value);
      break;
}

//Code for Spotify
function spotifyThisSong(songName) {
   songName = ""
   if (songName === undefined) {
    songName = "Talk";
    console.log("Talk");
   }
    else {
    var nodeArgs = process.argv;
    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
              songName = songName + "+" + nodeArgs[i];
              console.log(songName);
            }
            else {
              songName += nodeArgs[i];
              console.log(songName);
              //songName = process.argv[3];
            }
    }
    }
   spotify.search({type: "track", query:songName }, function(err, data) {
      if (err) {
         return console.log("Error occurred: " + err);
      }
      //Create a constant "information" that conatisn the tracks items already
      const information = data.tracks.items[0];
      const artistName = information.album.artists[0].name;
      const trackName = information.album.name;
      const previewURL = information.preview_url;
      const album = information.album.external_urls.spotify;

      console.log("================");
      console.log("Artist/s:" + artistName);
      console.log("Track:" + trackName);
      console.log("Preview Link:" + previewURL);
      console.log("Album:" + album);
      console.log("================");
   });
}
//code for OMDB
//convert this to match the spotify 
function movieThis(movieName) {
movieName = ""
   if (movieName === undefined) {
   movieName = "Mr. Nobody";
   console.log("Mr. Nobody");
   }
    else {
    var nodeArgs = process.argv;
    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
              movieName = movieName + "+" + nodeArgs[i];
              console.log(movieName);
            }
            else {
              movieName += nodeArgs[i];
              console.log(movieName);
              //songName = process.argv[3];
            }
    }
    }

   var queryUrl =
      "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"

   axios.get(queryUrl).then(function(response) {
      const movie = response.data;
      console.log("===============");
      console.log("Title: " + movie.Title);
      console.log("Year: " + movie.Year);
      console.log("IMDB Rating: " + movie.imdbRating);
      console.log("Rotten Tomatoes Rating: " + movie.tomatoRating);
      console.log("Production Country: " + movie.Country);
      console.log("Language: " + movie.Language);
      console.log("Plot: " + movie.Plot);
      console.log("Actors: " + movie.Actors);
      console.log("===============");
   })
}

//code for Bands In Town
function concertThis() {
   artistName = ""
   if (artistName === undefined) {
   artistName = "Ariana Grande";
   console.log("Ariana Grande");
   }
    else {
   var nodeArgs = process.argv;
   for (var i = 3; i < nodeArgs.length; i++) {
      if (i > 3 && i < nodeArgs.length) {
         artistName = artistName + "+" + nodeArgs[i];
         console.log(artistName);
      } else {
         artistName += nodeArgs[i];
         console.log(artistName);
      }
   }
   }

   var queryUrl =
   "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp"

   axios.get(queryUrl).then(function(response) {
   //Bands in Town has their data in an array so need to loop through
      for (var i=0; i < response.data.length; i++) {
      const concert = (response.data[i]);
      console.log("===============");
      console.log("Venue: " + concert.venue.name);
      console.log("Location: " + concert.venue.city + "," + concert.venue.country);
      console.log("Event Date: " + moment(concert.datetime).format("L"));
      console.log("==============="); 
      }
      });
}
function doWhatItSays() {
   // We will read the existing text file
   fs.readFile("random.txt", "utf8", function(err, data) {

    if (err) {
         return console.log(err)
      }
      // Break down all the comma-separated phrases inside
      data = data.split(",");
      
      //songName = readArray[1];
      // Loop through those phrases and pull the spotify-this-song function.
      for (var i = 0; i < data.length; i++) {
         var result = '';
         if (data[i]) {
            result += ("node" + " " + "liri.1.js" + " " + "spotify-this-song" + " " + data[i]);
        }
      }
      //We will now print to the terminal and execute the spotify-this-song function
      console.log(result);
      //spotifyThisSong(songName);
})
};
      /*if (err) {
         return console.log(err)
      }
      // Break down all the comma-separated phrases inside
      data = data.split(",");
      
      //songName = readArray[1];
      // Loop through those phrases and pull the spotify-this-song function.
      for (var i = 0; i < data.length; i++) {
         var result = '';
         if (data[i]) {
            result += ("node" + " " + "liri.1.js" + " " + "spotify-this-song" + " " + data[i]);
        }
      }
      //We will now print to the terminal and execute the spotify-this-song function
      console.log(result);
      //spotifyThisSong(songName);*/