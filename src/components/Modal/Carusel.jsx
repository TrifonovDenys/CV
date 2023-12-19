import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';

const CarouselImg = ({ imgArr, showArrows = true, interval = 3000, showIndicators = true }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      interval={interval}
      emulateTouch={true}
      infiniteLoop={true}
      showStatus={false}
      showArrows={showArrows}
      showIndicators={showIndicators}
    >
      {imgArr.map((img, index) => (
        <div key={index}>
          <img src={`${img}`} loading='lazy' alt={img} />
        </div>
      ))}
    </Carousel>
  );
};
export default CarouselImg;

CarouselImg.propTypes = {
  imgArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  showArrows: PropTypes.bool,
  interval: PropTypes.number,
  showIndicators: PropTypes.bool,
};
