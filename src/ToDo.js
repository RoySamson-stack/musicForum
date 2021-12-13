import React, { useState } from 'react';
import TodoForm from './ToDoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ToDo = ({ posts, completePost, removePost, updatePost }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  const [comment, setComment] = useState('');

  const submitUpdate = value => {
    updatePost(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };
  //create handlechange 
  const handleChange = e => {
    setComment({
      ...comment,
      value: e.target.value
    });
  };
//create handlesubmit function for setComment
  const handleSubmit = e => {
    e.preventDefault();
    setComment({
      ...comment,
      value: e.target.value
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return posts.map((post, index) => (
    <div className="inline">
    <div
      className={post.isComplete ? 'post-row complete' : 'post-row'}
      key={index}
    >
      <div key={post.id} onClick={() => completePost(post.id)}>
        {post.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removePost(post.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: post.id, value: post.text })}
          className='edit-icon'
        />

      </div>
            
    </div>
    <form onSubmit={handleSubmit} className="comment-section">
    <input type="" className="post-comment" onChange={handleChange} placeholder="comment"/>
    <button className="comment-btn" onSubmit={handleSubmit}  type="submit">comment</button>
    </form>
    </div>
  ));
};

export default ToDo;
