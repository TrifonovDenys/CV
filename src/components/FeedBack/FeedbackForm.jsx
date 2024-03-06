import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const FeedbackForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = 'service_6n7kmkh';
    const templateId = 'template_4m7qjad';
    const publicKey = 'We0uDnYjPf5iEk5Tr';

    // const templateParams = {
    //   email_from: email,
    //   message_try: message,
    // };
    console.dir(form.current);
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setEmail('');
        setMessage('');
        toast.success('Message send successfully!');
      },
      (error) => {
        console.log(error.text);
        toast.error('Try later please!');
      },
    );
  };

  return (
    <form ref={form} className='mb-6' onSubmit={sendEmail}>
      <div className='mb-6'>
        <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Your email
        </label>
        <input
          type='email'
          id='email'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='name@company.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          Your message
        </label>
        <textarea
          id='message'
          rows='4'
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Your message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block'
      >
        Send message
      </button>
    </form>
  );
};

export default FeedbackForm;
