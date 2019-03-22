import React, { Component } from 'react';
import Carousel from '../Carousel/Carousel'
import Card from '../Card/Card'
import { withAuthorization } from '../Session';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      item: [
        {
          id: 1,
          pic: "https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2F1.jpg?alt=media&token=79718b73-2838-4d17-a8d7-21b2ba765f1b",
          name: "Kitchen Set 1",
          price: "$299.99",
          description: "Complete Kitchen Set"
        },
        {
          id: 2,
          pic: "https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2F2.jpg?alt=media&token=46f9d49b-9e84-4b4d-8603-7ad23eed2e4c",
          name: "Kitchen Set 2",
          price: "$299.99",
          description: "Complete Kitchen Set"
        },
        {
          id: 3,
          pic: "https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2F3.jpg?alt=media&token=bd49fabb-9792-4268-b476-6409c6fc18a1",
          name: "Kitchen Set 3",
          price: "$299.99",
          description: "Complete Kitchen Set"
        },
        {
          id: 4,
          pic: "https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2F4.jpg?alt=media&token=5beae5a4-6df0-47cc-bcab-c8a0e2ec9256",
          name: "Kitchen Set 4",
          price: "$299.99",
          description: "Complete Kitchen Set"
        },
        {
          id: 5,
          pic: "https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2F5.jpg?alt=media&token=5511f3d3-d16c-41f3-9872-5625870a0eb7",
          name: "Kitchen Set 5",
          price: "$299.99",
          description: "Complete Kitchen Set"
        },
        {
          id: 6,
          pic: "https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2F6.jpg?alt=media&token=d91ba484-5378-4f91-9272-f26a58a2f892",
          name: "Kitchen Set 6",
          price: "$299.99",
          description: "Complete Kitchen Set"
        },
        {
          id: 7,
          pic: "https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2F7.jpg?alt=media&token=f23f8d7b-999c-4afa-a7ee-d534105d856a",
          name: "Kitchen Set 7",
          price: "$299.99",
          description: "Complete Kitchen Set"
        },
        {
          id: 8,
          pic: "https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2F8.jpg?alt=media&token=0dd03b60-bf29-419b-a499-959f806f3b02",
          name: "Kitchen Set 8",
          price: "$299.99",
          description: "Complete Kitchen Set"
        },
        {
          id: 9,
          pic: "https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2F9.jpg?alt=media&token=97dcac53-541a-406b-81f8-bbadbdbaf140",
          name: "Kitchen Set 9",
          price: "$299.99",
          description: "Complete Kitchen Set"
        },
        {
          id: 10,
          pic: "https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2F10.jpg?alt=media&token=0ab23b74-ff0a-4665-89f7-f2c7f71dec6e",
          name: "Kitchen Set 10",
          price: "$299.99",
          description: "Complete Kitchen Set"
        },
        {
          id: 11,
          pic: "https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2F11.jpg?alt=media&token=184b7606-b70c-457f-aea5-44aa1f7fe1fd",
          name: "Kitchen Set 11",
          price: "$299.99",
          description: "Complete Kitchen Set"
        },
        {
          id: 12,
          pic: "https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2F12.jpg?alt=media&token=2e1d0188-53c3-48c1-811a-cad0b6f66535",
          name: "Kitchen Set 12",
          price: "$299.99",
          description: "Complete Kitchen Set"
        },
      ],
    }
  }

  removeItem(id) {
    alert("Thanks for your purchase!")
    this.setState({ item: this.state.item.filter(item => item.id !== id) });
  }

  render() {
    let items = this.state.item.map(item => {
      return (
        <MDBCol sm="4">
          <Card key={item.id} removeItem={this.removeItem.bind(this)} item={item} />
          <br />
        </MDBCol>
      )
    })
    return (
      <div>
        <Carousel />
        <br />
        <MDBContainer>
          <MDBRow>
            {items}
          </MDBRow>
        </MDBContainer>

      </div>
    )
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);