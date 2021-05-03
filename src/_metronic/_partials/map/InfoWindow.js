import React, { useState } from 'react'

function InfoWindowCustom({handleShowModalCalendar, handleShowModalResumen, handleShowModalPerfil}) {
	return(
		<div className = "row px-3">
      <div className = "col-md-12 mb-4">
        <div className="d-flex flex-column font-weight-bold w-75">
            <a
              href="#"
              className="text-primary text-hover-dark font-size-lg font-weight-bold text-nowrap"
            >
              Alejandro Fernandez
            </a>
            <span className="text-muted lh-1 text-nowrap">
              <b>40</b> - 50 <small>Visitas</small> <br/>
              $30,000,000 - $600,000,000 <br/>
            </span>
          </div>
        </div>
        <div className = "col-md-3">
          <button className = "btn btn-sm btn-light-primary" onClick={handleShowModalCalendar}>
            <i className = "fa fa-calendar p-0 text-primary"></i>
          </button>
        </div>
        <div className = "col-md-3">
          <button className = "btn btn-sm btn-light-primary" onClick={handleShowModalPerfil}>
            <i className = "fa fa-user p-0 text-primary"></i>
          </button>
        </div>
        <div className = "col-md-3">
          <button className = "btn btn-sm btn-light-primary" onClick={() => console.log('Click')}>
            <i className = "fa fa-route p-0 text-primary"></i>
          </button>
        </div>
        <div className = "col-md-3">
          <button className = "btn btn-sm btn-light-primary" >
            <i className = "fa fa-expand-arrows-alt p-0"></i>
          </button>
        </div>
    </div>
		)
}



export default InfoWindowCustom
