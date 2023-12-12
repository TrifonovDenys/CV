import SkillsList from '../Skills/SkillsList';
import ContactDrawer from '../ContactDrawer/ContactDrawer';
import About from '../About/About';
import Navigation from '../Navigation/Navigation';
import Experience from '../Experience/Experience';
const Header = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className='pt-[100px]'>
        <About />
        <SkillsList />
        <Experience />
      </main>

      <ContactDrawer />
    </>
  );
};

export default Header;
