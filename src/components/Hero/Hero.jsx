import { FaGithub, FaTelegramPlane, FaLinkedin } from 'react-icons/fa';
import img from '../../assets/img/photo_2022-09-27_15-59-45.jpg';
import cv from "../../assets/img/CV.pdf"
const Hero = () => {
  return (
    <section className='py-12'>
      <div className='flex flex-col justify-center items-center mb-4'>
        <div className=' overfow-hidden w-[200px] mb-4'><img className='rounded-full' src={img} alt='' /></div>
        <p className='text-lg text-center font-medium text-gray-700 dark:text-gray-200'>
          Hello, I'm Denys, a full-stack developer. I take pleasure in building visually appealing and comprehensive websites, with a particular
          emphasis on React.js. I'm eager to explore new opportunities in the field.
        </p>
      </div>

      <div className='flex gap-4 justify-center'>
        <ul className='flex gap-4'>
          <li>
            {' '}
            <a
              href='https://github.com/TrifonovDenys'
              target='_blank'
              className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 '
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a
              href='https://t.me/tryfonovdenys'
              target='_blank'
              className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 '
            >
              <FaTelegramPlane size={20} />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/TrifonovDenys'
              target='_blank'
              className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 '
            >
              <FaLinkedin size={20} />
            </a>
          </li>
        </ul>
        <a
          href={cv} download={cv}
          className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
        >
          <svg className='w-3.5 h-3.5 me-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z' />
            <path d='M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z' />
          </svg>{' '}
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
