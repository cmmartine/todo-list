export { showToDos }

const toDoDiv = document.getElementById('todo-list');

function showToDos(array) {
  resetToDos();
  array.forEach(function(item) {
    const toDoPara = document.createElement('p');
    toDoPara.id = 'todo-item';
    toDoPara.dataset.index = item.index;
    toDoPara.innerText = `${item.title} \n ${item.description}`;
    toDoDiv.append(toDoPara);
  })
}

function resetToDos() {
  toDoDiv.innerText = '';
}
