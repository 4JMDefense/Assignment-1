//query selectors

const sideBar = document.querySelector(".side")

const mainSelector = document.querySelector(".main")

const aboutSelector = document.querySelector("#about")

const docsSelector = document.querySelector("#docs")

const inputSelector = document.querySelector("#input")

const noteList = document.querySelector("#noteList")

const boxSelector = document.querySelector(".box textarea")

// button query selectors

const darkModeButton = document.querySelector(".dark");

const saveButton = document.querySelector(".save")

const cancelButton = document.querySelector(".cancel")

const newButton = document.querySelector(".new")

//arrays

let notesArray = []


//functions
function darkMode ()
{

    document.body.classList.toggle("maindarkBG")
    sideBar.classList.toggle("sidedarkBG")
    mainSelector.classList.toggle("whiteText")
    docsSelector.classList.toggle("whiteText")
    aboutSelector.classList.toggle("whiteText")
    boxSelector.classList.toggle("sidedarkBG")



    if(darkModeButton.textContent == "Dark Theme")
    {
        darkModeButton.textContent = "Light Theme"
    }

    else{
        darkModeButton.textContent ="Dark Theme"
    }


}

function addToNote(event)
{
    let titleInput = prompt("Enter a title")
    let note = {
        body: inputSelector.value,
        title: titleInput
    }
    console.log(note)
    notesArray.push(note)
    const newLi = document.createElement("li")
    newLi.textContent = `${note.title}: ${note.body}`
    noteList.appendChild(newLi)
    inputSelector.value = ""
}


function noteCreateDelete(event) {
    if (event.target.textContent == "Cancel")
    {
        boxSelector.classList.add("hideElement")
        saveButton.classList.add("hideElement")
        cancelButton.classList.add("hideElement")
    }
    else if (event.target.textContent == "New note")
    {
        boxSelector.classList.remove("hideElement")
        saveButton.classList.remove("hideElement")
        cancelButton.classList.remove("hideElement")
    }
}

//event listeners
darkModeButton.addEventListener("click",darkMode)

saveButton.addEventListener("click",addToNote)

cancelButton.addEventListener("click", noteCreateDelete)

newButton.addEventListener("click", noteCreateDelete)



