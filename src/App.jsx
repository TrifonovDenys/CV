import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import SkillsList from './components/Skills/SkillsList';
import Projects from './components/Projects/Projects';
import ExperienceAndEducation from './components/ExperienceAndEducation/ExperienceAndEducation';
import ToggleTheme from './components/Buttons/ToggleTheme';
import ContactDrawer from './components/ContactDrawer/ContactDrawer';
import ScrollUp from './components/ScrollUp/ScrollUp';
import MyModal from './components/Modal/Modal';

import { useSideFormStore } from './zustand/sideForm';
import { useColorSchemeStore } from './zustand/theme';
import { useModalStore } from './zustand/useModal';
import { Element } from 'react-scroll';
const App = () => {
  const { currentColorScheme } = useColorSchemeStore();
  const { sideForm } = useSideFormStore();
  const { modal } = useModalStore();
  document.body.classList.remove(currentColorScheme === 'dark' ? 'light' : 'dark');
  document.body.classList.add(currentColorScheme);

  return (
    <div className={`bg-white dark:bg-gray-800`}>
      <div className={`max-w-[800px] px-4 ${sideForm ? 'md:mr-auto md:ml-[320px]' : 'md:mx-auto'} 2xl:max-w-[800px] 2xl:mx-auto 2xl:px-4`}>
        <header>{!modal && <Navigation />}</header>
        <main className='pt-[100px]'>
          <Element name='hero'>
            <Hero />
          </Element>
          <Element name='about'>
            <About />
          </Element>
          <Element name='skills'>
            <SkillsList />
          </Element>
          <Element name='project'>
            <Projects />
          </Element>
          <Element name='experience'>
            <ExperienceAndEducation />
          </Element>
          <MyModal />
        </main>
        <ContactDrawer />
      </div>
      <ToggleTheme />
      <ScrollUp />
    </div>
  );
};

export default App;
