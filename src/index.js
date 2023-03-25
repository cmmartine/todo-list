import { toDo } from './modules/todo-items/todo';
import { project } from './modules/projects/project';
import { retrieveSavedProjects, retrieveSavedToDos, clearStorage } from './modules/local-storage';
import './style.css';

window.onload = function() {
  toDo.toDoStorageLoad();
  project.projectStorageLoad();
}