import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/desktopitems.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="text-dark fs-2 bg-danger bg-opacity-10">
          <h1 className="fs-2 fw-bold">Nifty</h1>
          <p>A place to find all your needs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/groceries.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="fs-2 bg-dark bg-opacity-50">
          <h1 className="fs-2 fw-bold">Fresh</h1>
          <p>Delivery of products right to your doorstep</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imgs/tickets.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="text-black fs-2 bg-light bg-opacity-50">
          <h1 className="fs-2 fw-bold">Entertainment</h1>
          <p>Right at the tip of your finger</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
