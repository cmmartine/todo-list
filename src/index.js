import { toDo } from './modules/todo-items/todo';
import { project } from './modules/projects/project';
import './style.css';

window.onload = function() {
  toDo.toDoStorageLoad();
  project.projectStorageLoad();
}

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});