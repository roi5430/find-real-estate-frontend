import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {Layout, RequireAuth } from './routes/layout/layout.jsx'
import HomePage from './routes/homePage/homePage.jsx'
import ListPage from './routes/listPage/listPage.jsx'
import SinglePage from './routes/singlePage/singlePage.jsx'
import ProfilePage from './routes/profilePage/profilePage.jsx'
import Register from './components/register/register.jsx'
import Login from './routes/login/login.jsx'
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/list',
        element: <ListPage />
      },
      {
        path: '/:id',
        element: <SinglePage />
      },
      {
        path: '/profile',
        element: <ProfilePage />
      },
      {
        path: '/profile/update',
        element: <ProfileUpdatePage/>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/',
        element:<RequireAuth/>,
        children: [    
          {
            path: '/profile',
            element: <ProfilePage />
          },
        ]
      }
    ]
  }
])

export default function App () {
  return <RouterProvider router={router} />
}
