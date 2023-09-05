const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById("list-container");


// let input =document.querySelector('input');


// it is called on pressing button add 
// 
function AddTask(){  

    if(inputBox.value === ''){
        alert("You Must Write Something.");
    }

    // he

    else{ 
        
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

  

    inputBox.value  = "";
    saveData();
}

listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked");
       saveData();

    }

    else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
       saveData();
    }

});

inputBox.addEventListener("keypress", function(e){
   
    if(e.key==='Enter'){
        AddTask();
    }

});


      


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

