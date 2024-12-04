import { createBrowserRouter } from 'react-router-dom'

import Home from '../routes/Home';
import { loader as postsLoader } from '../services/loaders-actions/loaderHome'
import NewPost from '../routes/NewPost';
import { action as newPostsAction} from '../services/loaders-actions/actionNewPost'
import PostDetails from '../routes/PostDetails';
import { loader2 as postDetailsLoader } from '../services/loaders-actions/loaderPostsDetails'
import RootLayout from '../routes/RootLayout';
import '../assets/styles/index.css';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostsAction },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader}
        ],
      },
    ],
  },
]);