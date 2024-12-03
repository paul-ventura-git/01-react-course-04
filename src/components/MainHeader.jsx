import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from '../assets/styles/MainHeader.module.css';

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Twitter prototype
      </h1>
      <p>
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Tweet
        </button>
      </p>
    </header>
  );
}

export default MainHeader;