import ContactMe from '../Buttons/ContactMe';
import Burger from './Svg/Burger';
import ToggleTheme from '../Buttons/ToggleTheme';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [mobMebu, isMobMenu] = useState(true);

  const toggleMenu = () => {
    isMobMenu(!mobMebu);
  };

  return (
    <nav className='bg-white dark:bg-gray-800 fixed w-screen z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 gap-8 '>
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <ToggleTheme />
          <ContactMe />
          <button
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            onClick={toggleMenu}
          >
            <span className='sr-only'>Open main menu</span>
            <Burger />
          </button>
        </div>
        <div className={`items-center justify-between ${mobMebu && 'hidden'} w-full md:flex md:w-auto md:order-1 `} id='navbar-sticky'>
          <ul className='flex flex-col p-0.5 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700'>
            <li>
              <Link
                activeClass='border-red border'
                to='hero'
                smooth={true}
                duration={500}
                offset={-30}
                spy={true}
                className='cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Hero
              </Link>
            </li>
            <li>
              <Link
                activeClass='border-red border'
                to='about'
                smooth={true}
                duration={500}
                offset={-30}
                spy={true}
                className='cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass='border-red border'
                to='skills'
                smooth={true}
                duration={500}
                offset={-30}
                spy={true}
                className='cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass='border-red border'
                to='project'
                smooth={true}
                duration={500}
                offset={-30}
                spy={true}
                className='cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Project
              </Link>
            </li>

            <li>
              <Link
                activeClass='border-red border'
                to='experience'
                smooth={true}
                duration={500}
                offset={-30}
                spy={true}
                className='cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
