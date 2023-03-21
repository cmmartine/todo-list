export { showProjects }
import { createToDoForm } from "../todo-items/todo-form";

const allProjectsDiv = document.getElementById('project-list');

function showProjects(array) {
  resetProjects();
  array.forEach(function(project) {
    const projectContainer = document.createElement('div');
    const projectToDoDiv = document.createElement('div');
    projectContainer.id = 'project';
    projectContainer.dataset.index = project.index;
    projectContainer.innerText = `${project.title} \n ${project.description}`;
    projectToDoDiv.innerText = `To Dos:\n`;
    
    createToDoForm(projectContainer, project.index);

    project.toDos.forEach(function(toDo) {
      const toDoPara = document.createElement('p');
      toDoPara.id = 'project-todo-para' + `${project.index}` + `${toDo.index}`;
      toDoPara.innerText = `${toDo.title} \n ${toDo.description}`;
      projectToDoDiv.append(toDoPara);
    })
    projectContainer.append(projectToDoDiv);
    allProjectsDiv.append(projectContainer);
  })
}

function resetProjects() {
  allProjectsDiv.innerText = '';
}
