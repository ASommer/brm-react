import React from 'react'
import LocationSearch from './LocationSearch';

import '../styles/map-top-bar.css';

const MapTopBar = ({updateLocation}) => {
    return (
        <div className="map-top-bar">
            <LocationSearch updateLocation={updateLocation} />
        </div>
    )
}

export default MapTopBar
