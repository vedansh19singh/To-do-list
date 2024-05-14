// let todo=[];

// let request=prompt("please enter your request");
// console.log(request);

// while(true){
//     if(request=="quit"){
//         console.log("quitting app");
//         break;
//     }

//     if(request=="list"){
//         console.log("----------");
//         for(let i=0;i<todo.length;i++){
//             console.log(i,todo[i]);
//         }
//         console.log("----------");
//     }else if(request=="add"){
//         let task=prompt("Please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }else if(request=="delete"){
//         let idx = prompt("please enter the task index");
//         todo.splice(idx,1);
//         console.log("task deleted");
//     }else{
//         console.log("wrong request");
//     }

//     request=prompt("please enter your request");
// }

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.classList.add("gap-5");
  item.innerText = inp.value;

  let comBtn = document.createElement("button");
  comBtn.classList.add("btn", "btn-success", "ms-2");
  comBtn.innerText = "Mark as complete";

  let delBtn = document.createElement("button");
  delBtn.classList.add("btn", "btn-danger", "ms-2");
  delBtn.innerText = "delete";

  item.appendChild(comBtn);
  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.innerText == "delete") {
    let listItem = event.target.parentElement;
    listItem.remove();
  } else if (event.target.innerText === "Mark as complete") {
    let listItem = event.target.parentElement; // Get the parent list item element
    let textElement = listItem.querySelector("span"); // Target the span element containing the text
    textElement.style.textDecoration = "line-through";
    textElement.style.opacity = "0.5";
   
  }
});
