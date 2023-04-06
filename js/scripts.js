//query selectors

const darkModeButton = document.querySelector(".dark");

const sideBar = document.querySelector(".side")

const mainSelector = document.querySelector(".main")

const bodySelector = document.body

const aboutSelector = document.querySelector("#about")

const docsSelector = document.querySelector("#docs")

//arrays

let notesArray = []


//functions
function darkMode (event)
{

    bodySelector.classList.toggle("maindarkBG")
    sideBar.classList.toggle("sidedarkBG")
    mainSelector.classList.toggle("whiteText")
    docsSelector.classList.toggle("whiteText")
    aboutSelector.classList.toggle("whiteText")


    if(darkModeButton.textContent == "Dark Theme")
    {
        darkModeButton.textContent = "Light Theme"
    }

    else{
        darkModeButton.textContent ="Dark Theme"
    }


}

function addNote()
{

    const titleInput = document.querySelector("")
    const noteInput = document.querySelector("")
    let note = {
        title: titleInput.value,
        body: noteInput.value
    }
    notesArray.push(note)
}





//event listeners
darkModeButton.addEventListener("click",darkMode)