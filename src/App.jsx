
import Header from './components/Header/Header';
import { useColorSchemeStore } from './zustand/theme';

const App = () => {
  const { currentColorScheme } = useColorSchemeStore();

  return (
    <div className={`${currentColorScheme}`}>
      <Header />
    </div>
  );
};

export default App;