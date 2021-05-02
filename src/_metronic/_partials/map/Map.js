import React from "react";
import {useHtmlClassService} from "../../layout";
import {Card, CardBody, CardHeader, Notice} from "../controls";

import MapContainer from './MapContainer'
import './map.css'
export function Map() {

    return (
        <>
            <div className="card">
                <div className = "card-body">
                    <div className = "row">
                        <div className = "col-md-3">
                            
                        </div>
                        <div className = "col-md-9">
                            <div className = "map">
                                <MapContainer />
                                <div className = "map__card">
                                    <p className = "font-weight-bold mt-0 mb-2">Some info here</p>
                                    <p className = "text-muted">Some more info here</p>
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
