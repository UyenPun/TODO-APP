import React from "react";

const TodoItem = (props) => {
  const data = props.todoItem;
  console.log({ data });

  return (
    <div
      className='todo-item'
      onClick={() => {
        props.handleTodoItemClick(props.id);
      }}>
      <div style={{ display: "flex", gap: "4px" }}>
        <input
          type='checkbox'
          checked={props.isCompleted}
          onChange={() => {
            props.handleCompleteCheckboxChange(props.id);
          }}
        />

        <p className='todo-item-text'>{props.name}</p>
      </div>

      {/* icon: 'widows + .' */}
      {props.isImportant && <p>⭐</p>}
    </div>
  );
};

export default TodoItem;
