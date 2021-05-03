/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState } from "react";



export function ListsWidget1({ className }) {
  const tabs = {
    tab11: "kt_tab_pane__1",
    tab21: "kt_tab_pane__2",
  };
  const [activeTab, setActiveTab] = useState(tabs.tab11);
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Top Oficinas
          </h3>
          <div className="card-toolbar tb-nav bg-secondary rounded mt-0">
            <ul className="nav nav-pills nav-pills-sm nav-dark-75">
              <li className="nav-item">
                <a
                  className={`nav-link py-2 px-4 ${activeTab === tabs.tab11 &&
                    "active"}`}
                  data-toggle="tab"
                  href={`#${tabs.tab11}`}
                  onClick={() => setActiveTab(tabs.tab11)}
                >
                  Alta
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link py-2 px-4 ${activeTab === tabs.tab21 &&
                    "active"}`}
                  data-toggle="tab"
                  href={`#${tabs.tab21}`}
                  onClick={() => setActiveTab(tabs.tab21)}
                >
                  Baja
                </a>
              </li>
            </ul>        
          </div>
        </div>

        {/* Body */}
        <div className="card-body pt-2">
          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-primary mr-5">
              <span className="symbol-label">
                <span className="svg-icon svg-icon-lg svg-icon-primary">
                  <i className="fa fa-building fa-lg text-primary"></i>
                </span>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Oficina Barranquilla
              </a>
              <span className="text-muted lh-1">
                30 Asesores <br/>
                Marcos Barrios GZ
              </span>
            </div>
            <span className="label label-lg label-light-dark label-inline font-weight-bold py-4">
                  97%
            </span>
          </div>

          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-warning mr-5">
              <span className="symbol-label">
                <span className="svg-icon svg-icon-lg svg-icon-warning">
                <i className="fa fa-building fa-lg text-warning"></i>
                </span>
              </span>
            </div>
            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Oficina Bogota
              </a>
              <span className="text-muted lh-1">
                30 Asesores <br/>
                Marcos Barrios GZ
              </span>
            </div>
            <span className="label label-lg label-light-dark label-inline font-weight-bold py-4">
                  97%
            </span>
          </div>
          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-success mr-5">
              <span className="symbol-label">
                <span className="svg-icon svg-icon-lg svg-icon-success">
                <i className="fa fa-building fa-lg text-success"></i>
                </span>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Oficina Medellin
              </a>
              <span className="text-muted lh-1">
                30 Asesores <br/>
                Marcos Barrios GZ
              </span>
                
            </div>
            <span className="label label-lg label-light-dark label-inline font-weight-bold py-4">
                  97%
            </span>
          </div>

          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-danger mr-5">
              <span className="symbol-label">
                <span className="svg-icon svg-icon-lg svg-icon-danger">
                <i className="fa fa-building fa-lg text-danger"></i>
                </span>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Oficina Cali
              </a>
              <span className="text-muted lh-1">
                30 Asesores <br/>
                Marcos Barrios GZ
              </span>
            </div>
            <span className="label label-lg label-light-dark label-inline font-weight-bold py-4">
                  97%
            </span>
          </div>

          <div className="d-flex align-items-center mb-2">
            <div className="symbol symbol-40 symbol-light-info mr-5">
              <span className="symbol-label">
                <span className="svg-icon svg-icon-lg  svg-icon-info">
                <i className="fa fa-building fa-lg text-info"></i>
                </span>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Oficina Pereira
              </a>
              <span className="text-muted lh-1">
                30 Asesores <br/>
                Marcos Barrios GZ
              </span>
            </div>
            <span className="label label-lg label-light-dark label-inline font-weight-bold py-4">
                  97%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
