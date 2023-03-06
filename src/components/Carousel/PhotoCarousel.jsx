import Carousel from 'react-bootstrap/Carousel';
import CarouselPositionStyle from './Carousel-style';

function CarouselComponent() {
    return (
      <CarouselPositionStyle>
    <div style={{marginBottom: '20px'}}>
        <h2>My Work</h2>
    </div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/slide1.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide2.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
</CarouselPositionStyle>
  );
}

export default CarouselComponent;