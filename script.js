let inputbox = document.querySelector(".inputbox");
let inputValue = document.querySelector("input");
let addBtn = document.querySelector("button");
let noteBox = document.querySelector(".noteBox")


let addTask = () => {
    if (inputValue.value === "") {
        alert("Please Enter Something")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputValue.value;
        noteBox.appendChild(li);
        saveData()

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        saveData()

    }

    inputValue.value = ""
}

addBtn.addEventListener("click", (e) => {
    addTask();
}
)

noteBox.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
    saveData()
})


// let saveData = () => {
//     localStorage.setItem("data", list.innerHTML);
// }
// let showDAta = () => {
//     list.innerHTML = localStorage.getItem("data");
// }
let saveData = () => {
    localStorage.setItem("data", noteBox.innerHTML);
}

let showData = () => {
    noteBox.innerHTML = localStorage.getItem("data")
};

showData()
