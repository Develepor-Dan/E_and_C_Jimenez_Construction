// Hero.jsx
import React, {useState} from 'react';
import LazyLoad from 'react-lazy-load';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Porch from '../assets/Porch.png'
import HouseFraming from '../assets/HouseFraming.png'

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Carousel Items
    const carouselItems = [
        {image: Porch,
        caption: 'Porch',},
        {image: HouseFraming,
        caption: 'Residential Framing,'},
    ];

return(
    <div id='Hero' className='pb-5'>
<Carousel fade='true' activeIndex={activeIndex} onSelect={setActiveIndex} className='d-flex img-fluid'>
    {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
        {/* Lazy load images */}
        <LazyLoad >
          <Image
            className="d-block w-100"
            src={item.image}
            alt={`Slide ${index}`}
            fluid
          />
        </LazyLoad>
        <Carousel.Caption>
          <h3>{item.caption}</h3>
          {/* Add caption content */}
        </Carousel.Caption>
      </Carousel.Item>
    ))}
</Carousel>
</div>




);
}

export default Hero;



// Slide Layout
/* <Carousel.Item interval={4000}>
<img
  className="d-flex w-100"
  src=""
  alt=""
/>
<Carousel.Caption>
  <h3>Slide label</h3>
  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item> */