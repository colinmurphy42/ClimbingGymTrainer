import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './landing-page.styles.scss';

const LandingPage = () => {
    const [test, setTest] = useState([]);
    useEffect(() => {
        axios.get("/api/areas/")
        .then((res) => setTest(res.data))
        .catch((err) => console.log(err));
    });

    return(
        <div className='landing-page page'>
            <h1>Welcome</h1>
            <p> 
                Welcome to this climbing gym app!
            </p>
            <p className='landing-page-subtext'> 
                Look for routes that you've climbed and add them to your
                route list. Browse routes by location on our gym page, or browse them all at once in the All Routes tab.
                You can see your list by clicking My Routes and find more information about each route by clicking on them.
                Enjoy!
            </p>
            {
                test.map((item, index) => (
                    <h1 key={index}>{item.name}</h1>
                ))
            }
        </div>
    );
};

export default LandingPage