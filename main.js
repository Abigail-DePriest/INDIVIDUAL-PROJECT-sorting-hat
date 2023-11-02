/*const students = [

  {
  id: 1,
  name: "Regalus Black",
  house: "Slytherin",
  houseColor: "Green"

},
{
  id: 2,
  name: "Severus Snape",
  house: "Slytherin",
  houseColor: "Green"
},



{
  id: 3,
  name: "Horace Slughorn",
  house: "Slytherin",
  houseColor: "Green"
},



  {
    id: 4,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    houseColor: "Yellow"
  },

  
  {
    id: 5,
    name: "Nymphadora Tonks",
    house: "Hufflepuff",
    houseColor: "Yellow"
  },

  
  {
    id: 6,
    name: "Ernie Macmillan",
    house: "Hufflepuff",
    houseColor: "Yellow"
  },
  {
    id: 7,
    name: "Cho Chang",
    house: "Ravenclaw",
    houseColor: "Blue"
  },

  {
    id: 8,
    name: "Filius Flitwick",
    house: "Ravenclaw",
    houseColor: "Blue"
  },

  {
    id: 9,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    houseColor: "Blue"
  },
  {
    id: 10,
    name: "Hermione Grainger",
    house: "Gryffindor",
    houseColor: "Crimson"
  },
  {
    id: 11,
    name: "Ron Weasley",
    house: "Gryffindor",
    houseColor: "Crimson"
  },

  {
    id: 12,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    houseColor: "Blue"
  }


] ;









//const card = document.querySelector("#card")


const renderToDom = (students) => {
  let domString= "";
  for (student of students) {
    domString +=
    `<div class="card">
    <div class="card-header">
      color
    </div>
    <div class="card-body">
      <h5 class="card-title">${students.name}</h5>
      <p class="card-text">${students.house}</p>
      <a href="#" id="expel" class="btn btn-primary">Expel</a>
    </div>
    </div>`
  }


card.innerHTML = domString;
 
}
  renderToDom(students)





const startButton = document.querySelector("#startButton")
const nameForm = document.querySelector("#nameForm")


startButton.addEventListener ("click", () => {
  
 
    

  
  const formOnDom = (nameForm) => {
let domString = ""
     
   domString+= `

     <div class="mb-3">
      <label for="nameForm" class="form-label"> Student Name: </label>
       <input type="name" class="form-control" id="nameForm" aria-described by="">
    </div>

      

     `
 

     }

 
nameForm.innerHTML = domString;

    })
formOnDom(nameForm)

 
const submit= document.querySelector("#submit")
const card= document.querySelector("#card")

submit.addEventListener("click", (event) => {
     let domString= ""
  
const cardsOnDom = (students) => 



 {    domString+=  `<div class="card">
    <div class="card-header">
      color
    </div>
    <div class="card-body">
    <h5 class="card-title">${students.name}</h5>
    <p class="card-text">${students.house}</p>
    <a href="#" id="expel" class="btn btn-primary">Expel</a>
  </div>
  </div>`
}
 

card.innerHTML = domString;

})

cardsOnDom(students)*/


const students = [

  {
  id: 1,
  name: "Regalus Black",
  house: "Slytherin",
  houseColor: "Green"

},
{
  id: 2,
  name: "Severus Snape",
  house: "Slytherin",
  houseColor: "Green"
},



{
  id: 3,
  name: "Horace Slughorn",
  house: "Slytherin",
  houseColor: "Green"
},



  {
    id: 4,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    houseColor: "Yellow"
  },

  
  {
    id: 5,
    name: "Nymphadora Tonks",
    house: "Hufflepuff",
    houseColor: "Yellow"
  },

  
  {
    id: 6,
    name: "Ernie Macmillan",
    house: "Hufflepuff",
    houseColor: "Yellow"
  },
  {
    id: 7,
    name: "Cho Chang",
    house: "Ravenclaw",
    houseColor: "Blue"
  },

  {
    id: 8,
    name: "Filius Flitwick",
    house: "Ravenclaw",
    houseColor: "Blue"
  },

  {
    id: 9,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    houseColor: "Blue"
  },
  {
    id: 10,
    name: "Hermione Grainger",
    house: "Gryffindor",
    houseColor: "Crimson"
  },
  {
    id: 11,
    name: "Ron Weasley",
    house: "Gryffindor",
    houseColor: "Crimson"
  },

  {
    id: 12,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    houseColor: "Blue"
  }


] ;

const renderToDom= (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (students) => {
  let domString= "";
  for (student of students) {
    domString +=
    `<div class="card">
    <div class="card-header">
      color
    </div>
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="card-text">${student.house}</p>
      <p class="card-text">${student.houseColor}</p>
      <a href="#" id="expel" class="btn btn-danger">Expel</a>
    </div>
    </div>`
}
 
//renderToDom("#card", domString);
card.innerHTML = domString;

}
cardsOnDom(students);


 document.getElementById("startButton").hidden = false;
 document.getElementById("nameForm").hidden = true;
 document.getElementById("submit").hidden = true;

document.getElementById("startButton").addEventListener("click", () => {
  document.getElementById("nameForm").hidden = false;
  document.getElementById("submit").hidden = false;})


    
const nameForm = document.querySelector("nameForm");
const submit = document.querySelector("submit");

const newStudent = (e) => {
    e.preventDefault();
     
    const newStudentObj = {
      id: students.length + 2,
      name: document.querySelector("#name").value,
      house: document.querySelector("#house").value,
      houseColor: document.querySelector("#houseColor").value,
    
  }

  students.push(newStudentObj);
 cardsOnDom(students);
 
  nameForm.reset();


}


nameForm.addEventListener ("submit", newStudent)


/*const card = document.querySelector("#card");

card.addEventListener("click", (e) => {
  console.log(e.target.id.expel);
})*/

/*const filter = (students, house) => {
  const houseArray = [];
  students.forEach((student) => {
    if (student.house === "gryffindor") {
      houseArray.push(student);
    }
  })
}*/
