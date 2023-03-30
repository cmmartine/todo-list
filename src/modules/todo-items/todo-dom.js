export { showToDos, removeNonProjectToDo }
import { toDo as toDoFile } from "./todo";
import { editToDoForm } from "./todo-edit-form";
import { formToggle } from "../form-toggle";
import { strikeThrough } from "../strike-through";

const toDoContainer = document.getElementById('todo-list');

function showToDos(array) {
  resetToDos();
  array.forEach(function(item) {
    const toDoDiv = document.createElement('div');
    toDoDiv.id = 'todo-item' + `${item.index}`;
    toDoDiv.classList.add('todo-item');
    toDoDiv.dataset.index = item.index;

    const toDoContents = document.createElement('div');
    toDoContents.classList.add('todo-content');

    const toDoTitle = document.createElement('p');
    toDoTitle.textContent = `${item.title}`;
    toDoTitle.classList.add(`priority-${item.priority}`);

    const toDoDesc = document.createElement('p');
    toDoDesc.textContent = `${item.description}`;

    const toDoDate = document.createElement('p');
    toDoDate.textContent = `Due by: ${item.dueDate}`;

    const toDoPriority = document.createElement('p');
    const priorityCapitalized = item.priority[0].toUpperCase() + item.priority.slice(1);
    toDoPriority.textContent = `Priority: ${priorityCapitalized}`;

    const toDoCheckBox = document.createElement('input');
    toDoCheckBox.classList.add('check-mark');
    toDoCheckBox.setAttribute('type', 'checkbox');

    toDoCheckBox.addEventListener('click', (e) => strikeThrough([toDoTitle, toDoDesc, toDoDate, toDoPriority]))

    const toDoEditForm = editToDoForm(item, item.index);

    const removeBtn = document.createElement('button');
    removeBtn.id = 'todo-remove' + `${item.index}`;
    removeBtn.innerText = "X";
    removeBtn.classList.add('remove-button');

    const showEditButton = document.createElement('button');
    showEditButton.id = 'todo-edit-show' + `${item.index}`;
    showEditButton.textContent = 'Edit To Do';
    showEditButton.classList.add('form-button');

    const hideEditButton = document.createElement('button');
    hideEditButton.id = 'todo-edit-hide' + `${item.index}`;
    hideEditButton.textContent = 'Hide Form';
    hideEditButton.classList.add('form-button', 'toggle-visibility');

    showEditButton.addEventListener('click', (e) => formToggle.showForm(showEditButton, hideEditButton, toDoEditForm, e));
    showEditButton.addEventListener('click', (e) => toDoFile.assignToDoEditBtns(item));
    hideEditButton.addEventListener('click', (e) => formToggle.hideForm(showEditButton, hideEditButton, toDoEditForm, e));

    toDoContents.append(toDoTitle, toDoDesc, toDoDate, toDoPriority, toDoCheckBox, toDoEditForm);
    toDoDiv.append(toDoContents, removeBtn, showEditButton, hideEditButton);
    toDoContainer.append(toDoDiv);
  })
}

function removeNonProjectToDo(toDoIndex) {
  const toDoDiv = document.getElementById('todo-item' + `${toDoIndex}`);
  toDoDiv.remove();
}

function resetToDos() {
  toDoContainer.innerText = '';
}
