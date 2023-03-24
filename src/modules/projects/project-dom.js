export { showProjects, removeProjectDOM, removeProjectToDoDOM }
import { createToDoForm } from "../todo-items/todo-form";
import { createProjectForm } from "./project-edit-form";
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
    projectDate.textContent = `Due by: ${project.dueDate}`;

    const projectPriority = document.createElement('p');
    const projectPriorityCapitalized = project.priority[0].toUpperCase() + project.priority.slice(1);
    projectPriority.textContent = `Priority: ${projectPriorityCapitalized}`;

    const projectEditForm = createProjectForm(project, project.index);
      
    projectContents.append(projectTitle, projectDesc, projectDate, projectPriority, projectEditForm);
    projectContainer.append(projectContents, projectRemoveBtn);

    const toDoForm = createToDoForm(projectContainer, project.index);
    projectContainer.append(projectToDoDiv, toDoForm);

    const showEditButton = document.createElement('button');
    showEditButton.id = 'project-edit-show' + `${project.index}`;
    showEditButton.textContent = 'Edit Project';
    showEditButton.classList.add('form-button');

    const hideEditButton = document.createElement('button');
    hideEditButton.id = 'project-edit-hide' + `${project.index}`;
    hideEditButton.textContent = 'Hide Form';
    hideEditButton.classList.add('form-button', 'toggle-visibility');

    projectContainer.append(showEditButton, hideEditButton);

    const showButton = document.createElement('button');
    showButton.id = 'project-todo-show' + `${project.index}`;
    showButton.classList.add('form-button');
    showButton.textContent = 'New To Do';

    const hideButton = document.createElement('button');
    hideButton.id = 'project-todo-hide' + `${project.index}`;
    hideButton.classList.add('form-button', 'toggle-visibility');
    hideButton.textContent = 'Hide Form';

    showEditButton.addEventListener('click', (e) => formToggle.showForm(showEditButton, hideEditButton, projectEditForm, e));
    showEditButton.addEventListener('click', (e) => projectFile.assignProjectEditBtns(project));
    hideEditButton.addEventListener('click', (e) => formToggle.hideForm(showEditButton, hideEditButton, projectEditForm, e));

    showButton.addEventListener('click', (e) => formToggle.showForm(showButton, hideButton, toDoForm, e));
    hideButton.addEventListener('click', (e) => formToggle.hideForm(showButton, hideButton, toDoForm, e));
      
    project.toDos.forEach(function(toDo) {
      const toDoDiv = document.createElement('div');
      toDoDiv.id = 'project-todo-div' + `${project.index}` + `${toDo.index}`;
      toDoDiv.classList.add('project-todo-item');
      toDoDiv.dataset.index = `${project.index}${toDo.index}`;

      const toDoContents = document.createElement('div');
      toDoContents.classList.add('todo-content');

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

      toDoContents.append(toDoTitle, toDoDesc, toDoDate, toDoPriority);
      toDoDiv.append(toDoContents);
      projectToDoDiv.append(toDoDiv);
      toDoDiv.append(toDoRemoveBtn);
    })
    projectToDoDiv.append(showButton, hideButton);
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
