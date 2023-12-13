import img1 from '../../assets/img/Denys Tryfonov_page-0001.jpg';
import img2 from '../../assets/img/Denys Tryfonov_page-0002.jpg';
import img3 from '../../assets/img/Denys Tryfonov_page-0003.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';

const CarouselImg = () => {
  return (
    <Carousel>
      <div>
        <img src={`${img1}`} loading='lazy' />
        <p className='legend'>Page 1</p>
      </div>
      <div>
        <img src={`${img2}`} loading='lazy' />
        <p className='legend'>Page 2</p>
      </div>
      <div>
        <img src={`${img3}`} loading='lazy' />
        <p className='legend'>Page 3</p>
      </div>
    </Carousel>
  );
};
export default CarouselImg;
