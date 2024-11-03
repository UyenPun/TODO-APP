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
        <TodoItem />
        <div>
          <p>Đi học thêm</p>
        </div>
        <div>
          <p>Đi học bài</p>
        </div>
        <div>
          <p>Đi học võ</p>
        </div>
        <div>
          <p>Đi chợ</p>
        </div>
        <div>
          <p>Đi ngủ</p>
        </div>
      </div>
    </div>
  );
}

export default App;
