import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router'
import Dashboard from '../components/Dashboard'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../components/Login'
import Register from '../components/Register'
import ForgotPass from '../components/ForgotPass'

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path:"/",
      element: <Dashboard/>
    },
    {
      path:"/auth",
      element:<AuthLayout/>,
      children:[
        {
          path:"login",
          index:true,
          element:<Login/>
        },
        {
          path:"register",
          element:<Register/>
        },
        {
          path:"forgot-password",
          element:<ForgotPass/>
        },
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default AppRoutes
