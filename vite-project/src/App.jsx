import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className='container'>
      <input
        type='text'
        name='add-new-task'
        placeholder='Add new task'
        className='task-input'
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
