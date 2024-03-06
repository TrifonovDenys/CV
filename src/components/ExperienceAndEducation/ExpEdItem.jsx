import ExpSvg from './Svg/ExpSvg';
import ViewSvg from './Svg/ViewSvg';
import EdSvg from './Svg/EdSvg';
import PropTypes from 'prop-types';
import { useModalStore } from '../../zustand/useModal';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const ExpEdItem = ({ item }) => {
  const { title, period, description, status, work, aditionBtn, sertificate } = item;
  const { openModal } = useModalStore();

  const item1 = useRef(null);
  const isInView = useInView(item1);

  return (
    <li className='mb-10 ms-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
        {work ? <ExpSvg /> : <EdSvg />}
      </span>
      <div
        ref={item1}
        style={{
          transform: isInView ? 'none' : 'translateY(100px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1)',
        }}
      >
        <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
          {title}{' '}
          {status && (
            <span className='bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3'>
              Recent
            </span>
          )}
        </h3>
        <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>{period}</time>
        <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>{description}</p>
        {aditionBtn && (
          <button
            onClick={() => openModal(title, sertificate)}
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
          >
            <ViewSvg /> View certificate
          </button>
        )}
      </div>
    </li>
  );
};

export default ExpEdItem;

ExpEdItem.propTypes = {
  item: PropTypes.object.isRequired,
  // PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   period: PropTypes.string.isRequired,
  //   description: PropTypes.string.isRequired,
  //   status: PropTypes.bool.isRequired,
  //   work: PropTypes.bool.isRequired,
  //   aditionBtn: PropTypes.bool.isRequired,
  // }),
  // ().isRequired,
};
