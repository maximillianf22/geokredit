import React, {useMemo} from "react";
import {useHtmlClassService} from "../../layout";
import {Card, CardBody, CardHeader, Notice} from "../controls";


export function Builder() {

    return (
        <>
            <Notice svg="/media/svg/icons/Tools/Compass.svg">
                <p>
                    Este es tu mapa jisus
                </p>
            </Notice>
            {/*Formic off site: https://jaredpalmer.com/formik/docs/overview*/}
        </>
    );
}
