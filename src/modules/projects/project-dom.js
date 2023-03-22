export { showProjects, removeProjectDOM }
import { createToDoForm } from "../todo-items/todo-form";

const allProjectsDiv = document.getElementById('project-list');

function showProjects(array) {
  resetProjects();
  array.forEach(function(project) {
    if (project != '') {
      const projectContainer = document.createElement('div');
      const projectToDoDiv = document.createElement('div');
      const projectRemoveBtn = document.createElement('button');
      projectContainer.dataset.index = project.index;
      projectContainer.id = 'project' + `${project.index}`;
      projectContainer.classList.add('project');
      projectRemoveBtn.id = 'project-remove' +`${project.index}`;
      projectContainer.innerText = `${project.title} \n ${project.description}`;
      projectToDoDiv.innerText = `To Dos:\n`;
      projectRemoveBtn.innerText = 'X';
      
      projectContainer.append(projectRemoveBtn);
      projectContainer.append(projectToDoDiv);
      createToDoForm(projectContainer, project.index);

      project.toDos.forEach(function(toDo) {
        const toDoPara = document.createElement('p');
        toDoPara.id = 'project-todo-para' + `${project.index}` + `${toDo.index}`;
        toDoPara.innerText = `${toDo.title} \n ${toDo.description}`;
        projectToDoDiv.append(toDoPara);
      })
      allProjectsDiv.append(projectContainer);
    }
  })
}

function removeProjectDOM(projectIndex) {
  const projectDiv = document.getElementById('project' + `${projectIndex}`);
  projectDiv.remove();
}

function resetProjects() {
  allProjectsDiv.innerText = '';
}
