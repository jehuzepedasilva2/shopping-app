import HomePage from '../pages/HomePage.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import ShirtsPage from '../pages/ShirtsPage.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import PantsPage from '../pages/PantsPage.jsx';
import CartPage from '../pages/CartPage.jsx';

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
        element: <ShirtsPage />,
      }, 
      {
        path: '/pants', 
        element: <PantsPage />
      }, 
      {
        path: '/cart', 
        element: <CartPage />
      }
    ]
  },
]

export { routes };