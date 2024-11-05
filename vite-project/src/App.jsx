import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  // useState
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Đi học thêm" },
    { id: 2, name: "Đi học bài" },
    { id: 3, name: "Đi chơi" },
    { id: 4, name: "Đi ngủ" },
  ]);

  // console.log({ todoList, setTodoList });

  const inputRef = useRef();
  // console.log({ inputRef });

  const todos = todoList.map((todo, index) => {
    return (
      <TodoItem
        name={todo.name}
        key={todo.id}
      />
    );
  });

  console.log({ todos });

  return (
    <div className='container'>
      <input
        ref={inputRef}
        type='text'
        name='add-new-task'
        placeholder='Add new task'
        className='task-input'
        // khi nhap vao input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // get value input after click Enter
            const value = e.target.value;
            // console.log(value);

            // Add value in list
            setTodoList([
              ...todoList,
              { id: crypto.randomUUID(), name: value },
            ]);

            // xóa data vua nhap sau khi enter:
            inputRef.current.value = "";
          }
        }}
      />

      <div>{todos}</div>
    </div>
  );
}

export default App;
