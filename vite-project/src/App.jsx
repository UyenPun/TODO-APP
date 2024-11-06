import { useRef, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";

function App() {
  // useState
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Đi học thêm", isImportant: false, isCompleted: true },
    { id: 2, name: "Đi học bài", isImportant: true, isCompleted: false },
    { id: 3, name: "Đi chơi", isImportant: false, isCompleted: true },
  ]);

  // Sidebar:
  const [showSideBar, setShowSideBar] = useState(false);

  // Item đang được lựa chọn
  const [activeTodoItemId, setactiveTodoItemId] = useState();

  // ----------------------------------------

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

  // Chang show sideber
  const handleTodoItemClick = (todoId) => {
    setShowSideBar(showSideBar); // khi click vào 1 item khác mà side bar ko mất đi chỉ load data của item khác lên -> bỏ !
    setactiveTodoItemId(todoId);
  };

  // Load data theo item lên sidebar khi click
  const activeTodoItem = todoList.find((todo) => todo.id === activeTodoItemId);

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
        handleTodoItemClick={handleTodoItemClick}
      />
    );
  });

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

      {/* Sidebar */}
      {showSideBar && <Sidebar todoItem={activeTodoItem} />}
      {activeTodoItem && <Sidebar todoItem={activeTodoItem} />}
    </div>
  );
}

export default App;
