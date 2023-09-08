const settings = {
    async: true,
    crossDomain: true,
    url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
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
      <img src="https://image.tmdb.org/t/p/w185/${movie.poster_path}" alt="${movie.title}">
      <h3 style="margin-top: 20px;">${movie.title}</h3>
      <p class="movie-overview">${movie.overview}</p>
    `;
        document.getElementById('movies').appendChild(movieEl);
    }
    $('.movie-overview').after('<a href="https://www.fandango.com/" target="_blank"><button class="btn btn-outline-warning buy-tickets" type="button" style="margin-top: 50px; margin-bottom: 50px; border: 1px solid !important; border-color: #26bf47 !important; box-shadow: 0 0 10px #26bf47 !important;">Buy Tickets!</button></a>');
});