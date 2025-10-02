
const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function AddTask(){
    if(inputBox.value == ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // create cross(x) icon 
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI")
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

document.getElementById("input-box").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        AddTask(); // Your function to add a task
    }
});


function saveData(){
    localStorage.setItem("data" , listcontainer.innerHTML);
}
function showTask(){
        listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();