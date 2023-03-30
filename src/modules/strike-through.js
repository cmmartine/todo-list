export { strikeThrough };

const strikeThrough = function(containers = []) {
  containers.forEach(function(container) {
    if (container.classList.contains('strike-through')) {
      container.classList.remove('strike-through');
    } else {
      container.classList.add('strike-through');
    }
  });
} 