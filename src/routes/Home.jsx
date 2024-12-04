import { Outlet } from 'react-router-dom';

import PostsList from '../components/PostsList/PostsList';

function Home() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Home;

