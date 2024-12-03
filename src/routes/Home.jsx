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

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}