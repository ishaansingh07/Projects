// File: To-Do List Application
// Author: Ishaan Singh
// Date: 17/11/2023

// Description:
// ------------
// The functionality of the code is to work as a To-Do list where you can add your daily task 
// and mark them completed

// Contact Information:
// --------------------
// ishaan.singh2k@gmail.com


const inputBox =  document.getElementById("input-box")
const listContainer =  document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li= document.createElement("li")
        li.innerHTML=inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML= "\u00d7" // code for cross icon
        li.appendChild(span)
    }
    inputBox.value="" //To make box empty after entry
    saveData()
}

//IMPORTATNT!!!!
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        // localStorage.clear
        // localStorage.removeItem("li")
        saveData()
    }
}, false)

//To save data after refresh
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

//To show the elements after refresh
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data")
}
showTask()