import logo from './logo.svg';
import './App.css';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router=createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
      }
    ]
   }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <RouterProvider router={router}></RouterProvider> */}
    </div>
  );
}

export default App;
