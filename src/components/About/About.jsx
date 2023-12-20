import { useInView } from 'framer-motion';
import Title from '../Title/Title';
import { useRef } from 'react';

const About = () => {
  const item = useRef(null);
  const isInView = useInView(item, { once: true });
  return (
    <section className='py-12'>
      <Title title={'about'} />
      <div
        ref={item}
        style={{
          transform: isInView ? 'none' : 'translateY(100px)',
          opacity: isInView ? 1 : 0,
          size: 1,
          transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) `,
        }}
      >
        <p className='text-gray-800 dark:text-gray-200 text-md mb-2 text-base font-normal'>
          I am a full-stack Developer with a passion for creating interactive and modern web applications. I have knowledge of HTML, CSS and
          JavaScript, as well as experience React. My goal is to constantly improve myself in the field of web development and create attractive user
          interfaces. I strive to collaborate in a friendly team where I can contribute and learn from experienced developers. Ready to actively take
          on interesting projects and benefit the development team.
        </p>
        <p className='text-gray-800 dark:text-gray-200 text-md'>
          Currently, I am actively seeking a full-time junior developer position where I can apply my skills to tangible projects and continue to
          advance in my professional growth.
        </p>
      </div>
    </section>
  );
};

export default About;
