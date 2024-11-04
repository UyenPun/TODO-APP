import React from "react";

const TodoItem = (props) => {
  console.log(props);

  function handleClick() {
    alert(props.name);
  }

  return (
    <div
      className='todo-item'
      onClick={handleClick}>
      <p className='todo-item-text'>{props.name}</p>
    </div>
  );
};

export default TodoItem;
