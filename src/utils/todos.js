const todos = ["Bath", "Breakfast", "Walking", "Office", "Lunch"];

export const fetchTodos = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos);
      // reject('Something went wrong');
    }, 1000);
  });

export const addTodo = (todo) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.push(todo);
      resolve([...todos]);
    }, 1000);
  });
