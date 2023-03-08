import Carousel from 'react-bootstrap/Carousel';
import CarouselPositionStyle from './Carousel-style';
import ArrowButtonStyle from './Arrow-style';

function ArrowIcon({ direction }) {
  return (
    <>
    <ArrowButtonStyle>
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#030303"/>
      {direction === 'left' ? (
          
        <path d="M32.9999 24L25 32L32.9999 40L34.6866 38.3133L29.566 33.1927H39.8072V30.8072H29.566L34.6866 25.6866L32.9999 24Z" fill="white" />
      ) : (
        <path d="M31.8073 40L39.8072 32L31.8073 24L30.1206 25.6867L35.2412 30.8073H25V33.1928H35.2412L30.1206 38.3134L31.8073 40Z" fill="white" />
      )}
    </svg>
    </ArrowButtonStyle>
    </>
  );
}



function CarouselComponent() {
    return (
      <CarouselPositionStyle>
    <div style={{marginBottom: '20px'}}>
        <h2>My Work</h2>
    </div>
    <Carousel fade  prevIcon={<ArrowIcon direction="left" />}
      nextIcon={<ArrowIcon direction="right" />} indicators={false} >
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
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide4.png"
          alt=" Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide5.png"
          alt="Fiveth slide"
        />
      </Carousel.Item>
    </Carousel>
</CarouselPositionStyle>
  );
}

export default CarouselComponent;