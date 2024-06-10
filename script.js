const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//addTask function adds a task to the program in the listContainer
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); //adds LI to the listContainer
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"; //This creates the delete x mark element
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();// saves to the local storage
}

//adds the ability to save tasks which have been inputted.
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();// saves to the local storage
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();// saves to the local storage
    }
}, false);

// saveData function to save tasks to the local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
//showTask displays the saved item in the local storage within the listContainer
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();