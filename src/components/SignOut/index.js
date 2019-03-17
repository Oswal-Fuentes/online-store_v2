import React from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <MDBNavItem>
    <MDBNavLink to="/" onClick={firebase.doSignOut}>Sign Out</MDBNavLink>
  </MDBNavItem>
);

export default withFirebase(SignOutButton);

/*
import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
*/