import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardIntro } from './components';
import { HomeLayout, Landing, Error, Login, Register, DashboardLayout, Offerten, Einstellungen } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <DashboardIntro />,
        },
        {
          path: 'offerte',
          element: <Offerten />,
        },
        {
          path: 'einstellungen',
          element: <Einstellungen />
        }
      ],
    },
  ]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
