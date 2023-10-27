// Your code here

//See the first movie's details, including its poster, title, runtime, showtime, and available tickets when the page loads.

fetch('http://localhost:3000/films/1')
  .then(response => response.json())
  .then(filmsData => {
    console.log('Films:', filmsData);
  })

function renderOneFilm (film) {
   let movieList = document.createElement('li')
   list.classname = 'film item'
   list.innerHTML = `
   <li>${film.title}</li>
   `
   let moviePoster = document.createElement('img')
    image.id = 'poster'
    image.innerHTML = `
    <img ${film.poster} />
    `

   let movieDescription = document.createElement('div')
   card.classname = 'card'
   card.innerHTML = 
   `<div class = "card">
   <h4>${film.title}</h4>
   <p>${film.runtime}</p>
   </div>
   <div class = "content">
   <p>${film.descripiton}</p>
   <span class = "ui label">${film.showtime}</span>
   <span>${film.tickets_sold}</span>
   </div>
   <div>
   <button> Buy Ticket </button>
   </div>
   `
  document.querySelector('#showing').appendChild(movieDescription)
  document.querySelector('#poster').appendChild(moviePoster)
  document.querySelector('.film.item').appendChild(movieList)
}

function initialize () {
    filmsData.forEach(film => renderOneFilm(film))
}
initialize()