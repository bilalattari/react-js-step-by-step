// import { useEffect, useState } from "react";
// import "./App.css";
// import { addTodo, fetchTodos } from "./utils/todos";
// import { QueryClient, useMutation, useQuery } from "react-query";
// const queryClient = new QueryClient();

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";

// function App() {
//   const [todo, setTodo] = useState("");
//   const {
//     data: todos = [],
//     isLoading,
//     isError,
//     refetch,
//   } = useQuery({
//     queryKey: ["todos"],
//     queryFn: fetchTodos,
//   });

//   const mutation = useMutation({
//     mutationFn: (todo) => {
//       return addTodo(todo);
//     },
//     onSuccess: () => {
//       refetch(), setTodo("");
//     },
//   });

//   if (isError)
//     return (
//       <h1 className="font-bold text-3xl">
//         Sorry we can't fetch data right now
//       </h1>
//     );
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <h1 className="font-bold text-3xl">React Query</h1>

//       {isLoading && <h1 className="font-bold text-3xl">Loading...</h1>}

//       <div className="my-2">
//         <input
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//           placeholder="Todo"
//           className="border p-2 "
//         />
//         <button
//           className="border p-2 mx-2 "
//           disabled={mutation.isLoading}
//           onClick={() => {
//             mutation.mutate(todo);
//           }}
//         >
//           {mutation.isLoading ? "Adding" : "Add Todo"}
//         </button>
//       </div>

//       {todos.map((data, ind) => (
//         <h1 className="font-medium my-2 text-xl" key={ind}>
//           {data}
//         </h1>
//       ))}
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
