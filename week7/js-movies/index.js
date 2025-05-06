// Wait for the DOM to be ready to use
// then listen for button click events
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#top_rated").addEventListener('click', handleTopRatedClick)
  document.querySelector("#now_playing").addEventListener('click', handleNowPlayingClick)
  document.querySelector("form").addEventListener('submit', handleSearchForm)
})

let likes = {}

function handleSearchForm(e) {
  e.preventDefault();
  const keyword = document.querySelector('input').value
  const url = urlForSearch(keyword)
  drawPosters(url)
  document.querySelector('input').value = ""
}

// The user clicked the "Top Rated Movies" button
function handleTopRatedClick(e) {
  e.preventDefault();

  // Determine the URL for the "top rated movies" API call
  const url = urlForMovies('top_rated')
  drawPosters(url)
}

function handleNowPlayingClick(e) {
  e.preventDefault();

  // Determine the URL for the "now playing" API call
  const url = urlForMovies('now_playing')
  drawPosters(url)
}

function drawPoster(movie) {
  return `<div class="col-sm-3 text-center mb-2 poster" data-movie-id=${movie.id}>
    <img src="http://image.tmdb.org/t/p/w185/${movie.poster_path}"
        class="img-fluid"
        alt="Poster for ${movie.title}">
    <p class="mt-2">
      ${movie.release_date ? movie.release_date.substr(0, 4) : null}
      <span class="badge bg-primary mx-3">
      ${movie.vote_average.toFixed(1)}
      </span>
      <a href="#" class="like_button">
        &hearts; 
        <span class="like_count">${likes[movie.id]}</span>
      </a>
    </p>
  </div>`
}

function drawPosters(url) {
  fetch(url).then((r) => r.json()).then((data) => {
    console.log(data)
    const listOfMovies = data.results.filter(movie => (movie.vote_average >= 6.0))

    // Generate the HTML for the wall of posters
    let htmlForMoviePosters = `<div class="row">`
    for (movie of listOfMovies) {
      if (likes[movie.id] == null) {
        likes[movie.id] = 0
      }
      htmlForMoviePosters += drawPoster(movie)
    }
    htmlForMoviePosters += `</div>`  // end of wall of posters

    // Update the DOM with the new HTML
    let element = document.querySelector("#movies")
    element.innerHTML = htmlForMoviePosters

    // Handle click events for the Like count
    document.querySelectorAll(".poster").forEach(poster => {
      poster.querySelector('.like_button').addEventListener("click", function (e) {
        e.preventDefault();
        const movieId = poster.dataset['movieId']
        likes[movieId] = likes[movieId] + 1
        poster.querySelector('.like_count').innerText = likes[movieId]
      })
    })
  })
}
// bde024f3eb43f597aafe01ed9c9098c6
function getApiKey() { return "bde024f3eb43f597aafe01ed9c9098c6" }

function urlForSearch(keyword) {
  const apiKey = `api_key=${getApiKey()}`
  const language = "language=en-US"
  const search = `query=${keyword}`
  const region = "region=US"
  const filter = "include_adult=false"
  const base_url = `https://api.themoviedb.org/3/search/movie`
  return `${base_url}?${apiKey}&${search}&${language}&${region}&${filter}`
}

function urlForMovies(resource) {
  const apiKey = `api_key=${getApiKey()}`
  const language = "language=en-US"
  const region = "region=US"
  const filter = "include_adult=false"
  const base_url = `https://api.themoviedb.org/3/movie/${resource}`
  return `${base_url}?${apiKey}&${language}&${region}&${filter}`
}
