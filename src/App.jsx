import { useEffect, useState } from 'react';
import Header from './components/Header/Header';

const App = () => {
  const [currentColorScheme, setCurrentColorScheme] = useState(
    () => window.localStorage.getItem('color-scheme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
);

useEffect(() => {
  const handleColorSchemeChange = (event) => {
      const newColorScheme = event.detail;
      setCurrentColorScheme(newColorScheme);
  };
  window.addEventListener('color-scheme-changed', handleColorSchemeChange);

  return () => {
      window.removeEventListener('color-scheme-changed', handleColorSchemeChange);
  };
}, []);

  return (
    <>
    <div className={`${currentColorScheme}`}>
      <Header />
    </div>
    </>
  );
};

export default App;
