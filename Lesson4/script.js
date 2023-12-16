const todoList = document.querySelector('.todo-list');

// Khởi tạo mảng lưu trữ todos từ local storage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Hiển thị todos trên màn hình
function renderTodos() {
  todoList.innerHTML = '';
  for (const todo of todos) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      todo.completed = !todo.completed;
      localStorage.setItem('todos', JSON.stringify(todos));
      renderTodos();
    });
    
    const text = document.createElement('span');
    text.textContent = todo.text;

    // Thêm chức năng xóa todo
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      todos = todos.filter(item => item !== todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      renderTodos();
    });
    todoItem.appendChild(checkbox);
    todoItem.appendChild(text);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  }
}

// Thêm todo mới
const addTodoButton = document.getElementById('add-todo');
addTodoButton.addEventListener('click', () => {
  const newTodoText = document.getElementById('new-todo').value.trim();
  if (!newTodoText) return;
  todos.push({ text: newTodoText, completed: false });
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
  document.getElementById('new-todo').value = '';
});

// Hiển thị todos ban đầu

renderTodos();

