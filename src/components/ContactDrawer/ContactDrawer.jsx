import { useSideFormStore } from '../../zustand/sideForm';
import FeedbackForm from '../FeedBack/feedbackForm';
import LetterSvg from './Svg/LetterSvg';
import CrossSvg from './Svg/CrossSvg';

const ContactDrawer = () => {
  const { sideForm, toggleSideForm } = useSideFormStore();

  return (
    <div
      id='drawer-body-scrolling'
      className={`fixed top-0 left-0 z-40 h-screen xs:w-screen p-4 overflow-y-auto transition-transform ${
        sideForm ? ' ' : '-translate-x-full'
      } bg-white w-80 dark:bg-gray-800`}
      tabIndex='1'
      aria-labelledby='drawer-contact-label'
    >
      <h5 id='drawer-label' className='inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400'>
        <LetterSvg />
        Contact me
      </h5>
      <button
        type='button'
        data-drawer-target='drawer-body-scrolling'
        data-drawer-show='drawer-body-scrolling'
        data-drawer-body-scrolling='true'
        aria-controls='drawer-body-scrolling'
        className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white'
        onClick={toggleSideForm}
      >
        <CrossSvg />
        <span className='sr-only'>Close menu</span>
      </button>
      <FeedbackForm />
      <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
        <a href='mailto:trifonowden123@gmail.com' className='hover:underline'>
          trifonowden123@gmail.com
        </a>
      </p>
      <p className='text-sm text-gray-500 dark:text-gray-400'>
        <a href='tel:+380997754229' className='hover:underline'>
          +(38) 099-775-4229
        </a>
      </p>
    </div>
  );
};

export default ContactDrawer;
