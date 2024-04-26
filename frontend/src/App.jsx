import React from 'react'
import './App.css'
import ActivityView from './ActivityView'
import AddActivity from './AddActivityView'
import Home from './Home'
import ActivityList from './Component/ActivityList'
import Footer from './Component/Footer'
// import Header from './Component/Header'
// import FetchData from './Component/FetchData'
// import ImageCarousel from './Component/ImageCarousel'
// import SearchActivity from './Component/SearchActivity'

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider,
  Route,
  // createRoutes,
} from 'react-router-dom'

function Root(){
  return (
    <>
    <div className="Nav-Container">
      <nav className="Navbar">
          <ul className="Navbar-Ul">
            <li className="Navbar-Li">
              <Link to="/" className="Navbar-Link">Hem</Link>
            </li>
            <li className="Navbar-Li">
              <Link to="/activityView" className="Navbar-Link">Aktiviteter</Link>
            </li>
            <li className="Navbar-Li">
              <Link to="/AddActivityView"className="Navbar-Link">Skapa aktivitet</Link>
            </li>
            {/* <li className="Navbar-Li">
              <DropdownActivity />
            </li> */}
          </ul>
        </nav>
      </div>
        <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )}

function App() {
  const router = createHashRouter ([
    {
      children: [
        { element: <Home />, path: '/'},
        { element: <ActivityView />, path: '/activityView'},
        { element: <AddActivity />, path: '/AddActivityView'},
        { elemeny: <Route path="/:category" component={ActivityList} /> }

      ],
      element: <Root />
    }
  ])

  return <RouterProvider router= {router} />
}

export default App
