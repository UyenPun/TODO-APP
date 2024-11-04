import React from "react";

const TodoItem = (props) => {
  console.log(props);

  function handleClick() {
    alert(props.name);
  }

  return (
    <div
      className='todo-item'
      // use anonymous
      onClick={() => {
        alert(props.name);
      }}>
      <p className='todo-item-text'>{props.name}</p>
    </div>
  );
};

export default TodoItem;
