var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const apiKey = process.env.TMDB_API_KEY;

const urlToDiscoverMovie =
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

router.get('/movies', (req, res) => {
    fetch(urlToDiscoverMovie)
        .then(response => response.json())
        .then(data => res.json({
            result: true,
            length: data.results.length,
            movies: data.results
        }))
        .catch(() => res.json({ result: false }));
});

module.exports = router;
