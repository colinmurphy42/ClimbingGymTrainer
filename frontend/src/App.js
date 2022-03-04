import React from 'react';
import Header from './components/header/header.component';
import {Routes, Route} from 'react-router-dom';
import './App.scss';

import LandingPage from './pages/landing-page/landing-page.component';
import Gym from './pages/homepage/homepage.component';
import AllRoutesPage from './pages/all-routes/all-routes.component';
import MyRoutesPage from './pages/my-routes/my-routes.component';
import RouteInfoPage from './pages/route-info/route-info.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/gym' element={<Gym/>}/>
        <Route path='/allRoutes' element={<AllRoutesPage/>}/>
        <Route path='/myRoutes' element={<MyRoutesPage/>}/>
        <Route path='/route/:routeID' element={<RouteInfoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
