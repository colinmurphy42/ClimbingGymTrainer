import React from 'react';
import Header from './components/header/header.component';
import {Routes, Route, useLocation} from 'react-router-dom';
import './App.scss';

import LandingPage from './pages/landing-page/landing-page.component';
import Gym from './pages/gym/gym.component';
import AllRoutesPage from './pages/all-routes/all-routes.component';
import MyRoutesPage from './pages/my-routes/my-routes.component';
import RouteInfoPage from './pages/route-info/route-info.component';
import AddAreaPage from './pages/add-area-page/add-area-page.component';
import SignUpPage from './pages/sign-up-page/sign-up-page.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';

function App() {
  let location = useLocation();
  return (
    <div className="App">
      {
        location.pathname !== '/signup' && location.pathname !== '/signin' ? <Header/> : null  //This hides header on sign up and sign in pages
      }
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/gym' element={<Gym/>}/>
        <Route path='/allRoutes' element={<AllRoutesPage/>}/>
        <Route path='/myRoutes' element={<MyRoutesPage/>}/>
        <Route path='/route/:routeID' element={<RouteInfoPage/>}/>
        <Route path='/addArea' element={<AddAreaPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
