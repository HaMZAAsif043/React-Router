import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './error-page.jsx'
// import Contact from './routes/contact.jsx'
import Root, { loader as rootLoader } from "./routes/root";
import './index.css'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Github, { githubInfoLoader } from './components/Github.jsx'

// const route = Router([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//       },
//     ]
//   },

// ])
const route = createBrowserRouter(
  // {
  //   path: '/',
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: 'about',
  //       element: <About/>,
  //       errorElement: <ErrorPage />,
  //     },
  //     {
  //       path: '',
  //       element: <Home/>,
  //       errorElement: <ErrorPage />,
  //     },
  //     {
  //       path: 'contact',
  //       element: <Contact />,
  //       errorElement: <ErrorPage />,
  //     }
  //   ]
  // }
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' element={<Github />} loader={githubInfoLoader} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={route}/> */}
    <RouterProvider router={route} />
  </StrictMode>,
)
