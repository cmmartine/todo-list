export { createProjectForm };

  function createProjectForm(project, projectIndex) {
    const newForm = document.createElement('form');
    newForm.classList.add("toggle-visibility");
    newForm.dataset.index = projectIndex;
    newForm.id = 'project-edit-form' + `${projectIndex}`;

    const title = document.createElement('input');
    const titleLabel = document.createElement('div');
    title.id = 'project-title' + `${projectIndex}`;
    titleLabel.innerText = 'Title: '
    title.type = 'text';
    title.value = project.title;
    newForm.append(titleLabel, title);

    const description = document.createElement('input');
    const descLabel = document.createElement('div');
    description.id = 'project-description' + `${projectIndex}`;
    descLabel.innerText = 'Title: ';
    description.type = 'text';
    description.value = project.description;
    newForm.append(descLabel, description);

    const dueDate = document.createElement('input');
    const dateLabel = document.createElement('div');
    dueDate.id = 'project-due-date' + `${projectIndex}`;
    dateLabel.innerText = 'Due by: '
    dueDate.type = 'datetime-local';
    newForm.append(dateLabel, dueDate);

    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'project-priority';
    priorityLabel.innerText = 'Priority';

    const priorityTypes = ['none', 'highest', 'high', 'middle', 'low'];
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'project-priority' + `${projectIndex}`;
    prioritySelect.name = 'priorities';
    priorityTypes.forEach(function(type) {
      const priorityOption = document.createElement('option');
      priorityOption.value = type;
      priorityOption.text = type[0].toUpperCase() + type.slice(1);
      prioritySelect.append(priorityOption);
    })
    prioritySelect.value = project.priority;

    newForm.append(dueDate, priorityLabel, prioritySelect);

    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.name = 'submit';
    submit.id = 'project-submit-edit' + `${projectIndex}`;
    submit.classList.add('form-button');
    newForm.append(submit);

    return newForm;
  }