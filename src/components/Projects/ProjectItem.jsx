import SubTitle from '../Title/SubTitle';
import CarouselImg from '../Modal/Carusel';
import PropTypes, { string } from 'prop-types';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
const ProjectItem = ({ project: { image, title, description, features, technologies, link, page }, index }) => {
  const even = index % 2 === 0;

  const item = useRef(null);
  const isInView = useInView(item, { once: true });

  return (
    <li
      ref={item}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        size: 1,
        transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1)',
      }}
      className={`${even ? 'mr-auto' : 'ml-auto'} w-full mb-4 last:mb-0 size-0.9`}
    >
      <div
        className={`flex overflow-hidden justify-between items-center bg-white border border-gray-200 rounded-lg shadow ${
          even ? '' : 'sm:flex-row-reverse'
        }  hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700`}
      >
        <div className='w-[30%] h-[300px] '>
          {image.length > 0 ? <CarouselImg imgArr={image} showArrows={false} interval={5000} showIndicators={false} /> : <></>}
        </div>
        <div className={`flex w-[69%] flex-col ${even ? 'items-start' : 'items-end'}  justify-between px-6 py-4 leading-normal`}>
          <SubTitle title={title} />
          <p className={`${even ? 'text-left' : 'text-right'} mb-3 font-normal text-gray-700 dark:text-gray-400`}>{description}</p>

          <ul className='flex gap-x-3 flex-wrap dark:text-gray-900 text-white mb-4'>
            {features.map((feature, i) => (
              <li key={i} className={`${even ? 'text-left' : 'text-right'}  font-normal text-gray-700 dark:text-gray-400 capitalize`}>
                {feature}
              </li>
            ))}
          </ul>

          <ul className='flex gap-y-2 gap-x-3 flex-wrap dark:text-gray-900 text-white mb-4'>
            {technologies.map((technologie, i) => (
              <li key={i} className={` ${even ? 'text-left' : 'text-right'} bg-slate-600 px-4 py-1.5 dark:bg-slate-300 rounded-lg font-medium`}>
                {technologie}
              </li>
            ))}
          </ul>

          <div className='flex gap-2'>
            {link && (
              <a
                href={link}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center min-w-[80px] px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-400 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
              >
                Link
              </a>
            )}
            {page && (
              <a
                href={page}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center min-w-[80px] px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-400 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
              >
                Page
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;

// ProjectItem.propTypes = {
//   project: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.arrayOf(string),
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       features: PropTypes.arrayOf(
//         PropTypes.shape({
//           map: PropTypes.array.isRequired,
//         }),
//       ),
//       technologies: PropTypes.arrayOf(
//         PropTypes.shape({
//           map: PropTypes.array.isRequired,
//         }),
//       ),
//       link: PropTypes.string,
//       page: PropTypes.string,
//     }),
//   ).isRequired,
//   index: PropTypes.string.isRequired,
// };

ProjectItem.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.arrayOf(string).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(string).isRequired,
    technologies: PropTypes.arrayOf(string).isRequired,
    link: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
  }).isRequired,
  // index: PropTypes.string.isRequired,
};
