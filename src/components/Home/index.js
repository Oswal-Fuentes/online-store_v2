import React from 'react';
import Carousel from '../Carousel/Carousel'
import { withAuthorization } from '../Session';

const Home = () => (
  <div>
    <Carousel></Carousel>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);