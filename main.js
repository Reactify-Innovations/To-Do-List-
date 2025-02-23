const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");


document.getElementById("addTask").addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
});

function addTask() {
    if (inputBox.value == "") {
        alert("Please Enter a Task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName.toUpperCase() === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName.toUpperCase() === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();