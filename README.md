



Liri Bot App
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

IMAGE LINK
<a href="http://tinypic.com?ref=ej7bf7" target="_blank"><img src="http://i67.tinypic.com/ej7bf7.png" border="0" alt="Image and video hosting by TinyPic"></a>

[IMG]http://i67.tinypic.com/ej7bf7.png[/IMG]

Direct Link
http://i67.tinypic.com/ej7bf7.png

LIRI uses the following commands:
search-concerts

search-songs

search-movies



Technologies used:
Node.js

Javascript

npm packages:
Node-Spotify-API

Ticketmaster API

OMDB API

Axios

DotEnv

How to Run LIRI-Bot
node liri.js search-concerts <artist/band name here>

This will search the TicketMaster Artist Events API for an artist and render the following information about each event to the terminal:

Name of the venue
Venue location
Date of the Event (use date-fns to format this as "MM/DD/YYYY")
node liri.js search-songs '<song name here>'

This will show the following information about the song in your terminal/bash window

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
If no song is provided then your program will default to "The Sign" by Ace of Base.

node liri.js search-movies '<movie name here>'

This will output the following information to your terminal/bash window:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Rotten Tomatoes Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

node liri.js feeling-lucky

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

