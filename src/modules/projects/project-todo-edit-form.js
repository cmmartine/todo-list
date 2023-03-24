export { editProjectToDoForm };

  function editProjectToDoForm(projectToDoIndex, project) {

    const projectIndex = project.index;
    const newForm = document.createElement('form');
    newForm.classList.add("toggle-visibility");
    newForm.dataset.index = projectToDoIndex;
    newForm.id = 'project-todo-edit-form' + `${projectIndex}` + `${projectToDoIndex}`;

    const title = document.createElement('textarea');
    const titleLabel = document.createElement('div');
    title.id = 'project-todo-title' + `${projectIndex}` + `${projectToDoIndex}`;
    titleLabel.innerText = 'Title: '
    title.value = project.toDos[projectToDoIndex].title;
    newForm.append(titleLabel, title);

    const description = document.createElement('textarea');
    const descLabel = document.createElement('div');
    description.id = 'project-todo-description' +`${projectIndex}` +  `${projectToDoIndex}`;
    descLabel.innerText = 'Title: ';
    description.value = project.toDos[projectToDoIndex].description;
    newForm.append(descLabel, description);

    const dueDate = document.createElement('input');
    const dateLabel = document.createElement('div');
    dueDate.id = 'project-todo-due-date' +`${projectIndex}` +  `${projectToDoIndex}`;
    dateLabel.innerText = 'Due by: '
    dueDate.type = 'datetime-local';
    newForm.append(dateLabel, dueDate);

    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'project-todo-priority' +`${projectIndex}` +  `${projectToDoIndex}`;
    priorityLabel.innerText = 'Priority';

    const priorityTypes = ['none', 'highest', 'high', 'middle', 'low'];
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'project-todo-priority' +`${projectIndex}` +  `${projectToDoIndex}`;
    prioritySelect.name = 'priorities';
    priorityTypes.forEach(function(type) {
      const priorityOption = document.createElement('option');
      priorityOption.value = type;
      priorityOption.text = type[0].toUpperCase() + type.slice(1);
      prioritySelect.append(priorityOption);
    })
    prioritySelect.value = project.toDos[projectToDoIndex].priority;

    newForm.append(dueDate, priorityLabel, prioritySelect);

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'submit';
    submit.id = 'project-todo-submit-edit' + `${projectIndex}` +  `${projectToDoIndex}`;
    submit.classList.add('form-button');
    newForm.append(submit);

    return newForm;
  }