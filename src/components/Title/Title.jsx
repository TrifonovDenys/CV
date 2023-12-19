import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Title = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(-100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.6s',
      }}
    >
      <h2 className='text-gray-900 dark:text-white mb-4 text-center text-3xl font-medium capitalize'>{title}</h2>
    </div>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
