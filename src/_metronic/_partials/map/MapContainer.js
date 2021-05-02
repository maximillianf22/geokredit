import React, { useState } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline} from 'google-maps-react'
import company from './icons/company.svg'
import client from './icons/client.svg'


import ModalCalendar from './ModalCalendar'
import ModalPerfil from './ModalPerfil'
import InfoWindowCustom from './InfoWindow'

//https://www.npmjs.com/package/google-maps-react DOCUMENTACIÓN DE LA LIBRERÍA

function MapContainer(props) {
    const routesCoords = [
    {lat: 4.60971, lng: -74.08175},
    {lat: 10.96854, lng: -74.78132},
  ];
    const [mapProps, setMapProps] = useState({
        zoom: 5,
        center: { lat: 4.570868, lng: -74.297333 },
        visibleClients: false,
    })
    const [showModalCalendar, setShowModalCalendar] = useState(false)
    const handleShowModalCalendar =  () => setShowModalCalendar(true)
    const handleCloseModalCalendar =  () => setShowModalCalendar(false)

    const [showModalPerfil, setShowModalPerfil] = useState(false)
    const handleShowModalPerfil =  () => setShowModalPerfil(true)
    const handleCloseModalPerfil =  () => setShowModalPerfil(false)

    const [showInfo, setShowInfo] = useState({
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    })

    const handleClickMarker = (props, marker, e) => {
        setMapProps({
            zoom: 12,
            center: { lat: marker.position.lat(), lng: marker.position.lng() },
            visibleClients: true
        })
    }
    const handleClickClient = (props, marker, e) => {
        setShowInfo({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }
    const handleClickMap = (props, marker, e) => {
      setShowInfo({
            selectedPlace: {},
            activeMarker: {},
            showingInfoWindow: false
        })
    }
    const mapStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '20px'
    };
    return (
        <Map
          google={props.google}
          zoom={mapProps.zoom}
          style={mapStyles}
          initialCenter={mapProps.center}
          center={mapProps.center}
          onClick = {handleClickMap}
        >
        <Polyline
          path={routesCoords}
          strokeColor="#000"
          strokeOpacity={0.5}
          strokeWeight={3} />
         <Marker
          title={'Bogotá'}
          onClick = {handleClickMarker}
          position={{lat: 4.60971, lng: -74.08175}}
          icon={{
                  url: company,
                  anchor: new props.google.maps.Point(32, 32),
                scaledSize: new props.google.maps.Size(40,40)
          }} 
          />
          <Marker
          title={'Barranquilla'}
          onClick = {handleClickMarker}
          position={{lat: 10.96854, lng: -74.78132}}
          icon={{
                  url: company,
                  anchor: new props.google.maps.Point(32, 32),
                scaledSize: new props.google.maps.Size(40,40)
          }} />


          <Marker
          title={'Cliente'}
          onClick = {handleClickClient}
          position={{lat: 4.60971, lng: -74.09975}}
          visible = {mapProps.visibleClients}
          icon={{
                  url: client,
                  anchor: new props.google.maps.Point(32, 32),
                scaledSize: new props.google.maps.Size(32,32)
          }} 
          >
          </Marker>

          <Marker
          title={'Cliente'}
          onClick = {handleClickClient}
          position={{lat: 4.64871, lng: -74.09580}}
          visible = {mapProps.visibleClients}
          icon={{
                  url: client,
                  anchor: new props.google.maps.Point(32, 32),
                scaledSize: new props.google.maps.Size(32,32)
          }} 
          >
          </Marker>

          <Marker
          title={'Cliente'}
          onClick = {handleClickClient}
          position={{lat: 4.65871, lng: -74.0580}}
          visible = {mapProps.visibleClients}
          icon={{
                  url: client,
                  anchor: new props.google.maps.Point(32, 32),
                scaledSize: new props.google.maps.Size(32,32)
          }} 
          >
          </Marker>

          <Marker
          title={'Cliente'}
          onClick = {handleClickClient}
          position={{lat: 10.97854, lng: -74.78232}}
          visible = {mapProps.visibleClients}
          icon={{
                  url: client,
                  anchor: new props.google.maps.Point(32, 32),
                scaledSize: new props.google.maps.Size(32,32)
          }} />
           <Marker
          title={'Cliente'}
          onClick = {handleClickClient}
          position={{lat: 10.98654, lng: -74.78832}}
          visible = {mapProps.visibleClients}
          icon={{
                  url: client,
                  anchor: new props.google.maps.Point(32, 32),
                scaledSize: new props.google.maps.Size(32,32)
          }} />

          <Marker
          title={'Cliente'}
          onClick = {handleClickClient}
          position={{lat: 10.98154, lng: -74.78932}}
          visible = {mapProps.visibleClients}
          icon={{
                  url: client,
                  anchor: new props.google.maps.Point(32, 32),
                scaledSize: new props.google.maps.Size(32,32)
          }} />
           <InfoWindow
            visible={showInfo.showingInfoWindow}
            className = "infoWindow"
            marker={showInfo.activeMarker}
            >
            <InfoWindowCustom handleShowModalCalendar = {handleShowModalCalendar}
            handleShowModalPerfil = {handleShowModalPerfil}/>
          </InfoWindow>
          <ModalCalendar show = {showModalCalendar} handleClose = {handleCloseModalCalendar}/>
          <ModalPerfil show = {showModalPerfil} handleClose = {handleCloseModalPerfil}/>
        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA01EIKVqGmy9BAhcDyT-nsJsLtBUbU_gA'
})(MapContainer);