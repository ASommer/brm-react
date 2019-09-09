import React from "react"
import L from 'leaflet';
import { Marker } from "react-leaflet"

const VehicleMarker = props => {

  let provIcon = require(`../assets/provider/markers/default.png`);
  let provIconRetina = require(`../assets/provider/markers/default-2x.png`);

  try {
    provIcon = require(`../assets/provider/markers/${props.providerSlug}.png`);
    provIconRetina = require(`../assets/provider/markers/${props.providerSlug}-2x.png`);
  } catch (error) {
    console.log('provicon error ')
  }

  const  networkIcon = new L.Icon({
      iconUrl: provIcon,
      iconRetinaUrl: provIconRetina,
      iconAnchor: null,
      popupAnchor: null,
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(25, 40),
      className: 'leaflet-div-icon',
    }) 

  return (
    <Marker 
      icon={networkIcon}
      position={props.position}
      onClick={e => props.clickHandler(e)}
    />
  )
}

export default VehicleMarker