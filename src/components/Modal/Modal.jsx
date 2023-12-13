import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useModalStore } from '../../zustand/useModal';
import CarouselImg from './Carusel';

export default function MyModal() {
  const { modal, toggleModal } = useModalStore();

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center '>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='h3' className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'>
                    GoIT certificate
                  </Dialog.Title>
                  <CarouselImg />
                  <div className='flex mt-4 justify-between items-center'>
                    <button
                      type='button'
                      className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                      onClick={toggleModal}
                    >
                      Got it, thanks!
                    </button>
                    <kbd
                      onClick={toggleModal}
                      className='cursor-pointer px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500'
                    >
                      Esc
                    </kbd>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
