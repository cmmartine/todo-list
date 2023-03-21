export { toDo };
import { showToDos } from "./todo-dom";

const toDo = (function() {

  const toDoArray = [];

  const submitBtn = document.getElementById('todo-submit');
  submitBtn.addEventListener('click', buildAndAddToDo);

  function toDoFactory (title, description, dueDate, index) {
    return { title, description, dueDate, index }
  }

  function buildAndAddToDo(e) {
    e.preventDefault();
    const titleValue = document.getElementById('todo-title').value;
    const descValue = document.getElementById('todo-description').value;
    const dueValue = document.getElementById('todo-due-date').value;
    const index = toDoArray.length;
    const newToDo = toDoFactory(titleValue, descValue, dueValue, index);
    toDoArray.push(newToDo);
    document.getElementById('todo-form').reset();
    showToDos(toDoArray);
  }

  function printArray() {
    toDoArray.forEach(function (item) {
      console.log(item);
    });
  }
    
  return { toDoArray, toDoFactory }
    
})();