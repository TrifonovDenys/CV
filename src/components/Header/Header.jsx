import ContactDrawer from "../ContactDrawer/ContactDrawer"
import ContactMe from "../Buttons/ContactMe";
import ToggleTheme from "../Buttons/ToggleTheme"
const Header = () => {

  return (
    <>
      <ContactMe/>
      <ToggleTheme/>
      <div className="bg-white dark:bg-gray-800">
  <h1 className="text-gray-900 dark:text-white">Dark mode</h1>
  <p className="text-gray-600 dark:text-gray-300">
    Lorem ipsum...
  </p>
</div>
      <ContactDrawer />
    </>
  );
};

export default Header;
