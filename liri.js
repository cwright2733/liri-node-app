require("dotenv").config();

const axios = require("axios");
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const fs = require("fs");

const command = process.argv[2];
const input = process.argv[3];
console.log(command, input);

// Input commands =================================
if (command === "search-concert") {
    getConcert(input)
} else if (command === "spotify-this-song") {
    getSong(input)
} else if (command === "search-movie") {
    getMovie(input)
} else if (command === "feeling-lucky") {
    getLucky(input)
}

// Search-Concert ==========================
function getConcert() {
    // if (events === undefined || events === "") {
    //     events = "Mr.Nobody";
    // }
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${keys.tickemaster.id}`)
        .then(
            function (result) {
                // console.log("The date of the event is: " + result.date);
                console.log(result);
            });
}

// Search-Song =============================
function getSong(input) {

    var spotify = new Spotify(keys.spotify);

    spotify.search({
        type: "track",
        query: input,

    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items.artists);


        
        const song = data.tracks.items;
        console.log("Artist: " + song.artists.name);
        console.log("Song: " + song.name);
        console.log("Preview URL: " + song.preview_url);
        console.log("Album: " + song.album.name);
    });
}


// Search-Movie ============================
function getMovie(movie) {
    if (movie === undefined || movie === "") {
        movie = "Mr.Nobody";
    }
    //console.log(movie);

    axios.get(`http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=${keys.omdb.id}`)
        .then(
            function (response) {
                console.log("The movie is: " + response.data.Title);
                console.log("The release year is: " + response.data.Year);
                console.log("The IMDB rating is: " + response.data.imdbRating);
                console.log("The country/countries where the movie was produce is/are: " + response.data.Country);
                console.log("The movie's language is: " + response.data.Language);
                console.log("The plot is: " + response.data.Plot);
                console.log("The movie's actors are: " + response.data.Actors);
                //console.log(response.data);
            }
        )
}

// feeling-lucky ===========================
function getLucky() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        const songTitle = data.split(", ");
        songTitle.forEach((songTitle) => {
            console.log(songTitle);
        });

    });
}