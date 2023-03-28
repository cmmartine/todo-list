export { showProjects, removeProjectDOM, removeProjectToDoDOM }
import { createToDoForm } from "./project-todo-form";
import { createProjectForm } from "./project-edit-form";
import { editProjectToDoForm } from "./project-todo-edit-form";
import { formToggle } from "../form-toggle";
import { project as projectFile} from "./project";

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
    projectTitle.textContent = `${project.title}`;
    projectTitle.classList.add(`priority-${project.priority}`);

    const projectDesc = document.createElement('p');
    projectDesc.textContent = `${project.description}\n`;

    const projectDate = document.createElement('p');
    const date = project.dueDate;
    projectDate.textContent = `Due by: ${date}`;

    const projectPriority = document.createElement('p');
    const projectPriorityCapitalized = project.priority[0].toUpperCase() + project.priority.slice(1);
    projectPriority.textContent = `Priority: ${projectPriorityCapitalized}`;

    const projectEditForm = createProjectForm(project, project.index);
      
    projectContents.append(projectTitle, projectDesc, projectDate, projectPriority, projectEditForm);
    projectContainer.append(projectContents, projectRemoveBtn);

    const toDoForm = createToDoForm(project.index);
    projectContainer.append(projectToDoDiv, toDoForm);

    const showProjectEditButton = document.createElement('button');
    showProjectEditButton.id = 'project-edit-show' + `${project.index}`;
    showProjectEditButton.textContent = 'Edit Project';
    showProjectEditButton.classList.add('form-button');

    const hideProjectEditButton = document.createElement('button');
    hideProjectEditButton.id = 'project-edit-hide' + `${project.index}`;
    hideProjectEditButton.textContent = 'Hide Form';
    hideProjectEditButton.classList.add('form-button', 'toggle-visibility');

    projectContainer.append(showProjectEditButton, hideProjectEditButton);

    const showProjectToDoButton = document.createElement('button');
    showProjectToDoButton.id = 'project-todo-show' + `${project.index}`;
    showProjectToDoButton.classList.add('form-button');
    showProjectToDoButton.textContent = 'New To Do';

    const hideProjectToDoButton = document.createElement('button');
    hideProjectToDoButton.id = 'project-todo-hide' + `${project.index}`;
    hideProjectToDoButton.classList.add('form-button', 'toggle-visibility');
    hideProjectToDoButton.textContent = 'Hide Form';

    showProjectEditButton.addEventListener('click', (e) => formToggle.showForm(showProjectEditButton, hideProjectEditButton, projectEditForm, e));
    showProjectEditButton.addEventListener('click', (e) => projectFile.assignProjectEditBtns(project));
    hideProjectEditButton.addEventListener('click', (e) => formToggle.hideForm(showProjectEditButton, hideProjectEditButton, projectEditForm, e));

    showProjectToDoButton.addEventListener('click', (e) => formToggle.showForm(showProjectToDoButton, hideProjectToDoButton, toDoForm, e));
    hideProjectToDoButton.addEventListener('click', (e) => formToggle.hideForm(showProjectToDoButton, hideProjectToDoButton, toDoForm, e));
      
    project.toDos.forEach(function(toDo) {
      const toDoDiv = document.createElement('div');
      toDoDiv.id = 'project-todo-div' + `${project.index}` + `${toDo.index}`;
      toDoDiv.classList.add('project-todo-item');
      toDoDiv.dataset.index = `${project.index}${toDo.index}`;

      const toDoContents = document.createElement('div');
      toDoContents.classList.add('todo-content');

      const projectToDoBtnContainer = document.createElement('div');
      projectToDoBtnContainer.classList.add('project-todo-button-container');

      const toDoTitle = document.createElement('p');
      toDoTitle.textContent = `${toDo.title}`;
      toDoTitle.classList.add(`priority-${toDo.priority}`);

      const toDoDesc = document.createElement('p');
      toDoDesc.textContent = `${toDo.description}`;

      const toDoDate = document.createElement('p');
      toDoDate.textContent = `Due by: ${toDo.dueDate}`;

      const toDoPriority = document.createElement('p');
      const priorityCapitalized = toDo.priority[0].toUpperCase() + toDo.priority.slice(1);
      toDoPriority.textContent = `Priority: ${priorityCapitalized}`;

      const toDoRemoveBtn = document.createElement('button');
      toDoRemoveBtn.id = 'project-todo-remove' + `${project.index}` + `${toDo.index}`;
      toDoRemoveBtn.classList.add('remove-button');
      toDoRemoveBtn.innerText = 'X';

      const projectToDoEditForm = editProjectToDoForm(toDo.index, project);

      const showProjectToDoEditButton = document.createElement('button');
      showProjectToDoEditButton.id = 'todo-edit-show' + `${project.index}` + `${toDo.index}`;
      showProjectToDoEditButton.textContent = 'Edit To Do';
      showProjectToDoEditButton.classList.add('form-button');

      const hideProjectToDoEditButton = document.createElement('button');
      hideProjectToDoEditButton.id = 'todo-edit-hide' + `${project.index}` + `${toDo.index}`;
      hideProjectToDoEditButton.textContent = 'Hide Form';
      hideProjectToDoEditButton.classList.add('form-button', 'toggle-visibility');

      showProjectToDoEditButton.addEventListener('click', (e) => formToggle.showForm(showProjectToDoEditButton, hideProjectToDoEditButton, projectToDoEditForm, e));
      showProjectToDoEditButton.addEventListener('click', (e) => projectFile.assignProjectToDoEditBtns(toDo, project));
      hideProjectToDoEditButton.addEventListener('click', (e) => formToggle.hideForm(showProjectToDoEditButton, hideProjectToDoEditButton, projectToDoEditForm, e));

      toDoContents.append(toDoTitle, toDoDesc, toDoDate, toDoPriority, projectToDoEditForm);
      projectToDoBtnContainer.append(toDoRemoveBtn, showProjectToDoEditButton, hideProjectToDoEditButton)
      toDoDiv.append(toDoContents, projectToDoBtnContainer);
      projectToDoDiv.append(toDoDiv);
    })

    projectToDoDiv.append(showProjectToDoButton, hideProjectToDoButton);
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
