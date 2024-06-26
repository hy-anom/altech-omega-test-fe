import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Navbar from './components/Navbar.tsx'
import './index.scss'
import About from './pages/about/About.tsx'
import Contact from './pages/contact/Contact.tsx'
import Pricing from './pages/pricing/Pricing.tsx'
import Login from './pages/login/Login.tsx'

const router = createBrowserRouter([{
  element: (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
  children: [{
    path: '/',
    element: <App />
  },{
    path: '/about',
    element: <About />
  }, {
    path: '/pricing',
    element: <Pricing />
  }, {
    path: '/contact',
    element: <Contact />
  }, {
    path: '/login',
    element: <Login />
  }]
}])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
