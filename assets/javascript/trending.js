const settings = {
    async: true,
    crossDomain: true,
    url: 'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTdmMGNhNDU4MmVjMzFjZjE5MmRkZWRhODg2NmI3YSIsInN1YiI6IjY0ZmE2MTZlZGMxY2I0MDBlNTNmMjdiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XB7NcuFoQI83NnsGWh2_re05X7R2E9FQAJMd9XC5YuM'
    }
};

$.ajax(settings).done(function (response) {
    const movies = response.results;
    for (const movie of movies) {
        const movieEl = document.createElement('li');
        movieEl.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w185/${movie.poster_path}" alt="${movie.original_name}">
      <h3 style="margin-top: 20px;">${movie.original_name}</h3>
      <p class="tv-overview">${movie.overview}</p>
    `;
        document.getElementById('movies').appendChild(movieEl);
    }

    $(".up-btn1").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
    });
});