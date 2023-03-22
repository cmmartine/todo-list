export { showProjects, removeProjectDOM, removeProjectToDoDOM }
import { createToDoForm } from "../todo-items/todo-form";

const allProjectsDiv = document.getElementById('project-list');

function showProjects(array) {
  resetProjects();
  array.forEach(function(project) {

    const projectContainer = document.createElement('div');
    const projectToDoDiv = document.createElement('div');
    const projectRemoveBtn = document.createElement('button');
    projectContainer.dataset.index = project.index;
    projectContainer.id = 'project' + `${project.index}`;
    projectContainer.classList.add('project');
    projectToDoDiv.classList.add('project-todo-div');
    projectRemoveBtn.id = 'project-remove' +`${project.index}`;
    projectContainer.innerText = `${project.title} \n ${project.description}`;
    projectToDoDiv.innerText = `To Dos:\n`;
    projectRemoveBtn.innerText = 'X';
    projectRemoveBtn.classList.add('remove-button');
      
    projectContainer.append(projectRemoveBtn);
    projectContainer.append(projectToDoDiv);
    createToDoForm(projectContainer, project.index);
      
    project.toDos.forEach(function(toDo) {
      const toDoPara = document.createElement('p');
      const toDoRemoveBtn = document.createElement('button');
      toDoPara.id = 'project-todo-para' + `${project.index}` + `${toDo.index}`;
      toDoPara.classList.add('project-todo-item');
      toDoRemoveBtn.id = 'project-todo-remove' + `${project.index}` + `${toDo.index}`;
      toDoPara.innerText = `${toDo.title} \n ${toDo.description}`;
      toDoRemoveBtn.innerText = 'X';
      projectToDoDiv.append(toDoPara);
      toDoPara.append(toDoRemoveBtn);
    })
    allProjectsDiv.append(projectContainer);
  })
}

function removeProjectDOM(projectIndex) {
  const projectDiv = document.getElementById('project' + `${projectIndex}`);
  projectDiv.remove();
}

function removeProjectToDoDOM(projectIndex, toDoIndex) {
  const toDoPara = document.getElementById('project-todo-para' + `${projectIndex}` + `${toDoIndex}`);
  toDoPara.remove();
}

function resetProjects() {
  allProjectsDiv.innerText = '';
}
