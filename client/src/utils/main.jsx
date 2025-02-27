import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '../components/Home.jsx';
import LogIn from '../components/LogIn.jsx';
import Standings from '../components/Standings.jsx';
import FieldStatus from '../components/FieldStatus.jsx';
import HallOfFame from '../components/HallOfFame.jsx';
import SignUp from '../components/SignUp.jsx';

const router = createBrowserRouter([
  { path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <LogIn />
      },
      {
        path: "standings",
        element: <Standings />
      },
      {
        path: "fieldstatus",
        element: <FieldStatus />
      },
      {
        path: "halloffame",
        element: <HallOfFame />
      },
      {
        path: "signup",
        element: <SignUp />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>,
)
