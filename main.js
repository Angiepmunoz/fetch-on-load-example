// i am getting a random `id` number for my url to render a random starwars character
const getRandom = Math.floor(Math.random() * (83 - 1) + 1);

let onLoadURL = `https://swapi.dev/api/people/${getRandom}/`;

// im using a variable called load in order to know if my page was just loaded. Once the user interacts with the page load will become false and the function createRandomCharacterSection will never run again.
let load = true;

// you can immediately invoke the fetch function to call the api if load is true
// if the value on the left is truthy, then evaluate what is on the right 
// if load is true, run func makeFetch with the onLoadURL
load && makeFetch(onLoadURL);

// or you can leverage the window object with an event listener
// window.addEventListener("load", (e)=> {
//     makeFetch(onLoadURL)
// })

const createRandomCharacterSection = (characterData) => {
  //change load to false so it is known that the initial load was done
  load = false;

  // create section for character of the day
  const section = document.querySelector(".results-section");
  const imageSrcNum = Math.floor(Math.random() * (6 - 1) + 1);
  section.innerHTML = `
    <h2> Character of the Day: </h2>
    <img class="character-image" src="assets/character${imageSrcNum}.png"></img>
    <p> Name: ${characterData.name} </p>
    <p> More P Tags with information from the API data</p>
    `;
};

//the below fetch call will happen with the user has entered a name in the form
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const userSearchValue = e.target.searchbar.value;
  makeFetch(`https://swapi.dev/api/people/?name=${userSearchValue}`);
  e.target.searchbar.value = "";
});

const getUserSearchResults = (searchData) => {
  // since I only want the "character of the day" section on load I removed that whole section
  document.querySelector(".results-section").remove();
  const main = document.querySelector("main");
  const p = document.createElement("p");
  p.innerText = `DO SOMETHING WITH THE DATA FROM THE SEARCH`;
  p.classList.add("results-section");
  main.append(p);
};
