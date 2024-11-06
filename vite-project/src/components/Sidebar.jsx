import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  // load data item len sidebar
  const data = props.todoItem;

  return (
    <div className='sidebar'>
      <form className='sb-form'>
        <div className='sb-form-field'>
          <label htmlFor='sb-name'>Todo Name</label>
          <input
            type='text'
            id='sb-name'
            name='name'
            value={data.name}
          />
        </div>
        <div className='sb-form-field'>
          <label htmlFor='sb-important'>Is Important ?</label>
          <input
            type='checkbox'
            id='sb-important'
            name='isImportant'
            checked={data.isImportant}
          />
        </div>
        <div className='sb-form-field'>
          <label htmlFor='sb-completed'>Is completed ?</label>
          <input
            type='checkbox'
            id='sb-completed'
            name='isCompleted'
            checked={data.isCompleted}
          />
        </div>
      </form>

      <div className='sb-footer'>
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default Sidebar;
