$(document).ready(function () {
    var search = [];

    $(".btn-outline-warning").click(function () {
        $('.mr-sm-2').css("display", "none");
        $('.btn-outline-warning').css("display", "none");
        $('.borderr').css("padding-top", "0");
        $('.title').css("padding-top", "25px");
        $('.title-0, .title-2').empty();
        $('.main-container').css("background-color", "black");
        $('.main-container').css("padding-bottom", "15px");
        $('.main-container').css("padding-left", "15px");
        $('.main-container').css("padding-right", "15px");
        $('.main-container').css("border-radius", "20px");
        $('.container').before('<button onClick="window.location.reload();" class="btn btn-warning new-search">New Search</button>');
        $('.btn-warning').css("position", "absolute");
        $('.btn-warning').css("top", "100px");
        $('.btn-warning').css("background-color", "rgb(130, 0, 0)");
        $('.btn-warning').css("border-color", "rgb(130, 0, 0)");
        $('.btn-warning').css("color", "#fff");
        var value = $('.mr-sm-2').val();
        search.push(value);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=" + search,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
                "x-rapidapi-key": "f16486cf4cmsh942313c50ced177p116916jsn88a84633235d"
            }
        }

        $.ajax(settings).done(function (response) {
            $('.title').append(response.results[0].name);
            $('.feedImg').attr("src", response.results[0].picture);
            $('.main-container').append('<li>' + response.results[1].locations[0].display_name + '</li>');
            $('.main-container').append('<a target="_blank" class="url-6">Watch Now</a>');
            $('.url-6').attr('href', response.results[1].locations[0].url);
            $('.main-container').append('<li>' + response.results[0].locations[0].display_name + '</li>');
            $('.main-container').append('<a target="_blank" class="url-1">Watch Now</a>');
            $('.url-1').attr("href", response.results[0].locations[0].url);
            $('.main-container').append('<li>' + response.results[0].locations[1].display_name + '</li>');
            $('.main-container').append('<a target="_blank" class="url-2">Watch Now</a>');
            $('.url-2').attr('href', response.results[0].locations[1].url);
            $('.main-container').append('<li>' + response.results[0].locations[2].display_name + '</li>');
            $('.main-container').append('<a target="_blank" class="url-3">Watch Now</a>');
            $('.url-3').attr('href', response.results[0].locations[2].url);
            $('.main-container').append('<li>' + response.results[0].locations[3].display_name + '</li>');
            $('.main-container').append('<a target="_blank" class="url-4">Watch Now</a>');
            $('.url-4').attr('href', response.results[0].locations[3].url);
            $('.main-container').append('<li>' + response.results[0].locations[4].display_name + '</li>');
            $('.main-container').append('<a target="_blank" class="url-5" style="margin-bottom:25px;">Watch Now</a>');
            $('.url-5').attr('href', response.results[0].locations[4].url);
        });
    })

    var theaterId = window.location.href.split("/")[4];
    // Make a request to the Fandango API to get the list of movies playing at the theater.
    $.ajax({
        url: "https://api.fandango.com/v1/theaters/" + theaterId + "/movies",
        dataType: "json",
        apikey: "dxxgq4rhz66h7542h3pe8bzu",
        sig: "y4zKxENusZ",
        success: function (data) {
            // Loop through the list of movies and create a movie card for each one.
            for (var i = 0; i < data.movies.length; i++) {
                var movie = data.movies[i];

                // Create a movie card element.
                var movieCard = $("<div>");
                movieCard.addClass("movie-card");

                // Add the movie title to the movie card.
                var movieTitle = $("<h2>");
                movieTitle.text(movie.title);
                movieCard.append(movieTitle);

                // Add the movie poster image to the movie card.
                var moviePoster = $("<img>");
                moviePoster.attr("src", movie.posterUrl);
                movieCard.append(moviePoster);

                // Add the movie release date to the movie card.
                var movieReleaseDate = $("<p>");
                movieReleaseDate.text("Release Date: " + movie.releaseDate);
                movieCard.append(movieReleaseDate);

                // Add the movie rating to the movie card.
                var movieRating = $("<p>");
                movieRating.text("Rating: " + movie.rating);
                movieCard.append(movieRating);

                // Add the movie card to the DOM.
                $(".movies").append(movieCard);
            }
        }
    });
});

    $('.mr-sm-2').keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            $('.btn-outline-warning').click();
            return false;
        }
    });
