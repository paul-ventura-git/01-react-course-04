import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom' 

import classes from '../../assets/styles/MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Twitter prototype
      </h1>
      <p>
        <button className={classes.button}>
          <Link to='/create-post'>
            <MdPostAdd size={18} />
            New Tweet
          </Link>
        </button>
      </p>
    </header>
  );
}

export default MainHeader;