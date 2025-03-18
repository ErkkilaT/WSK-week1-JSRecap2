'use strict';
const n = prompt('How many movies?');
const movies = [];
for (let i = 0; i < n; i++) {
  const name = prompt('give name:');
  const rating = prompt('give rating 1-5:');
  movies.push({name: name, rating: rating});
}

movies.sort((a, b) => b.rating - a.rating);
for (let i of movies) {
  document.querySelector('#target').innerHTML +=
    'Name: ' + i.name + ' Rating:' + i.rating + '<br>';
}
document.querySelector(
  '#highest'
).innerHTML = `Highest rated movie:<br>Name: ${movies[0].name}<br>Rating: ${movies[0].rating}`;
