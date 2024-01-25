let toDoList=JSON.parse(localStorage.getItem('toDolist'))||[];
function rendoList(){
   let toDoListHTML = '';
  for (let i=0; i<toDoList.length; i++){
    let {name} = toDoList[i];
    let {dueTime} = toDoList[i];
    toDoListHTML += `
      <div class="outputs">${name}</div>
      <div class="outputs">${dueTime}</div> 
      <button class="inputs red" onclick="
        toDoList.splice(${i},1);
        rendoList();
      ">Delete</button>
    
    `;
    localStorage.setItem('toDolist',JSON.stringify(toDoList));
  }
  document.querySelector('.addHere').innerHTML=toDoListHTML;
}
rendoList();
function addInput(){
  const name = document.querySelector('.js-toDo-input').value;
  const dueTime = document.querySelector('.js-add-date').value;
  toDoList.push({
    name,dueTime
  });
  console.log(toDoList);
  rendoList();
}
