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
}else{

const li = document.createElement('li');
li.classList.add(category);
li.innerHTML = `${textToDo} ${category} ${date}` ;


const resultSpan = document.createElement('span');
resultSpan .innerHTML=  "\u00d7";

li.appendChild(resultSpan);
items.appendChild(li);

}
inputItems.value= "";
catName.value ="";
}

addButton.addEventListener("click", addToDo);

items.addEventListener("click",function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);