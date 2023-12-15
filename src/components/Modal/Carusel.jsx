import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CarouselImg = ({ imgArr }) => {
  return (
    <Carousel showThumbs={false} autoPlay={true} interval={3000} emulateTouch={true} infiniteLoop={true} showStatus={false}>
      {imgArr.map((img, index) => (
        <div key={index}>
          <img src={`${img}`} loading='lazy' alt='crousel image' />
        </div>
      ))}
    </Carousel>
  );
};
export default CarouselImg;
