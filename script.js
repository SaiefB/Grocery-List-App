const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//addTask function adds a task to the program in the listContainer
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } // if there is nothing in the input field then alert
    else {
        let li = document.createElement("li");//creates li element and assigns it to li
        li.innerHTML = inputBox.value;//sets the new li to whatever was entered in the input field
        listContainer.appendChild(li); //adds LI to the listContainer
        let span = document.createElement("span") // creates a span element and assigns it to span
        span.innerHTML = "\u00d7"; //This creates the delete x mark element
        li.appendChild(span) // adds span to the li
    }
    inputBox.value = ""; // resets the input field, for another input
    saveData();// saves to the local storage
}

// Function to handle keypress event
function handleKeyPress(event) {
    if (event.keyCode === 13) { // Check if Enter key is pressed
        addTask(); // runs addTask
    }
}

// Event listener for keypress event on inputBox
inputBox.addEventListener("keypress", handleKeyPress);

//adds the ability to save tasks which have been inputted.
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") { //e.target refers to the actual element that was clicked, tagName returns the tag name of the element in this case 'LI' and then checks to see if it matches "LI".
        e.target.classList.toggle("checked"); // returns a classlist method to manipulate the toggle feature of the checked and unchecked elements
        saveData();// saves to the local storage
    }
    else if (e.target.tagName === "SPAN") {//e.target refers to the actual element that was clicked, tagName returns the tag name of the element in this case 'SPAN' and then checks to see if it matches "SPAN".
        e.target.parentElement.remove();// removes the parent element of the clicked <span> element.
        saveData();// saves to the local storage
    }
}, false); // allows for Event Propagation - Bubbling Phase

// saveData function to save tasks to the local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // saves the innerHTML of listContainer as "data" and saves it to localStorage
}
//showTask displays the saved item in the local storage within the listContainer
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); //displays the "data", retrieved from localStorage, to listContainer.innerHTML.
}
showTask(); // runs showTask function