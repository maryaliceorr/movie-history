const domString = (movieArray, imgConfig, whereToPrint, myCollectionMode = false) => {
  // need movie array because when domString is called in events.js we are passing in an array of movies
  let strang = '';
  movieArray.forEach((movie, index) => {
    if (index % 3 === 0) {
      strang += `<div class="row">`;
    }
    strang += `<div class="col-sm-6 col-md-4">`;
    strang += `<div class="thumbnail movie" data-firebase-id="${movie.id}">`;
    if (myCollectionMode) {
      strang += `<a class="btn deleteMovieFromCollectionEvent">X</a>`;
    }
    strang += `<img data-poster="${movie.poster_path}" src="${imgConfig.base_url}/w342/${movie.poster_path}" alt="Movie Poster">`;
    strang += `<div class="caption">`;
    strang += `<h3 class="movie-title">${movie.original_title ? movie.original_title : movie.title}</h3>`;
    strang += `<p class="movie-overview">${movie.overview}</p>`;
    if (!myCollectionMode) {
      strang += `<p><a class="btn btn-default addMovieToWishList" role="button">Watch List</a></p>`;
    } else if (myCollectionMode && !movie.isWatched) {
      strang += `<p><a class="btn btn-primary updateMovieToWatched" role="button">I've Watched It</a></p>`;
    } else {
      strang += `<p>I'm goint to put star rating here one day.</p>`;
    }
    strang += `</div>`;
    strang += `</div>`;
    strang += `</div>`;

    if (index % 3 === 2) {
      strang += `</div>`;
    }
  });
  printToDom(whereToPrint, strang);
  // put debugger on printToDom to see if array came back do this to make sure all data is there before we add domstring stuff
};

const printToDom = (whereToPrint, stringz) => {
  $(`#${whereToPrint}`).html(stringz);
};

module.exports = {
  domString,
};
