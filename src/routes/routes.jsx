import HomePage from '../pages/HomePage.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import PantsPage from '../pages/PantsPage.jsx';
import CartPage from '../pages/CartPage.jsx';
import MensShirtPage from '../pages/MensShirtPage.jsx';
import ShirtsLayout from '../layouts/ShirtsLayout.jsx';
import ShirtsPage from '../pages/ShirtsPage.jsx';
import WomensShirtPage from '../pages/WomensShirtPage.jsx';

const routes = [
  {
    path: '/', 
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home', 
        element: <HomePage />,
      }, 
      {
        path: '/shirts', 
        element: <ShirtsLayout />,
        children: [
          {
            path: '/shirts', 
            element: <ShirtsPage />
          },
          {
            path: '/shirts/men',
            element: <MensShirtPage />,
          },
          {
            path: '/shirts/woman',
            element: <WomensShirtPage />,
          }
        ]
      }, 
      {
        path: '/pants', 
        element: <ShirtsLayout />,
        children: [
          {
            path: '/pants', 
            element: <ShirtsPage />
          },
          {
            path: '/pants/men',
            element: <MensShirtPage />,
          },
          {
            path: '/pants/woman',
            element: <WomensShirtPage />,
          }
        ]
      }, 
      {
        path: '/cart', 
        element: <CartPage />
      }
    ]
  },
]

export { routes };