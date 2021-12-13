import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='forum-container'>
      {props.edit ? (
        <>
        
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='forum-post edit'
          />
          <button onClick={handleSubmit} className='forum-btn edit'>
            Update
          </button>
        </>
      ) : (
        <>
        <div className="">
          <input
            placeholder='Make a post'
            value={input}
            onChange={handleChange}
            name='text'
            className='forum-post'
            ref={inputRef}
          />
          </div>
          <button onClick={handleSubmit} className='forum-btn'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
