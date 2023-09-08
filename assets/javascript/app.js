$(document).ready(function () {
    var search = [];

    $(".btn-outline-warning").click(function () {
        $('.mr-sm-2').css("display", "none");
        $('.btn-outline-warning').css("display", "none");
        $('.borderr').css("padding-top", "0");
        $('.title').css("padding-top", "25px");
        $('.title-0, .title-2').empty();
        $('.main-container').css("background-color", "black");
        $('.main-container').css("padding-bottom", "30px");
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
            $('.main-container').append('<li style="margin-top: 20px; margin-bottom: 20px;">' + response.results[1].locations[0].display_name + '</li>');
            $('.main-container').append('<a target="_blank" class="url-6">Watch Now</a>');
            $('.url-6').attr('href', response.results[1].locations[0].url);
            $('.main-container').append('<li style="margin-top: 20px; margin-bottom: 20px;">' + response.results[0].locations[0].display_name + '</li>');
            $('.main-container').append('<a target="_blank" class="url-1">Watch Now</a>');
            $('.url-1').attr("href", response.results[0].locations[0].url);
            $('.main-container').append('<li style="margin-top: 20px; margin-bottom: 20px;">' + response.results[0].locations[1].display_name + '</li>');
            $('.main-container').append('<a target="_blank" class="url-2">Watch Now</a>');
            $('.url-2').attr('href', response.results[0].locations[1].url);
            $('.main-container').append('<li style="margin-top: 20px; margin-bottom: 20px;">' + response.results[0].locations[2].display_name + '</li>');
            $('.main-container').append('<a target="_blank" class="url-3">Watch Now</a>');
            $('.url-3').attr('href', response.results[0].locations[2].url);
            $('.main-container').append('<li style="margin-top: 20px; margin-bottom: 20px;">' + response.results[0].locations[3].display_name + '</li>');
            $('.main-container').append('<a target="_blank" class="url-4">Watch Now</a>');
            $('.url-4').attr('href', response.results[0].locations[3].url);
            $('.main-container').append('<li style="margin-top: 20px; margin-bottom: 20px;">' + response.results[0].locations[4].display_name + '</li>');
            $('.main-container').append('<a target="_blank" class="url-5" style="margin-bottom:25px;">Watch Now</a>');
            $('.url-5').attr('href', response.results[0].locations[4].url);
        });
    })

});

    $('.mr-sm-2').keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            $('.btn-outline-warning').click();
            return false;
        }
    });
