import React, {Component} from 'react';
import svgFile from '../../assets/gym-shape.svg'
import './gym-map.styles.scss';
import GymMapArea from '../gym-map-area/gym-map-area.component';
import AREA_INFO from '../../data/areas/areas.info.js';

class GymMap extends Component{
    constructor(){
        super()
        this.state={
            areaInfo: AREA_INFO,
        }
    }

    areaChangeHandler = (areaValue) =>{
        console.log(areaValue.value);
        this.setState({selectedArea: areaValue.value});
    }

    render(){
        const {areaInfo} = this.state;
        const {gymSelectedArea} = this.props
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
}
export default GymMap