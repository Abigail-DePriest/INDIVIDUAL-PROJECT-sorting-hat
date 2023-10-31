/*const students = [

  {
  id: 1,
  name: "",
  house: "Slytherin",
  houseColor: "Green",

},
{
  id: 1,
  name: "",
  house: "Gryffindor",
  houseColor: "Crimson",
},
  {
    id: 1,
    name: "",
    house: "Huffle Puff",
    houseColor: "Yellow",
  },
  {
    id: 1,
    name: "",
    house: "Ravenclaw",
    houseColor: "Blue",
  },


] */









const startButton = document.querySelector("#startButton")
const nameForm = document.querySelector("#nameForm")


startButton.addEventListener ("click", (event) => {
  let domString = ""
  renderToDom = (nameForm) => {

     
   domString+= `

     <div class="mb-3">
      <label for="nameForm" class="form-label"> Student Name: </label>
       <input type="name" class="form-control" id="nameForm" aria-described by="">
    </div>

      <button type="button" id="submit" class="btn btn-primary"> Submit </button>

     `

     }
  

renderToDom("#nameForm", domString)

 nameForm.innerHTML = domString
} )


  /*const renderToDom= (e) => {
  


  

}*/







/*const cardDiv = document.querySelector("#card")

const renderToDom = (students) => {
  let domString= "",

  for (student of students) {
    domString+= `<div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">${Name}</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
    

  }

  cardDiv.innerHTML = domString;
} */
