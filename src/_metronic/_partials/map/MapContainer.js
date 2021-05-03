import React, { useState, useEffect } from 'react'
import { Marker } from 'google-maps-react'
import GoogleMapReact from 'google-map-react';
import {Popover, OverlayTrigger} from 'react-bootstrap'

import company from './icons/company.svg'
import client from './icons/client.svg'


import ModalCalendar from './ModalCalendar'
import ModalPerfil from './ModalPerfil'
import InfoWindowCustom from './InfoWindow'

//https://www.npmjs.com/package/google-maps-react DOCUMENTACIÓN DE LA LIBRERÍA


function MapContainer(props) {
    const {executeFunction} = props

    useEffect( () => {
      if(executeFunction) barranquillaPos()
    }, [executeFunction])
    const barranquillaPos = () => {
      setMapProps({
            zoom: 12,
            center: { lat: 10.96854, lng: -74.78132},
            visibleClients: true
        })
    }
    const routesCoords = [
        { lat: 4.60971, lng: -74.08175 },
        { lat: 10.96854, lng: -74.78132 },
    ];
    const [mapProps, setMapProps] = useState({
        zoom: 6,
        center: { lat: 4.570868, lng: -74.297333 },
        visibleClients: false,
    })
    const [showModalCalendar, setShowModalCalendar] = useState(false)
    const handleShowModalCalendar = () => setShowModalCalendar(true)
    const handleCloseModalCalendar = () => setShowModalCalendar(false)

    const [showModalPerfil, setShowModalPerfil] = useState(false)
    const handleShowModalPerfil = () => setShowModalPerfil(true)
    const handleCloseModalPerfil = () => setShowModalPerfil(false)

    const [showInfo, setShowInfo] = useState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    })

    const handleClickMarker = (lat, lng) => {
        setMapProps({
            zoom: 12,
            center: { lat: lat, lng: lng},
            visibleClients: true
        })
    }
 const popover = (
  <Popover id="popover-basic" style = {{position : 'fixed'}}>
    <Popover.Content>
      <InfoWindowCustom handleShowModalCalendar = {handleShowModalCalendar}
            handleShowModalPerfil = {handleShowModalPerfil}/>
    </Popover.Content>
  </Popover>
);

    return (
        <GoogleMapReact
          bootstrapURLKeys={{key: 'AIzaSyA01EIKVqGmy9BAhcDyT-nsJsLtBUbU_gA'}}
          center={mapProps.center}
          defaultCenter={mapProps.center}
          defaultZoom = {mapProps.zoom}
          zoom={mapProps.zoom}
        >

        <div lat = {4.60971} lng = {-74.08175} onClick = {() => handleClickMarker(4.60971, -74.08175)}>
          <button className="btn">
            <img src={company} alt="" style = {{height : '35px', width : '35px'}}/>
          </button>
        </div>

        <div lat = {10.96854} lng = {-74.78132} onClick = {() => handleClickMarker(10.96854, -74.78132)}>
          <button className="btn">
            <img src={company} alt="" style = {{height : '35px', width : '35px'}}/>
          </button>
        </div>

        <div lat = {4.60971} lng = {-74.09975} className = {mapProps.visibleClients ? '' : 'd-none'}>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <button className="btn">
            <img src={client} alt="" style = {{height : '35px', width : '35px'}}/>
          </button>
          </OverlayTrigger>
        </div>

        <div lat = {4.64871} lng = {-74.09580} className = {mapProps.visibleClients ? '' : 'd-none'}>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <button className="btn">
            <img src={client} alt="" style = {{height : '35px', width : '35px'}}/>
          </button>
          </OverlayTrigger>
        </div>

        <div lat = {10.97854} lng = { -74.78232} className = {mapProps.visibleClients ? '' : 'd-none'}>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <button className="btn">
            <img src={client} alt="" style = {{height : '35px', width : '35px'}}/>
          </button>
          </OverlayTrigger>
        </div>

        <div lat = {10.98654} lng = {-74.78832} className = {mapProps.visibleClients ? '' : 'd-none'}>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <button className="btn">
            <img src={client} alt="" style = {{height : '35px', width : '35px'}}/>
          </button>
          </OverlayTrigger>
        </div>


          <ModalCalendar show = {showModalCalendar} handleClose = {handleCloseModalCalendar}/>
          <ModalPerfil show = {showModalPerfil} handleClose = {handleCloseModalPerfil}/>
        </GoogleMapReact>
    )
}

export default MapContainer