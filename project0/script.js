const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
const inputMessage = "Write the name of the activity for add to the list, please!";
const defaultInputMessage = "Unknow activity";
var instructionText = document.getElementById("instruction").textContent = inputMessage;
document.getElementById("inpTxt").value= defaultInputMessage;
var itemCount = 0, uncheckedCount = 0;

function newTodo() {
  let toDo = document.createElement("li");
  let textActivity = document.getElementById("inpTxt").value;
  if (textActivity != undefined && textActivity != null && textActivity !=""){
    toDo.textContent = textActivity;
    toDo.appendChild(addCheckBox());
    toDo.appendChild(addDeleteButton()); 
    list.appendChild(toDo); 
    updateCounters();
  }
  resetInputText();
}

function resetInputText(){
  let text = document.getElementById("inpTxt").value;
  text = (text !== defaultInputMessage) ? defaultInputMessage : defaultInputMessage;
  document.getElementById("inpTxt").value = text;
}

function updateCounters(){
  incrementCounters();
  itemCountSpan.textContent = itemCount.toString();
  uncheckedCountSpan.textContent = uncheckedCount.toString();
}

function addCheckBox(){
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type","checkbox");
  checkbox.onchange = updateUncheckedCount;
  return checkbox;
}

function addDeleteButton(){
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("type","button");
  deleteButton.classList.add("close");
  //deleteButton.setAttribute("class",classNames.TODO_DELETE);
  deleteButton.textContent = "x";
  return deleteButton;
}

function incrementCounters(){
  itemCount+=1;
  uncheckedCount+=1;
}

function updateUncheckedCount(e){
  if (e.target.checked){
    uncheckedCount-=1;
  }else{
    uncheckedCount+=1;
  }
  uncheckedCountSpan.textContent = uncheckedCount.toString();
}
