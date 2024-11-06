import React from "react";

const TodoItem = (props) => {
  return (
    <div
      className='todo-item'
      onClick={props.handleTodoItemClick}>
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
