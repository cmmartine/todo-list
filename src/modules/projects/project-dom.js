export { showProjects, removeProjectDOM, removeProjectToDoDOM }
import { createToDoForm } from "../todo-items/todo-form";

const allProjectsDiv = document.getElementById('project-list');

function showProjects(array) {
  resetProjects();
  array.forEach(function(project) {

    const projectContainer = document.createElement('div');
    projectContainer.dataset.index = project.index;
    projectContainer.id = 'project' + `${project.index}`;
    projectContainer.classList.add('project');

    const projectToDoDiv = document.createElement('div');
    projectToDoDiv.classList.add('project-todo-div');
    projectToDoDiv.innerText = `To Dos:\n`;

    const projectRemoveBtn = document.createElement('button');
    projectRemoveBtn.id = 'project-remove' +`${project.index}`;
    projectRemoveBtn.innerText = 'X';
    projectRemoveBtn.classList.add('remove-button');

    const projectContents = document.createElement('div');
    projectContents.classList.add('project-content');

    const projectTitle = document.createElement('p');
    projectTitle.textContent = `Project Title: ${project.title}`;

    const projectDesc = document.createElement('p');
    projectDesc.textContent = `Description: ${project.description}`;

    const projectDate = document.createElement('p');
    projectDate.textContent = `Due Date: ${project.dueDate}`;
      
    projectContents.append(projectTitle, projectDesc, projectDate);
    projectContainer.append(projectContents, projectRemoveBtn);
    projectContainer.append(projectToDoDiv);
    createToDoForm(projectContainer, project.index);
      
    project.toDos.forEach(function(toDo) {
      const toDoDiv = document.createElement('div');
      toDoDiv.id = 'project-todo-div' + `${project.index}` + `${toDo.index}`;
      toDoDiv.classList.add('project-todo-item');

      const toDoContents = document.createElement('div');
      toDoContents.classList.add('todo-content');

      const toDoTitle = document.createElement('p');
      toDoTitle.textContent = `${toDo.title}`;

      const toDoDesc = document.createElement('p');
      toDoDesc.textContent = `${toDo.description}`;

      const toDoDate = document.createElement('p');
      toDoDate.textContent = `Due by: ${toDo.dueDate}`;

      const toDoRemoveBtn = document.createElement('button');
      toDoRemoveBtn.id = 'project-todo-remove' + `${project.index}` + `${toDo.index}`;
      toDoRemoveBtn.innerText = 'X';

      toDoContents.append(toDoTitle, toDoDesc, toDoDate);
      toDoDiv.append(toDoContents);
      projectToDoDiv.append(toDoDiv);
      toDoDiv.append(toDoRemoveBtn);
    })
    allProjectsDiv.append(projectContainer);
  })
}

function removeProjectDOM(projectIndex) {
  const projectDiv = document.getElementById('project' + `${projectIndex}`);
  projectDiv.remove();
}

function removeProjectToDoDOM(projectIndex, toDoIndex) {
  const toDoDiv = document.getElementById('project-todo-div' + `${projectIndex}` + `${toDoIndex}`);
  toDoDiv.remove();
}

function resetProjects() {
  allProjectsDiv.innerText = '';
}
