export { showToDos, removeNonProjectToDo }

const toDoDiv = document.getElementById('todo-list');

function showToDos(array) {
  resetToDos();
  array.forEach(function(item) {
    const toDoPara = document.createElement('p');
    const removeBtn = document.createElement('button');
    toDoPara.id = 'todo-item' + `${item.index}`;
    toDoPara.classList.add('todo-item');
    removeBtn.id = 'todo-remove' + `${item.index}`;
    toDoPara.dataset.index = item.index;
    toDoPara.innerText = `${item.title} \n ${item.description}`;
    removeBtn.innerText = "X";
    removeBtn.classList.add('remove-button');
    toDoPara.append(removeBtn);
    toDoDiv.append(toDoPara);
  })
}

function removeNonProjectToDo(toDoIndex) {
  const toDoPara = document.getElementById('todo-item' + `${toDoIndex}`);
  toDoPara.remove();
}

function resetToDos() {
  toDoDiv.innerText = '';
}
