const tmdb = require('./tmdb');

const apiKeys = () => {
  return new Promise ((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      tmdb.setKey(results.tmdb.apiKey);
      // only passing one object so adding tmdb.apiKey to do that
    })
    .catch((err) => {
      console.error('nope not today', err);
    });
};

module.exports = {
  retrieveKeys,
};
