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
        <div className={classes.actions}>
          <div className={classes.back}>
            <Link to='..'>
              Cancel
            </Link>
          </div>
          <button>Submit</button>
        </div>
      </form>
    </Modal>
  );
}

export default NewPost;