export { toDo };
import { removeNonProjectToDo, showToDos } from "./todo-dom";

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
    assignRemoveBtns();
  }

  function assignRemoveBtns() {
    const toDoParas = document.querySelectorAll('.todo-item');
    toDoParas.forEach(function(toDo) {
      const removeBtn = document.getElementById('todo-remove' + `${toDo.dataset.index}`);
      removeBtn.addEventListener('click', (e) => removeToDo(e, toDo.dataset.index));
    })
  }

  function removeToDo(e, toDoIndex) {
    e.preventDefault();
    removeNonProjectToDo(toDoIndex);
    toDoArray.splice(toDoIndex, 1);
    reduceIndex(toDoArray);
    showToDos(toDoArray);
    assignRemoveBtns();
  }

  function reduceIndex(array) {
    array.forEach(function(item) {
      item.index -= 1;
    })
  }

  function printArray() {
    toDoArray.forEach(function (item) {
      console.log(item);
    });
  }
    
  return { toDoArray, toDoFactory }
    
})();