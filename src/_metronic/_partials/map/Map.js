import React, {useState} from "react";
import {
    Button,
    InputGroup,
    FormControl,
    DropdownButton,
    Dropdown
  } from "react-bootstrap";
import {useHtmlClassService} from "../../layout";
import {Card, CardBody, CardHeader, Notice} from "../controls";

import MapContainer from './MapContainer'
import ModalCalendar from './ModalCalendar'

import './map.css'
export function Map() {
    const tabs = {
        tab1: "kt_tab_pane1",
        tab2: "kt_tab_pane2",
        tab3: "kt_tab_pane3",
      };
    const [activeTab, setActiveTab] = useState(tabs.tab1);
    const [handlerB, setHandlerB] = useState(0)

    return (
        <>
            <div className="card">
                <div className = "card-body">
                    <div className = "row">
                        <div className = "col-md-3">
                        <div className="d-flex align-items-center justify-content-between flex-grow-1">
                            <span className="symbol-label h6 font-weight-bold mb-4 text-muted">
                                <small className="text-left text-primary">Lun 3 de mayo</small>
                                <h2 className="mb-0 lh-1 pb-0 text-dark ">Geoinforme</h2> <br/>
                                <strong className="font-weigth-bold">$150.000.000</strong>-$150.000.000<br/>
                                Creditos colocados hoy <br/>
                            </span>
                        </div>
                        <InputGroup className="mb-5">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon2">
                                    <i className="fa fa-search"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Asesores, Oficinas, etc"
                                aria-label="Asesores, Oficinas, etc"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                            <button className = "btn btn-light-primary btn-block" onClick = {() => setHandlerB(curr => curr+1)}>
                                Gerentes de Zona 
                            </button>
                            <button className = "btn btn-light-primary btn-block" onClick = {() => setHandlerB(curr => curr+1)}>
                                Oficinas
                            </button>
                            <div className="d-flex align-items-center my-5">
                                <span className="bullet bullet-bar bg-primary align-self-stretch"></span>

                                <label className="checkbox checkbox-lg checkbox-light-primary checkbox-single flex-shrink-0 m-0 mx-4">
                                <input type="checkbox" value="1" onChange={() => setHandlerB(curr => curr+1)} />
                                <span></span>
                                </label>

                                <div className="d-flex flex-column flex-grow-1">
                                <a
                                    href="#"
                                    className="text-dark-75 text-hover-primary  font-size-sm font-weight-bold font-size-lg mb-1"
                                >
                                    Oficina Barranquilla
                                </a>
                                <span className="text-muted font-weight-bold lh-1 ">90% de progreso</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center my-5">
                                <span className="bullet bullet-bar bg-warning align-self-stretch"></span>

                                <label className="checkbox checkbox-lg checkbox-light-warning checkbox-single flex-shrink-0 m-0 mx-4">
                                <input type="checkbox" value="1" onChange={() => setHandlerB(curr => curr+1)} />
                                <span></span>
                                </label>

                                <div className="d-flex flex-column flex-grow-1">
                                <a
                                    href="#"
                                    className="text-dark-75 text-hover-primary  font-size-sm font-weight-bold font-size-lg mb-1"
                                >
                                    Oficina Bogota
                                </a>
                                <span className="text-muted font-weight-bold lh-1 ">90% de progreso</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center my-5">
                                <span className="bullet bullet-bar bg-success align-self-stretch"></span>

                                <label className="checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 m-0 mx-4">
                                <input type="checkbox" value="1" onChange={() => setHandlerB(curr => curr+1)} />
                                <span></span>
                                </label>

                                <div className="d-flex flex-column flex-grow-1">
                                <a
                                    href="#"
                                    className="text-dark-75 text-hover-primary  font-size-sm font-weight-bold font-size-lg mb-1"
                                >
                                    Oficina Medellin
                                </a>
                                <span className="text-muted font-weight-bold lh-1 ">90% de progreso</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center my-5">
                                <span className="bullet bullet-bar bg-danger align-self-stretch"></span>

                                <label className="checkbox checkbox-lg checkbox-light-danger checkbox-single flex-shrink-0 m-0 mx-4">
                                <input type="checkbox" value="1" onChange={() => setHandlerB(curr => curr+1)} />
                                <span></span>
                                </label>

                                <div className="d-flex flex-column flex-grow-1">
                                <a
                                    href="#"
                                    className="text-dark-75 text-hover-primary  font-size-sm font-weight-bold font-size-lg mb-1"
                                >
                                    Oficina Cali
                                </a>
                                <span className="text-muted font-weight-bold lh-1 ">90% de progreso</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center my-5">
                                <span className="bullet bullet-bar bg-info align-self-stretch"></span>

                                <label className="checkbox checkbox-lg checkbox-light-info checkbox-single flex-shrink-0 m-0 mx-4">
                                <input type="checkbox" value="1" onChange={() => setHandlerB(curr => curr+1)} />
                                <span></span>
                                </label>

                                <div className="d-flex flex-column flex-grow-1">
                                <a
                                    href="#"
                                    className="text-dark-75 text-hover-primary  font-size-sm font-weight-bold font-size-lg mb-1"
                                >
                                    Oficina Pereira
                                </a>
                                <span className="text-muted font-weight-bold lh-1 ">90% de progreso</span>
                                </div>
                            </div>
                            
                            <button className = "btn btn-light-primary btn-block" onClick = {() => setHandlerB(curr => curr+1)}>
                                Ciudades 
                            </button>
                        </div>
                        <div className = "col-md-9">
                            <div className = "map">
                                <MapContainer executeFunction = {handlerB}/>
                                <div className = "map__card">
                                    <div className="card-toolbar tb-nav nav-map bg-secondary rounded">
                                        <ul className="nav nav-pills nav-pills-sm nav-dark-75">
                                        <li className="nav-item">
                                            <a
                                            className={`nav-link py-1 px-2 ${activeTab === tabs.tab1 &&
                                                "active"}`}
                                            data-toggle="tab"
                                            href={`#${tabs.tab1}`}
                                            onClick={() => setActiveTab(tabs.tab1)}
                                            >
                                            Mes
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                            className={`nav-link py-1 px-2 ${activeTab === tabs.tab2 &&
                                                "active"}`}
                                            data-toggle="tab"
                                            href={`#${tabs.tab2}`}
                                            onClick={() => setActiveTab(tabs.tab2)}
                                            >
                                            Semana
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                            className={`nav-link py-1 px-2 ${activeTab === tabs.tab3 &&
                                                "active"}`}
                                            data-toggle="tab"
                                            href={`#${tabs.tab3}`}
                                            onClick={() => setActiveTab(tabs.tab3)}
                                            >
                                            Dia
                                            </a>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="d-flex align-items-center mb-0 mt-10">
                                        <div className="symbol symbol-50 symbol-light-success mr-5">
                                        <span className="symbol-label">
                                            <span className="svg-icon svg-icon-lg svg-icon-success">
                                            <i className="fas fa-dollar-sign fa-2x text-success"></i>
                                            </span>
                                        </span>
                                        </div>

                                        <div className="d-flex flex-column font-weight-bold w-75">
                                        <a
                                            href="#"
                                            className="text-success text-hover-dark h6 font-weight-bold"
                                        >
                                            Meta de colocación
                                        </a>
                                        <span className="text-muted text-sm">
                                            <b>$80,000,000</b> - $100,700,000 <br/>
                                            <i className="fas fa-clock"></i> 10 dias restantes
                                        </span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column w-100 mr-2">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                        <span className="text-muted mr-2 font-size-sm font-weight-bold">
                                        </span>
                                        <span className="text-muted font-size-sm font-weight-bold">
                                            65%
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
                    </div>
                </div>
            </div>
            {/*Formic off site: https://jaredpalmer.com/formik/docs/overview*/}
        </>
    );
}
