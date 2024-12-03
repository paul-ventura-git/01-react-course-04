import { useLoaderData, Link } from 'react-router-dom';
import App from '../App'

import Modal from '../components/Modal';
import classes from '../assets/styles/PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <App className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </App>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;