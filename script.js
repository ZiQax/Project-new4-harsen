const inputItems = document.getElementById("inputItems");
const catName = document.getElementById("catName");
const addButton = document.getElementById("addButton");
const items = document.getElementById("items");

function getCurrentDate() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Desember"]
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();
    return `${day} ${month} ${year};`
}
function addToDo() {
    const textToDo = inputItems.value.trim();
    const category = catName.value;
    const date = getCurrentDate();



if (textToDo === ""){
    alert("masukan todo list anda");
    return;
}

const li = document.createElement('li');
li.classList.add(category);

const chk = document.createElement('input');
chk.type = "checkbox";

const resultSpan = document.createElement('span');
resultSpan.textContent = `${textToDo} ${category} ${date}`;

li.appendChild(chk);
li.appendChild(resultSpan);
items.appendChild(li);


inputItems.value= "";
}

addButton.addEventListener("click", addToDo);

