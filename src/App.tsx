import Todos from "./components/Todos";
import Todo from "./components/models/todo";
function App() {
  const todos = [new Todo("learn react"), new Todo("learn typescript")];
  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
