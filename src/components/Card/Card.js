import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

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
                        <MDBBtn href="#">Buy</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }
}

export default Card;