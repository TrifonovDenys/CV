import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='py-12'>
      <p>
        Hello, I'm Denys, a full-stack developer. I take pleasure in building visually appealing and comprehensive websites, with a particular
        emphasis on React.js. I'm eager to explore new opportunities in the field.
      </p>

      <a
        href='https://github.com/TrifonovDenys'
        target='_blank'
        class='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2'
      >
        <FaGithub size={24} />
      </a>
    </section>
  );
};

export default Hero;
