import React from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBFormInline
} from "mdbreact";
import * as ROUTES from '../../constants/routes';
import SignOutItem from '../SignOut';
import { AuthUserContext } from '../Session';

const NavbarPage = () => (
    <div>
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
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