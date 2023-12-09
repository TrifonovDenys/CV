import { useSideFormStore } from '../../zustand/sideForm';

const ContactMe = () =>{
  const {sideForm, toggleSideForm} = useSideFormStore()
  return (
    <div className='text-center'>
        <button
          className='text-white min-w-[120px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          type='button'
          data-drawer-target='drawer-contact'
          data-drawer-show='drawer-contact'
          aria-controls='drawer-contact'
          onClick={toggleSideForm}
        >
          {!sideForm ? "Contact me" : "Hide form"}
        </button>
      </div>
  )
}

export default ContactMe