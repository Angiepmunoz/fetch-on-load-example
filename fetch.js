const makeFetch = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((starWarsData) => {
      // since load is a global variable, this file has access to it and can check if it is true or false

      //we only want to run createRandomCharacterSection when the page loads for the first time.
      !load && getUserSearchResults(starWarsData.results);
      load && createRandomCharacterSection(starWarsData);
    })
    .catch((e) => {
      console.log(e);
    });
};
