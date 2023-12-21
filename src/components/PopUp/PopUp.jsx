import { Toaster } from 'react-hot-toast';

export const PopUp = () => {
  return (
    <Toaster
      position='bottom-left'
      toastOptions={{
        className: ``,
        duration: 5000,
      }}
    />
  );
};
