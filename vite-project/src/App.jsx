import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  // bien luu lai infor
  const todoList = ["Đi học thêm", "Đi học bài", "Đi chơi", "Đi ngủ"];

  const todos = todoList.map((todo) => {
    return <TodoItem name={todo} />;
  });

  console.log({ todos });

  return (
    <div className='container'>
      <input
        type='text'
        name='add-new-task'
        placeholder='Add new task'
        className='task-input'
      />

      <div>{todos}</div>
    </div>
  );
}

export default App;
