import React, {useState, useEffect} from 'react';
import svgFile from '../../assets/gym-shape.svg'
import './gym-map.styles.scss';
import GymMapArea from '../gym-map-area/gym-map-area.component';
import axios from 'axios';

const GymMap = ({gymSelectedArea}) => {
    const[areaInfo, setAreaInfo] = useState([]);

    useEffect(() => {   //This use effect grabs all the area data and puts it into the areaInfo state
        axios.get('/api/areas/')
        .then((res) => setAreaInfo(res.data))
        .catch((err) => {
            alert(err.message);
        })
    }, []);

    return(
        <div className='gym-map'>
            <img src={svgFile} height='300px' width='500px' alt='gym map'/>
            {
                areaInfo.map(({name, ...otherLocationProps}, index) => (
                    <GymMapArea 
                        key={index} 
                        isSelected={name.toLowerCase() === gymSelectedArea}
                        name={name}
                        {...otherLocationProps}
                    />
                ))
            }
        </div>
    );
}
export default GymMap