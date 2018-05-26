const domString = (movieArray, imgConfig) => {
  // need movie array because when domString is called in events.js we are passing in an array of movies
  let strang = '';
  movieArray.forEach((movie, index) => {
    if (index % 3 === 0) {
      strang += `<div class="row">`;
    }
    strang += `<div class="col-sm-6 col-md-4">`;
    strang += `<div class="thumbnail">`;
    strang += `<img src="${imgConfig.base_url}/w342/${movie.poster_path}" alt="Movie Poster">`;
    strang += `<div class="caption">`;
    strang += `<h3>${movie.original_title}</h3>`;
    strang += `<p>${movie.overview}</p>`;
    strang += `<p><a href="#" class="btn btn-primary" role="button">Review</a> <a href="#" class="btn btn-default" role="button">Wish List</a></p>`;
    strang += `</div>`;
    strang += `</div>`;
    strang += `</div>`;

    if (index % 3 === 2) {
      strang += `</div>`;
    }
  });
  printToDom(strang);
  // put debugger on printToDom to see if array came back do this to make sure all data is there before we add domstring stuff
};

const printToDom = (stringz) => {
  $('#movies').html(stringz);
};

module.exports = {
  domString,
};
