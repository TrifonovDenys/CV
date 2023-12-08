import { useState } from 'react';
import { useBearStore } from '../../zustand/zustand';

import FeedbackForm from '../FeedBack/feedbackForm';
const Header = () => {
  const [visible, isVisible] = useState(false);
  const bears = useBearStore((state) => state.bears);
  const handleVisible = () => {
    isVisible(!visible);
  };

  return (
    <>
      <div className='text-center'>
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          type='button'
          data-drawer-target='drawer-contact'
          data-drawer-show='drawer-contact'
          aria-controls='drawer-contact'
          onClick={handleVisible}
        >
          Contact me
        </button>
      </div>

      {
        <div
          id='drawer-contact'
          className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
            visible ? ' ' : '-translate-x-full'
          } bg-white w-80 dark:bg-gray-800`}
          tabIndex='1'
          aria-labelledby='drawer-contact-label'
        >
          <h5 id='drawer-label' className='inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400'>
            <svg className='w-4 h-4 me-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 16'>
              <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
              <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
            </svg>
            Contact me
          </h5>
          <button
            type='button'
            data-drawer-hide='drawer-contact'
            aria-controls='drawer-contact'
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white'
            onClick={handleVisible}
          >
            <svg className='w-3 h-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
            </svg>
            <span className='sr-only'>Close menu</span>
          </button>
          <FeedbackForm />
          <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
            <a href='#' className='hover:underline'>
              trifonowden123@gmail.com
            </a>
          </p>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            <a href='#' className='hover:underline'>
              +(38) 099-775-4229
            </a>
          </p>
        </div>
      }
    </>
  );
};
export default Header;
