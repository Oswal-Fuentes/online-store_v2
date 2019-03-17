import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

class NavbarPage extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
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
    }
}

export default NavbarPage;