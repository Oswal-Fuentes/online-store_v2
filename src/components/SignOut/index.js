import React from 'react';
import { MDBNavItem, MDBNavLink } from "mdbreact";
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <MDBNavItem>
    <MDBNavLink to="/" onClick={firebase.doSignOut}>Sign Out</MDBNavLink>
  </MDBNavItem>
);

/*
function signout_alert() {
  alert("You're signed out now")
}
*/

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