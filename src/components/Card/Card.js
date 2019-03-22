import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { withAuthorization } from '../Session';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { id, pic, name, price, description } = this.props.item;
        return (
            <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="img-fluid" src={pic} waves />
                    <MDBCardBody>
                        <MDBCardTitle>{name}</MDBCardTitle>
                        <MDBCardText>
                            {description}
                            <br></br>
                            {price}</MDBCardText>
                        <MDBBtn onClick={() => this.props.removeItem(id)}>Buy</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }
}

// onClick={() => this.props.removeItem(id)}

export default Card;