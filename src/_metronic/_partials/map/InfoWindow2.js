import React, { useState } from 'react'

function InfoWindowCustom2({ handleShowModalOficina}) {
	return(
		<div className = "row px-3">
      <div className = "col-md-9">
        <div className="d-flex flex-column font-weight-bold w-75">
            <a
              href="#"
              className="text-primary text-hover-dark font-size-lg font-weight-bold text-nowrap"
            >
              Oficina Barranquilla
            </a>
            <span className="text-muted lh-1 text-nowrap">
              <b>$8,000,000 - $10,000,000</b> <br/>
              Marcos Barrios GZ <br/>
              30 Asesores <br/>
            </span>
          </div>
        </div>
        <div className = "col-md-3">
          <button className = "btn btn-sm btn-light-primary" onClick={handleShowModalOficina}>
            <i className = "fa fa-expand-arrows-alt p-0 text-primary"></i>
          </button>
        </div>
    </div>
		)
}



export default InfoWindowCustom2
