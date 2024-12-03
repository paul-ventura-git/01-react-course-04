import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home, { loader as postsLoader } from './routes/Home';
import NewPost, { action as newPostsAction} from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import './assets/styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: postsLoader,
        children: [{ 
          path: '/create-post', 
          element: <NewPost />,
          action: newPostsAction
        }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);