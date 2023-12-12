import { useSideFormStore } from './zustand/sideForm';
// import Header from './components/Header/Header';
import { useColorSchemeStore } from './zustand/theme';
import SkillsList from './components/Skills/SkillsList';
import ContactDrawer from './components/ContactDrawer/ContactDrawer';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import Experience from './components/Experience/Experience';

const App = () => {
  const { currentColorScheme } = useColorSchemeStore();
  const { sideForm } = useSideFormStore();

  document.body.classList.remove(currentColorScheme === 'dark' ? 'light' : 'dark');
  document.body.classList.add(currentColorScheme);

  return (
    <div className={`bg-white dark:bg-gray-800`}>
      <div className={`max-w-[800px] px-4 ${sideForm ? 'md:mr-auto md:ml-[320px]' : 'md:mx-auto'} 2xl:max-w-[800px] 2xl:mx-auto 2xl:px-4`}>
        <header>
          <Navigation />
        </header>
        <main className='pt-[100px]'>
          <About />
          <SkillsList />
          <Experience />
        </main>

        <ContactDrawer />
      </div>
    </div>
  );
};

export default App;
