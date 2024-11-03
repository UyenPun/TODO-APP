import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div>
      <input
        type='text'
        name='add-new-task'
        placeholder='Add new task'
      />

      <div>
        <TodoItem name='Đi học thêm' />
        <TodoItem name='Đi học bài' />
        <TodoItem name='Đi chơi' />
        <TodoItem name='Đi ngủ' />
      </div>
    </div>
  );
}

export default App;
