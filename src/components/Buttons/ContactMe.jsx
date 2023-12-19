import LetterSvg from '../ContactDrawer/Svg/LetterSvg';
import { useSideFormStore } from '../../zustand/sideForm';
import CrossSvg from '../ContactDrawer/Svg/CrossSvg';

const ContactMe = () => {
  const { sideForm, toggleSideForm } = useSideFormStore();
  return (
    <div className='text-center'>
      <button
        onClick={toggleSideForm}
        type='button'
        data-drawer-target='drawer-body-scrolling'
        data-drawer-show='drawer-body-scrolling'
        data-drawer-body-scrolling='true'
        data-drawer-backdrop='false'
        aria-controls='drawer-body-scrolling'
        className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-400 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
      >
        {!sideForm ? (
          <LetterSvg />
        ) : (
          <span className='me-2.5'>
            <CrossSvg />
          </span>
        )}
        {!sideForm ? 'Contact me' : 'Hide form'}
      </button>
    </div>
  );
};

export default ContactMe;
