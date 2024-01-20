import React, { useState } from 'react';
import Img1 from '../images/SoleDivineBanner.jpg';
import Img2 from '../images/modernfall.jpg';
import Img3 from '../images/classicwinter.jpg';
import Img4 from '../images/darkspring.jpg';
import Img5 from '../images/summer.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 



function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carrossel'>
      <Carousel.Item>
      <img src={Img1}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Img2}/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={Img3}/>
        
      </Carousel.Item>
      <Carousel.Item>
      <img src={Img4}/>
       
      </Carousel.Item>
      <Carousel.Item>
        <img src={Img5}/>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;