import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/hero.png";

const App = () => {
  const hieune = "Eric Arsenal";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam",
  };

  const addNewTodo = (name) => {
    alert(`call me ${name}`); //dấu backtips
    // truyền function từ cha sang con
  };
  addNewTodo();
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={hieune} age={age} data={data} />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};

export default App;
