import { useCallback, useMemo, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("All");
  const [todos, setTodos] = useState([
    {
      todo: "Reading Book",
      id: Date.now(),
      completed: false,
    },
  ]);

  const handleAddTodo = useCallback(() => {
    const todosArr = [
      ...todos,
      {
        todo,
        id: Date.now(),
        completed: false,
      },
    ];
    setTodos([...todosArr]);
    setTodo("");
  }, [todo]);

  const handleOnDelete = useCallback(
    (id) => {
      const filter = todos.filter((data) => data.id !== id);
      setTodos([...filter]);
    },
    [todos]
  );

  const handleOnToggleTodo = useCallback(
    (id) => {
      const todosArr = [...todos];
      const todoInd = todosArr.findIndex((data) => data.id == id);
      todosArr[todoInd].completed = !todosArr[todoInd].completed;
      setTodos([...todosArr]);
    },
    [todos]
  );

  const filteredTodos = useMemo(
    () =>
      todos.filter((data) => {
        console.log("FILTER FUNCTION WORKING");
        if (filter == "All") {
          return true;
        }
        if (filter == "Completed" && data.completed) {
          return true;
        }
        if (filter == "UnCompleted" && !data.completed) {
          return true;
        }
      }),
    [filter, todos]
  );

  return (
    <div className="w-full mx-auto">
      <h1 className="font-bold text-3xl">Todo App</h1>
      <TodoInput
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onClick={handleAddTodo}
      />

      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        toggleTodo={handleOnToggleTodo}
        todos={filteredTodos}
        onDelete={handleOnDelete}
      />
    </div>
  );
}

export default App;
