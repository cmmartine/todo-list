export { project };
import { showProjects, removeProjectDOM, removeProjectToDoDOM } from "./project-dom";
import { toDo } from "../todo-items/todo";

const project = (function() {

  const projectArray = [];

  const submitBtn = document.getElementById('project-submit');
  submitBtn.addEventListener('click', buildAndAddProject);

  function projectFactory (title, description, dueDate, index, toDos = []) {
    return { title, description, dueDate, index, toDos }
  }

  function buildAndAddProject(e) {
    e.preventDefault();
    const titleValue = document.getElementById('project-title').value;
    const descValue = document.getElementById('project-description').value;
    const dueValue = document.getElementById('project-due-date').value;
    const index = projectArray.length;
    const newProject = projectFactory(titleValue, descValue, dueValue, index);
    projectArray.push(newProject);
    document.getElementById('project-form').reset();
    showProjects(projectArray);
    assignProjectToDoSubmits();
    assignProjectRemoveBtns();
    assignProjectToDoRemoveBtns();
  }

  function assignProjectToDoSubmits() {
    const projectToDoForms = document.querySelectorAll('.project-todo-form');
    projectToDoForms.forEach(function(form) {
      let projectIndex = form.dataset.index;
      const submitBtn = document.getElementById('project-todo-submit' + `${projectIndex}`);
      submitBtn.addEventListener('click', (e) => addProjectToDo(e, projectIndex));
    })
  }

  function addProjectToDo(e, projectIndex) {
      e.preventDefault();
      const currentProject = projectArray[projectIndex];
      const titleValue = document.getElementById('project-todo-title'+`${projectIndex}`).value;
      const descValue = document.getElementById('project-todo-description'+`${projectIndex}`).value;
      const dueValue = document.getElementById('project-todo-due-date'+`${projectIndex}`).value;
      const index = currentProject.toDos.length;
      const newToDo = toDo.toDoFactory(titleValue, descValue, dueValue, index);
      document.getElementById('project-todo-form'+`${projectIndex}`).reset();
      currentProject.toDos.push(newToDo);
      showProjects(projectArray);
      assignProjectToDoSubmits();
      assignProjectToDoRemoveBtns();
      assignProjectRemoveBtns();
  }

  function assignProjectRemoveBtns() {
    const projectDiv = document.querySelectorAll('.project');
    projectDiv.forEach(function(project) {
      const removeBtn = document.getElementById('project-remove' + `${project.dataset.index}`);
      removeBtn.addEventListener('click', (e) => removeProject(e, project.dataset.index));
    })
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

  function removeProject(e, projectIndex) {
    removeProjectDOM(projectIndex);
    projectArray.splice(projectIndex, 1);
    reduceIndex(projectArray);
    showProjects(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
  }

  function removeProjectToDo(e, project, toDo) {
    removeProjectToDoDOM(project.index, toDo.index);
    project.toDos.splice(toDo.index, 1);
    reduceIndex(project.toDos);
    showProjects(projectArray);
    assignProjectToDoSubmits();
    assignProjectToDoRemoveBtns();
    assignProjectRemoveBtns();
  }

  function reduceIndex(array) {
    array.forEach(function(item) {
      item.index -= 1;
    })
  }

  function printArray() {
    projectArray.forEach(function (item) {
      console.log(item);
    });
  }
    
  return { projectArray }
    
})();