export { saveProjectsToStorage, saveToDosToStorage, retrieveSavedProjects, retrieveSavedToDos, clearStorage }

function saveProjectsToStorage(projectArray) {
  const projectsToSave = JSON.stringify(projectArray);
  localStorage.setItem('projects', projectsToSave);
}

function saveToDosToStorage(todoArray) {
  const todosToSave = JSON.stringify(todoArray);
  localStorage.setItem('todos', todosToSave);
}

function retrieveSavedProjects() {
  if (localStorage.getItem('projects') !== 'undefined') {
    const savedProjectArray = localStorage.getItem('projects');
    return JSON.parse(savedProjectArray);
  } else {
    return null;
  }
}

function retrieveSavedToDos() {
  if (localStorage.getItem('todos') !== 'undefined') {
    const savedToDoArray = localStorage.getItem('todos');
    return JSON.parse(savedToDoArray);
  } else {
    return null;
  }
}


function clearStorage() {
  localStorage.clear();
}
