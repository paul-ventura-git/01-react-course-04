import { useState } from 'react';
import { Link } from 'react-router-dom'

import Modal from "../components/PostsList/Modal/Modal"
import classes from '../assets/styles/NewPost.module.css';

function NewPost({ onAddPost }) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData); // Load onAddPost with "postdata"
    //onCancel(); // Close
  }

  function onCancel() {
    
  }

  function onAddPost() {
    
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text:</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name:</label>
          <input type="text" id="name" required onChange={authorChangeHandler} />
        </p>
        <p className={classes.actions}>
          <Link to='..' type="button">
            Cancel
          </Link>
          <button type="submit" onClick={onAddPost}>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;