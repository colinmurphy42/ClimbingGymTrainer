import React from 'react';
import {ReactComponent as Logo} from '../../assets/mountain-climber.svg';
import {Link} from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/gym' className='option'>
                Gym
            </Link>
            <Link to='/allRoutes' className='option'>
                All Routes
            </Link>
            <Link to='/myRoutes' className='option'>
                My Routes
            </Link>
        </div>
    </div>
)



export default Header