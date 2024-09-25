import "./App.css";
import FormUsingHookForm from "./components/FormUsingHookForm";
import TraditionalFormUsingHook from "./components/TraditionalForm";

function App() {
  return (
    <div>
      <h1>React Hook Form Using Yup Validation Schema</h1>

      {/* <TraditionalFormUsingHook /> */}

      <FormUsingHookForm />
    </div>
  );
}

export default App;
