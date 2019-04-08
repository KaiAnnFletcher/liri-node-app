# liri-node-app

##Important Notes

* This app uses the Command Line Interface.

1. How to use this application

    * Type "spotify-this-song" followed by the name of the song you would like to look up in order to access and search via Spotify's API. See what it returns!
        * Example of what to type: **"spotify-this-song Speed of Sound"**

    * Type "movie-this" followed by the name of the movie you would like to look up in order to access and search via OMDB's API. See what it returns!
        * Example of what to type:
        ** "movie-this August Rush" **

    * Type "concert-this" followed by the name of an artist. This accesses the Bands in Town API to pull certain event data associated with the artist.
        * Example of what to type: **"concert-this Ariana Grande"**

    * Type "do-what-it-says" and this will return mystery information based on values stored in a separate text file!

2. Features under construction :cry:

A bug fix is required for te "do-what-it-says" feature as this currently does not return data after the file system object reads and returns the vlaue to the command line.

A bug fix is also required for the default in the "movie-this" feature. This is, if no value is provided in the CLI, it defaults to a particular movie "Mr. Nobody". It is currently not working.

If you have any quetsions regarding this application, please feel free to email me at *kaiann.fletcher@mail.utoronto.ca*