import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutItem from '../SignOut';

const NavbarPage = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
    <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
            <strong className="white-text">Kitchen Plaza</strong>
        </MDBNavbarBrand>
        <MDBNavbarNav left>
            <MDBFormInline waves>
                <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
            </MDBFormInline>
        </MDBNavbarNav>
        <MDBNavbarNav right>
            <MDBNavItem>
                <MDBNavLink to="/">Cart</MDBNavLink>
            </MDBNavItem>
            <SignOutItem></SignOutItem>
        </MDBNavbarNav>
    </MDBNavbar>
);

const NavigationNonAuth = () => (
    <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
            <strong className="white-text">Kitchen Plaza</strong>
        </MDBNavbarBrand>
        <MDBNavbarNav left>
            <MDBFormInline waves>
                <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
            </MDBFormInline>
        </MDBNavbarNav>
        <MDBNavbarNav right>
            <MDBNavItem>
                <MDBNavLink to={ROUTES.SIGN_IN}>Sign In</MDBNavLink>
            </MDBNavItem>
        </MDBNavbarNav>
    </MDBNavbar>
);

export default NavbarPage;