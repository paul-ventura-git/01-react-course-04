import { useState } from 'react';

import PostsList from './components/PostsList/PostsList.jsx';
import MainHeader from './components/MainHeader/MainHeader.jsx';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <PostsList
        isPosting={modalIsVisible}
        onStopPosting={hideModalHandler}
      />
    </>
  );
}

export default App;
