// your code here

//See the first movie's details, including its poster, title, runtime, showtime, and available tickets when the page loads.
function filmsArray(){
  fetch("http://localhost:3000/films")
  .then(res=>res.json())
  .then(filmsArray=>{
      displayMovieTitles(filmsArray)
      displayMovieOne(filmsArray[0])
  })
}
filmsArray()

function displayMovieTitles(filmsarray){
  let ul=document.getElementById("films")
  ul.innerHTML= ""  
  filmsarray.map(film =>{
      let li=document.createElement("li")
      li.className="film item"
      li.addEventListener("click",()=>handleClick(film))
      li.textContent=`${film.title}`
      ul.appendChild(li)
  }) 
}

function displayMovieOne(data){  
  let h1=document.getElementById("title")
  h1.textContent=data.title
  let div=document.getElementById("runtime")
  div.textContent=`${data.runtime } minutes`
  let p=document.getElementById("film-info")
  p.textContent=data.description
  let span=document.getElementById("showtime")
  span.textContent=data.showtime
  let ticketspan=document.getElementById("ticket-num")
  ticketspan.textContent=data.capacity-data.tickets_sold
  let img=document.getElementById("poster")
  img.src=data.poster

}

function handleClick(data){
  let h1=document.getElementById("title")
  h1.textContent=data.title
  let div=document.getElementById("runtime")
  div.textContent=`${data.runtime } minutes`
  let p=document.getElementById("film-info")
  p.textContent=data.description
  let span=document.getElementById("showtime")
  span.textContent=data.showtime
  let ticketspan=document.getElementById("ticket-num")
  ticketspan.textContent=data.capacity-data.tickets_sold
  let img=document.getElementById("poster")
  img.src=data.poster
 
}

//number of available tickets decreasing on the frontend

document.addEventListener("DOMContentLoaded", function() {
  const ticketCountElement = document.getElementById("ticket-num");

  const buyTicketBtn = document.getElementById("buy-ticket");

  function updateTicketNumber() {
    ticketCountElement.textContent = availableTickets;
  }

  buyTicketBtn.addEventListener("click", function() {
    if (availableTickets > 0) {
      availableTickets -= 1;
      updateTicketNumber();
    }
    })
});





