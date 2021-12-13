import React, { useState } from 'react';
import TodoForm from './ToDoForm';
import ToDo from './ToDo';

function TodoList() {
  const [posts, setPosts] = useState([]);

  const addPost = post => {
    if (!post.text || /^\s*$/.test(post.text)) {
      return;
    }

    const newposts = [post, ...posts];

    setPosts(newposts);
    console.log(...posts);
  };

  const updatePost = (postId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setPosts(prev => prev.map(item => (item.id === postId ? newValue : item)));
  };

  const removePost = id => {
    const removedArr = [...posts].filter(post => post.id !== id);

    setPosts(removedArr);
  };

  const completePost = id => {
    let updatedposts = posts.map(post => {
      if (post.id === id) {
        post.isComplete = !post.isComplete;
      }
      return post;
    });
    setPosts(updatedposts);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addPost} />
      <ToDo
        posts={posts}
        completePost={completePost}
        removePost={removePost}
        updatePost={updatePost}
      />
    </>
  );
}

export default TodoList;
