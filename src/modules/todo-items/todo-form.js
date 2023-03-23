export { createToDoForm };


  const textFieldsArray = ['title', 'description', 'due-date'];

  function createToDoForm(projectContainer, projectIndex) {
    const newForm = document.createElement('form');
    newForm.classList.add('project-todo-form');
    newForm.dataset.index = projectIndex;
    newForm.id = 'project-todo-form' + `${projectIndex}`;
    textFieldsArray.forEach(function(field) {
      const para = document.createElement('p');
      para.innerText = field[0].toUpperCase() + field.slice(1);
      const info = document.createElement('input');
      info.type = 'text';
      info.id = 'project-todo' + '-' + `${field}` + `${projectIndex}`;
      info.name = `${field}`;
      newForm.append(para);
      newForm.append(info);
    })

    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'project-todo-priority';
    priorityLabel.innerText = 'Priority';

    const priorityTypes = ['none', 'highest', 'high', 'medium', 'low'];
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'project-todo-priority';
    prioritySelect.name = 'priorities';
    priorityTypes.forEach(function(type) {
      const priorityOption = document.createElement('option');
      priorityOption.value = type;
      priorityOption.text = type[0].toUpperCase() + type.slice(1);
      prioritySelect.append(priorityOption);
    })

    newForm.append(priorityLabel, prioritySelect);

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'submit';
    submit.id = 'project-todo-submit' + `${projectIndex}`;
    submit.classList.add('form-button');
    newForm.append(submit);
    projectContainer.append(newForm);
  }