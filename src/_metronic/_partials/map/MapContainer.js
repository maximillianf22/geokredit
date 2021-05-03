import React, { useState, useEffect } from 'react'
import { Marker } from 'google-maps-react'
import GoogleMapReact from 'google-map-react';
import {Popover, OverlayTrigger} from 'react-bootstrap'

import officePrimary from './icons/office-primary.svg'
import officeWarning from './icons/office-warning.svg'
import asesorActive from './icons/asesor-active.svg'
import asesorInactive from './icons/asesor-inactive.svg'


import ModalCalendar from './ModalCalendar'
import ModalPerfil from './ModalPerfil'
import ModalOficina from './modalOficina'
import InfoWindowCustom from './InfoWindow'
import InfoWindowCustom2 from './InfoWindow2'

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

    const [showModalOficina, setShowModalOficina] = useState(false)
    const handleShowModalOficina = () => setShowModalOficina(true)
    const handleCloseModalOficina = () => setShowModalOficina(false)

    const [showInfo, setShowInfo] = useState({
        showingInfoWindow: false,
        showingInfoWindow2: false,
        activeMarker: {},
        selectedPlace: {},
    })

    const handleClickMarker = (lat, lng) => {
        setMapProps({
            zoom: 14,
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
  </Popover> );

const popoverMap = (
  <Popover id="popover-basic" style = {{position : 'fixed'}}>
    <Popover.Content>
      <InfoWindowCustom2 handleShowModalOficina = {handleShowModalOficina}
            handleShowModalOficina = {handleShowModalOficina}/>
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
          <OverlayTrigger trigger="click" placement="top" overlay={popoverMap}>
          <button className="btn">
            <img src={officePrimary} alt="" style = {{height : '35px', width : '35px'}}/>
          </button>
          </OverlayTrigger>
        </div>

        <div lat = {10.96854} lng = {-74.78132} onClick = {() => handleClickMarker(10.96854, -74.78132)}>
          <OverlayTrigger trigger="click" placement="top" overlay={popoverMap}>
          <button className="btn">
            <img src={officePrimary} alt="" style = {{height : '35px', width : '35px'}}/>
          </button>
          </OverlayTrigger>
        </div>

        <div lat = {4.61971} lng = {-74.09975} className = {mapProps.visibleClients ? '' : 'd-none'}>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <button className="btn">
            <img src={asesorActive} alt="" style = {{height : '35px', width : '35px'}}/>
          </button>
          </OverlayTrigger>
        </div>

        <div lat = {4.65871} lng = {-74.09580} className = {mapProps.visibleClients ? '' : 'd-none'}>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <button className="btn">
            <img src={asesorActive} alt="" style = {{height : '35px', width : '35px'}}/>
          </button>
          </OverlayTrigger>
        </div>

        <div lat = {10.97854} lng = { -74.78232} className = {mapProps.visibleClients ? '' : 'd-none'}>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <button className="btn">
            <img src={asesorInactive} alt="" style = {{height : '35px', width : '35px'}}/>
          </button>
          </OverlayTrigger>
        </div>

        <div lat = {10.98754} lng = {-74.78832} className = {mapProps.visibleClients ? '' : 'd-none'}>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <button className="btn">
            <img src={asesorActive} alt="" style = {{height : '35px', width : '35px'}}/>
          </button>
          </OverlayTrigger>
        </div>


          <ModalCalendar show = {showModalCalendar} handleClose = {handleCloseModalCalendar}/>
          <ModalPerfil show = {showModalPerfil} handleClose = {handleCloseModalPerfil}/>
          <ModalOficina show = {showModalOficina} handleClose = {handleCloseModalOficina}/>
        </GoogleMapReact>
    )
}

export default MapContainer