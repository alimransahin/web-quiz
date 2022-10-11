import './App.css';
import Main from './Layout/Main';
import Home from './Components/Home/Home';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';

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
      }, 
      {
        path: '/home',
        element: <Home></Home>,
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
      path:'/blog',
      element:<Blog></Blog>,
      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
   },
   {
    path:'/*',
    element:<div>
      <h3 className='text-5xl text-center mt-40'>404 Error. Page Not Found.</h3>
      <p className='text-center text-3xl mt-5'>Go to <Link className='text-blue-500' to='/'>Home page</Link></p>
    </div>
   }
  ])
  return (
    <div className='bg'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
