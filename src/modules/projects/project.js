export { project };
import { showProjects, removeProjectDOM, removeProjectToDoDOM } from "./project-dom";
import { toDo } from "../todo-items/todo";
import { saveProjectsToStorage, retrieveSavedProjects } from "../local-storage";

const project = (function() {

  let projectArray = [];

  const submitBtn = document.getElementById('project-submit');
  submitBtn.addEventListener('click', buildAndAddProject);

  function projectStorageLoad() {
    const savedProjectObject = retrieveSavedProjects();
    if(savedProjectObject) {
      savedProjectObject.forEach(function(savedProject) {
        const buildProject = projectFactory(savedProject.title, savedProject.description, savedProject.dueDate, savedProject.index, savedProject.priority, savedProject.toDos);
        projectArray.push(buildProject);
      });
      showProjects(projectArray);
      assignProjectToDoSubmits();
      assignProjectRemoveBtns();
      assignProjectToDoRemoveBtns();
      saveProjectsToStorage(projectArray);
    }
  }

  function projectFactory (title, description, dueDate, index, priority, toDos = []) {
    return { title, description, dueDate, index, priority, toDos }
  }

  function buildAndAddProject(e) {
    e.preventDefault();
    const titleValue = document.getElementById('project-title').value;
    const descValue = document.getElementById('project-description').value;
    const dueValue = new Date(document.getElementById('project-due-date').value);
    const index = projectArray.length;
    const priority = document.getElementById('project-priority').value;
    const newProject = projectFactory(titleValue, descValue, dueValue, index, priority);
    projectArray.push(newProject);
    
    document.getElementById('project-form').reset();
    showProjects(projectArray);
    assignProjectToDoSubmits();
    assignProjectRemoveBtns();
    assignProjectToDoRemoveBtns();
    saveProjectsToStorage(projectArray);
  }

  function removeProject(e, projectIndex) {
    removeProjectDOM(projectIndex);
    projectArray.splice(projectIndex, 1);
    reduceIndex(projectArray, projectIndex);
    showProjects(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
    saveProjectsToStorage(projectArray);
  }

  function editProject(e, project) {
    e.preventDefault();
    const titleValue = document.getElementById('project-title' + `${project.index}`).value;
    const descValue = document.getElementById('project-description' + `${project.index}`).value;
    const dueValue = new Date(document.getElementById('project-due-date' + `${project.index}`).value);
    const priority = document.getElementById('project-priority' + `${project.index}`).value;
    project.title = titleValue;
    project.description = descValue;
    project.dueDate = dueValue;
    project.priority = priority;
    showProjects(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
    saveProjectsToStorage(projectArray);
  }

  function assignProjectToDoSubmits() {
    const projectToDoForms = document.querySelectorAll('.project-todo-form');
    projectToDoForms.forEach(function(form) {
      let projectIndex = form.dataset.index;
      const submitBtn = document.getElementById('project-todo-submit' + `${projectIndex}`);
      submitBtn.addEventListener('click', (e) => addProjectToDo(e, projectIndex));
    })
  }

  function assignProjectRemoveBtns() {
    const projectDiv = document.querySelectorAll('.project');
    projectDiv.forEach(function(project) {
      const removeBtn = document.getElementById('project-remove' + `${project.dataset.index}`);
      removeBtn.addEventListener('click', (e) => removeProject(e, project.dataset.index));
    })
  }

  function assignProjectEditBtns(project) {
    const editBtn = document.getElementById('project-submit-edit' + `${project.index}`);
    editBtn.addEventListener('click', (e) => editProject(e, project));
  }

  function addProjectToDo(e, projectIndex) {
      e.preventDefault();
      const currentProject = projectArray[projectIndex];
      const titleValue = document.getElementById('project-todo-title'+`${projectIndex}`).value;
      const descValue = document.getElementById('project-todo-description'+`${projectIndex}`).value;
      const dueValue = new Date(document.getElementById('project-todo-due-date'+`${projectIndex}`).value);
      const index = currentProject.toDos.length;
      const priority = document.getElementById('project-todo-priority').value;
      const newToDo = toDo.toDoFactory(titleValue, descValue, dueValue, index, priority);
      document.getElementById('project-todo-form'+`${projectIndex}`).reset();
      currentProject.toDos.push(newToDo);
      showProjects(projectArray);
      assignProjectToDoSubmits();
      assignProjectToDoRemoveBtns();
      assignProjectRemoveBtns();
      saveProjectsToStorage(projectArray);
  }

  function editProjectToDo(e, todo, project) {
    e.preventDefault();
    const titleValue = document.getElementById('project-todo-title' + `${project.index}` +  `${todo.index}`).value;
    const descValue = document.getElementById('project-todo-description' + `${project.index}` +  `${todo.index}`).value;
    const dueValue = new Date(document.getElementById('project-todo-due-date' + `${project.index}` +  `${todo.index}`).value);
    const priority = document.getElementById('project-todo-priority' + `${project.index}` +  `${todo.index}`).value;
    todo.title = titleValue;
    todo.description = descValue;
    todo.dueDate = dueValue;
    todo.priority = priority;
    showProjects(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
    saveProjectsToStorage(projectArray);
  }

  function removeProjectToDo(e, project, toDo) {
    removeProjectToDoDOM(project.index, toDo.index);
    project.toDos.splice(toDo.index, 1);
    reduceIndex(project.toDos, toDo.index);
    showProjects(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
    saveProjectsToStorage(projectArray);
  }

  function assignProjectToDoRemoveBtns() {
    projectArray.forEach(function(project) {
      project.toDos.forEach(function(toDo) {
        if (toDo != '') {
          let toDoRemoveBtn = document.getElementById('project-todo-remove' + `${project.index}` + `${toDo.index}`);
          toDoRemoveBtn.addEventListener('click', (e) => removeProjectToDo(e, project, toDo))
        }
      })
    })
  }

  function assignProjectToDoEditBtns(toDo, project) {
    const editBtn = document.getElementById('project-todo-submit-edit' + `${project.index}` + `${toDo.index}`);
    editBtn.addEventListener('click', (e) => editProjectToDo(e, toDo, project));
  }

  function reduceIndex(array, removedItemIndex) {
    array.forEach(function(item) {
      if (item.index > removedItemIndex) {
        item.index -= 1;
      }
    })
  }

  function printArray() {
    projectArray.forEach(function (item) {
      console.log(item);
    });
  }
    
  return { projectArray, assignProjectEditBtns, assignProjectToDoEditBtns, projectStorageLoad }
    
})();