import ExpSvg from './Svg/ExpSvg';
import ViewSvg from './Svg/ViewSvg';
import EdSvg from './Svg/EdSvg';
import { useModalStore } from '../../zustand/useModal';
const ExpEdItem = () => {
  const { toggleModal } = useModalStore();
  return (
    <ol className='relative border-s border-gray-200 dark:border-gray-700'>
      <li className='mb-10 ms-6'>
        <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
          <EdSvg />
        </span>
        <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
          IT School GoIT{' '}
          <span className='bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3'>
            Latest
          </span>
        </h3>
        <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>Fullstack Developer | jan 23</time>
        <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
          During the course, I delved into subjects such as HTML, CSS, JavaScript, React, Redux, Node.js, and more. I successfully completed various
          individual and group projects, taking on the role of a developer in group collaborations.
        </p>
        <button
          onClick={toggleModal}
          className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
        >
          <ViewSvg /> View certificate
        </button>
      </li>
      <li className='mb-10 ms-6'>
        <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
          <ExpSvg />
        </span>
        <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
          Biostrategy{' '}
          <span className='bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3'>
            Latest
          </span>
        </h3>
        <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>IT department | oct 2020</time>
        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
          I excel in website programming, specializing in HTML, CSS, JavaScript, and WordPress. My role includes crafting compelling HTML emails,
          overseeing a medical education platform`s functionality and content. In the IT department, I focus on analytics, analyzing data to offer
          valuable insights for informed decision-making.
        </p>
      </li>
      <li className='mb-10 ms-6'>
        <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
          <ExpSvg />
        </span>
        <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>PC-Service</h3>
        <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
          Specialized Service | jan 2019 - mar 2019
        </time>
        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
          I specialize in client communication within enterprises, addressing inquiries and ensuring clear understanding of their needs. Additionally,
          I troubleshoot system and hardware issues, utilizing technical expertise to swiftly resolve challenges.
        </p>
      </li>
      <li className='ms-6'>
        <span className='absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
          <EdSvg />
        </span>
        <h3 className='mb-1 text-lg font-semibold text-gray-900 dark:text-white'>Oles Honchar Dnipro National University</h3>
        <time className='block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>sep 2014 - may 2020</time>
        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>Master`s degree in Computer engineering.</p>
      </li>
    </ol>
  );
};

export default ExpEdItem;
