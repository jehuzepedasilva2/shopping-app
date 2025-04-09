import HomePage from '../pages/HomePage.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import MainLayout from '../layouts/MainLayout.jsx';
import PantsPage from '../pages/PantsPage.jsx';
import CartPage from '../pages/CartPage.jsx';
import MensShirtPage from '../pages/MensShirtPage.jsx';
import ShirtsLayout from '../layouts/ShirtsLayout.jsx';
import ShirtsPage from '../pages/ShirtsPage.jsx';
import WomensShirtPage from '../pages/WomensShirtPage.jsx';

// for cart look into createContext, useContext or simply add to MainLayout state and pass down to every children

// issue: I was making a fake react clothing online store, and I had every page (mens/womans shirts and pants) but realized I hadn't
//  added functionality/logic to the cart. I ran into a bit of a problem on how to do it, I was't sure if I should just lift the state to the highest
//  component and pass it down to every child (prop-drilling, passing state through heavily nested components even 
// if they didn't need that piece of information). After some research I landed on createContext, useContext which scales a whole lot better.

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