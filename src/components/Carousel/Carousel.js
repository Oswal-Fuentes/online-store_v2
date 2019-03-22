import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
    "mdbreact";

const CarouselPage = () => {
    return (
        <MDBContainer>
            <h4 className="mt-5 mb-2" align="center"></h4>
            <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2Fc1.jpg?alt=media&token=d6cf8980-2fa7-48ef-85cf-318d250cc3b2" alt="First slide" />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive"></h3>
                            <p></p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2Fc2.jpg?alt=media&token=273023e3-e7a1-41cc-af04-3d1e9aa75ed8" alt="Second slide" />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive"></h3>
                            <p></p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2Fc3.jpg?alt=media&token=210620d2-0db9-4e73-94dd-4cf949e3a8ca" alt="Third slide" />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive"></h3>
                            <p></p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <img className="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/online-store-ae640.appspot.com/o/furniture-pics%2Fc4.jpg?alt=media&token=ae6a89dc-dfc6-454e-b848-84d35573dc93" alt="Mattonit's item" />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive"></h3>
                            <p></p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
}

export default CarouselPage;