import React, { useState } from 'react'

function InfoWindowCustom({handleShowModalCalendar, handleShowModalPerfil}) {
	return(
		<div className = "row px-3">
              <div className = "col-md-3">
                <button className = "btn btn-sm btn-info" onClick={handleShowModalCalendar}>
                  <i className = "fa fa-calendar"></i>
                </button>
              </div>
              <div className = "col-md-3">
                <button className = "btn btn-sm btn-info" onClick={handleShowModalPerfil}>
                  <i className = "fa fa-user"></i>
                </button>
              </div>
              <div className = "col-md-3">
                <button className = "btn btn-sm btn-info" onClick={() => console.log('Click')}>
                  <i className = "fa fa-route"></i>
                </button>
              </div>
              <div className = "col-md-3">
                <button className = "btn btn-sm btn-info" >
                  <i className = "fa fa-expand-arrows-alt"></i>
                </button>
              </div>
    </div>
		)
}

export default InfoWindowCustom
