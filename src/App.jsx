import SkillsList from './components/Skills/SkillsList';
import ContactDrawer from './components/ContactDrawer/ContactDrawer';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import ExperienceAndEducation from './components/ExperienceAndEducation/ExperienceAndEducation';
import MyModal from './components/Modal/Modal';
import Hero from './components/Hero/Hero';

import { useSideFormStore } from './zustand/sideForm';
import { useColorSchemeStore } from './zustand/theme';
import { useModalStore } from './zustand/useModal';
import ScrollUp from './components/ScrollUp/ScrollUp';
import ToggleTheme from './components/Buttons/ToggleTheme';
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
          <Hero />
          <About />
          <SkillsList />
          <ExperienceAndEducation />
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
