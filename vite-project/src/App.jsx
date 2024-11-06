import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  // useState
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Đi học thêm", isImportant: false, isCompleted: true },
    { id: 2, name: "Đi học bài", isImportant: true, isCompleted: false },
    { id: 3, name: "Đi chơi", isImportant: false, isCompleted: true },
  ]);

  // Change checkbox
  const handleCompleteCheckboxChange = (todoId) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });

    setTodoList(newTodoList);
  };

  const inputRef = useRef();

  const todos = todoList.map((todo, index) => {
    return (
      <TodoItem
        id={todo.id}
        name={todo.name}
        key={todo.id}
        isImportant={todo.isImportant}
        isCompleted={todo.isCompleted}
        handleCompleteCheckboxChange={handleCompleteCheckboxChange}
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

            // Add value in list
            setTodoList([
              ...todoList,
              {
                id: crypto.randomUUID(),
                name: value,
                isImportant: false,
                isCompleted: false,
              },
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
