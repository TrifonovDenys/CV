import PropTypes from 'prop-types';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillItem = ({ skill, wait }) => {
  const item = useRef(null);
  const isInView = useInView(item, { once: true });

  return (
    <li
      ref={item}
      className='bg-slate-600 px-4 py-1.5 dark:bg-slate-300 rounded-lg font-medium'
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        size: 1,
        transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${wait}s`,
      }}
    >
      <p className=''>{skill}</p>
    </li>
  );
};

export default SkillItem;

SkillItem.propTypes = {
  skill: PropTypes.string.isRequired,
  wait: PropTypes.number.isRequired,
};
