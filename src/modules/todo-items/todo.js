export { toDo };
import { removeNonProjectToDo, showToDos } from "./todo-dom";
import { saveToDosToStorage, retrieveSavedToDos } from "../local-storage";

const toDo = (function() {

  let toDoArray = [];

  const submitBtn = document.getElementById('todo-submit');
  submitBtn.addEventListener('click', buildAndAddToDo);

  function toDoStorageLoad() {
    const savedToDoObject = retrieveSavedToDos();
    if(savedToDoObject) {
      savedToDoObject.forEach(function(savedToDo) {
        const buildToDo = toDoFactory(savedToDo.title, savedToDo.description, savedToDo.dueDate, savedToDo.index, savedToDo.priority);
        toDoArray.push(buildToDo);
      });
      showToDos(toDoArray);
      assignRemoveBtns();
      saveToDosToStorage(toDoArray);
    }
  }

  function toDoFactory (title, description, dueDate, index, priority) {
    return { title, description, dueDate, index, priority }
  }

  function buildAndAddToDo(e) {
    e.preventDefault();
    const titleValue = document.getElementById('todo-title').value;
    const descValue = document.getElementById('todo-description').value;
    const dueValue = new Date(document.getElementById('todo-due-date').value);
    const index = toDoArray.length;
    const priority = document.getElementById('todo-priority').value;
    const newToDo = toDoFactory(titleValue, descValue, dueValue, index, priority);
    toDoArray.push(newToDo);
    document.getElementById('todo-form').reset();
    showToDos(toDoArray);
    assignRemoveBtns();
    saveToDosToStorage(toDoArray);
  }

  function removeToDo(e, toDoIndex) {
    e.preventDefault();
    removeNonProjectToDo(toDoIndex);
    toDoArray.splice(toDoIndex, 1);
    reduceIndex(toDoArray, toDoIndex);
    showToDos(toDoArray);
    assignRemoveBtns();
    saveToDosToStorage(toDoArray);
  }

  function editToDo(e, todo) {
    e.preventDefault();
    const titleValue = document.getElementById('todo-title' + `${todo.index}`).value;
    const descValue = document.getElementById('todo-description' + `${todo.index}`).value;
    const dueValue = new Date(document.getElementById('todo-due-date' + `${todo.index}`).value);
    const priority = document.getElementById('todo-priority' + `${todo.index}`).value;
    todo.title = titleValue;
    todo.description = descValue;
    todo.dueDate = dueValue;
    todo.priority = priority;
    showToDos(toDoArray);
    assignRemoveBtns();
    saveToDosToStorage(toDoArray);
  }

  function assignRemoveBtns() {
    const toDoParas = document.querySelectorAll('.todo-item');
    toDoParas.forEach(function(toDo) {
      const removeBtn = document.getElementById('todo-remove' + `${toDo.dataset.index}`);
      removeBtn.addEventListener('click', (e) => removeToDo(e, toDo.dataset.index));
    })
  }

  function assignToDoEditBtns(todo) {
    const editBtn = document.getElementById('todo-submit-edit' + `${todo.index}`);
    editBtn.addEventListener('click', (e) => editToDo(e, todo));
  }

  function reduceIndex(array, removedItemIndex) {
    array.forEach(function(item) {
      if (item.index > removedItemIndex) {
        item.index -= 1;
      }
    })
  }

  function printArray() {
    toDoArray.forEach(function (item) {
      console.log(item);
    });
  }
    
  return { toDoArray, toDoFactory, assignToDoEditBtns, toDoStorageLoad }
    
})();