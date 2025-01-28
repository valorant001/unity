import './App.css'
import HomePage from './HomePage/HomePage'
import Navigation from './Navbar/NavigationBar'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from './Services/Services';
import Aboutus from './Aboutus/Aboutus';

function App() {
  const router = createBrowserRouter(
    
    [ 
      { path: "/", element: <HomePage />  },
      { path: "/Services", element: <Services />  },
      { path: "/Aboutus", element: <Aboutus />  },
    ]
  
);

  return (
      <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
