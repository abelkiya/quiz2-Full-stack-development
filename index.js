const boxInput = document.getElementById("box");
const ListContainer = document.getElementById("list-container");

function addTask(){
    if (boxInput.value === ''){
        alert("You Must Write Somthing");
    }
    else{
        let list = document.createElement("list");
        list.innerHTML = boxInput.value;
        ListContainer.appendChild(list); 
    }
}