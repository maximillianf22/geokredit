/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {Link} from "react-router-dom";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        {/* begin::Logo */}
        <Link to="" className="brand-logo my-auto">
          <img alt="logo" className="brand-logo" src="https://kredit.net.co/wp-content/uploads/2018/07/logo_kredit.png"/>
        </Link>
        {/* end::Logo */}

        {/*begin::Header Nav*/}
        <ul className={`menu-nav ml-5 ${layoutProps.ulClasses}`}>
            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel ${getMenuItemActive('/dashboard')}`}>
                <NavLink className="menu-link" to="/dashboard">
                    <span className="menu-text">Dashboard</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel`}>
                <NavLink className="menu-link" to="/gerentes">
                    <span className="menu-text">Gerentes</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel`}>
                <NavLink className="menu-link" to="/asesores">
                    <span className="menu-text">Asesores</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel`}>
                <NavLink className="menu-link" to="/oficinas">
                    <span className="menu-text">Oficina</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel`}>
                <NavLink className="menu-link" to="/creditos">
                    <span className="menu-text">Creditos</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}

            {/*begin::1 Level*/}
            <li className={`menu-item menu-item-rel`}>
                <NavLink className="menu-link" to="/metas">
                    <span className="menu-text">Metas</span>
                    {layoutProps.rootArrowEnabled && (<i className="menu-arrow" />)}
                </NavLink>
            </li>
            {/*end::1 Level*/}

        </ul>
        {/*end::Header Nav*/}
    </div>;
}
