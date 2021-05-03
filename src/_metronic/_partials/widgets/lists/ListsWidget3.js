/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_helpers";


export function ListsWidget3({ className }) {
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
            Top Asesores
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
          <div className="symbol symbol-40 symbol-light-secondary mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")}
                ></SVG>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Alejandro Fernandez <small className="text-dark">E</small>
              </a>
              <span className="text-muted lh-1">
                $10,000,000 <small>Colocados</small> <br/>
                Barranquilla - 56 <small>Visitas</small>
              </span>
            </div>
            <div className="d-flex flex-column w-50 mr-2">
              <div className="d-flex align-items-center justify-content-between mb-2 text-nowrap">
                <span className="text-muted mr-2 font-size-sm">
                  Radicados
                </span>
                <span className="text-dark s font-size-sm font-weight-bold">
                  65% (2)
                </span>
              </div>
              <div className="progress progress-xs w-100">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-10">
          <div className="symbol symbol-40 symbol-light-secondary mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")}
                ></SVG>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Alejandro Fernandez <small className="text-dark">E</small>
              </a>
              <span className="text-muted lh-1">
                $10,000,000 <small>Colocados</small> <br/>
                Barranquilla - 56 <small>Visitas</small>
              </span>
            </div>
            <div className="d-flex flex-column w-50 mr-2">
              <div className="d-flex align-items-center justify-content-between mb-2 text-nowrap">
                <span className="text-muted mr-2 font-size-sm">
                  Radicados
                </span>
                <span className="text-dark s font-size-sm font-weight-bold">
                  65% (2)
                </span>
              </div>
              <div className="progress progress-xs w-100">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-10">
          <div className="symbol symbol-40 symbol-light-secondary mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")}
                ></SVG>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Alejandro Fernandez <small className="text-dark">G</small>
              </a>
              <span className="text-muted lh-1">
                $10,000,000 <small>Colocados</small> <br/>
                Barranquilla - 56 <small>Visitas</small>
              </span>
            </div>
            <div className="d-flex flex-column w-50 mr-2">
              <div className="d-flex align-items-center justify-content-between mb-2 text-nowrap">
                <span className="text-muted mr-2 font-size-sm">
                  Radicados
                </span>
                <span className="text-dark s font-size-sm font-weight-bold">
                  65% (2)
                </span>
              </div>
              <div className="progress progress-xs w-100">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-10">
          <div className="symbol symbol-40 symbol-light-secondary mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")}
                ></SVG>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Alejandro Fernandez <small className="text-dark">G</small>
              </a>
              <span className="text-muted lh-1">
                $10,000,000 <small>Colocados</small> <br/>
                Barranquilla - 56 <small>Visitas</small>
              </span>
            </div>
            <div className="d-flex flex-column w-50 mr-2">
              <div className="d-flex align-items-center justify-content-between mb-2 text-nowrap">
                <span className="text-muted mr-2 font-size-sm">
                  Radicados
                </span>
                <span className="text-dark s font-size-sm font-weight-bold">
                  65% (2)
                </span>
              </div>
              <div className="progress progress-xs w-100">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-10">
          <div className="symbol symbol-40 symbol-light-secondary mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")}
                ></SVG>
              </span>
            </div>

            <div className="d-flex flex-column font-weight-bold w-75">
              <a
                href="#"
                className="text-primary text-hover-dark font-size-lg"
              >
                Alejandro Fernandez <small className="text-dark">J</small>
              </a>
              <span className="text-muted lh-1">
                $10,000,000 <small>Colocados</small> <br/>
                Barranquilla - 56 <small>Visitas</small>
              </span>
            </div>
            <div className="d-flex flex-column w-50 mr-2">
              <div className="d-flex align-items-center justify-content-between mb-2 text-nowrap">
                <span className="text-muted mr-2 font-size-sm">
                  Radicados
                </span>
                <span className="text-dark s font-size-sm font-weight-bold">
                  65% (2)
                </span>
              </div>
              <div className="progress progress-xs w-100">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

