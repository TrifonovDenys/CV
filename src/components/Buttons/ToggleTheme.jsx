import { useColorSchemeStore } from '../../zustand/theme';

const ToggleTheme = () => {
  const { currentColorScheme, toggleColorScheme } = useColorSchemeStore();

  return (
    <div
      className={`md:!fixed md:bottom-5 md:right-3.5 flex gap-4 rotate-90 border-gray-400 border px-2 py-2 after:-translate-x-[150%] after:translate-y-[200%] md:after:-translate-x-[150%] md:after:translate-y-[150%] after:content-[""] after:absolute after:bg-white after:border-gray-400 after:border after:w-1 after:h-1 after:transition-all before:translate-x-[850%] before:translate-y-[200%] md:before:translate-x-[850%] md:before:translate-y-[150%] before:content-[""] before:absolute before:bg-white before:border-gray-400 before:border before:w-1 before:h-1 before:transition-all`}
    >
      <label className='relative inline-flex items-center cursor-pointer '>
        <input
          onChange={() => toggleColorScheme()}
          checked={currentColorScheme === 'dark'}
          id='color-schema'
          type='checkbox'
          value=''
          className='sr-only peer'
        />
        {/* <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
        <div className="flex items-center w-8 h-4 bg-gray-300 peer-focus:outline-none dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray-500 after:content-[''] after:absolute after:bg-white after:border-gray-400 after:border after:w-4 after:h-4 after:transition-all dark:border-gray-700  peer-checked:bg-gray-500"></div>
      </label>
    </div>
  );
};

export default ToggleTheme;
