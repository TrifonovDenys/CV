import markup1 from '../assets/img/projects/markup-home.png';
import markup2 from '../assets/img/projects/markup-portfolio.png';

import img1 from '../assets/img/certificate_page-1.jpg';
import img2 from '../assets/img/certificate_page-2.jpg';
import img3 from '../assets/img/certificate_page-3.jpg';

const projects = [
  {
    title: 'Drink Master',
    image: [markup1, markup2],
    description:
      'Drink Master is the frontend component of a full-stack project developed by a group of junior full-stack developers as their final course project. This platform offers users the ability to authenticate and delve into the exciting world of cocktails. For users of legal drinking age, you can explore and create both traditional and alcoholic cocktails. For those under 18, the platform allows you to discover and create non-alcoholic cocktails and beverages.',
    features: [
      'User-friendly Interface',
      'Explore a World of Drinks',
      'Create Your Own Signature Drink',
      'Comprehensive Drink Directory',
      'Personalized Drink Collection',
      'Favorite Picks',
      'Profile Customization',
      'Secure and Convenient',
    ],
    technologies: ['JavaScript', 'React.js', 'React Router DOM', 'Redux Toolkit', 'Axios', 'Material UI', 'Module CSS'],
    link: 'https://github.com/Zyabrik10/team-project-cocktails-website',
    page: 'https://zyabrik10.github.io/team-project-cocktails-website/welcome',
  },
  {
    title: 'Rest-API',
    image: [markup1, markup2],
    description: 'List of functionalities related to user authentication, profile management, contact operations, and additional features.',
    features: ['user sign up/sign in/logout', 'update users subscription plan and avatar', 'create/update/deletecontacts', 'filtering and more'],
    technologies: ['Node.JS', 'Express', 'MongoDB', 'Monguse', 'Joi', 'Multer'],
    link: 'https://github.com/TrifonovDenys/nodejs-homework-rest-api',
    page: 'zxc',
  },
  {
    title: 'Movie-search',
    image: [markup1, markup2],
    description: '',
    features: [],
    technologies: ['JavaScript', 'React.js', 'React Router DOM', 'Redux Toolkit', 'Axios', 'Module CSS'],
    link: 'https://github.com/TrifonovDenys/goit-react-hw-05-movies',
    page: 'https://trifonovdenys.github.io/goit-react-hw-05-movies/',
  },
  {
    title: 'Phonebook',
    image: [markup1, markup2],
    description: '',
    features: ['user sign up/sign in/logout', 'create/update/delete contacts', 'filtering'],
    technologies: ['JavaScript', 'React.js', 'React Router DOM', 'Redux Toolkit', 'Axios', 'Module CSS'],
    link: 'https://github.com/TrifonovDenys/goit-react-hw-08-phonebook',
    page: 'https://trifonovdenys.github.io/goit-react-hw-08-phonebook/',
  },
  {
    title: 'Bookshelf',
    image: [markup1, markup2],
    description:
      'This project incorporates essential features such as user authentication. The website enables users to browse an extensive collection of books, add them to a shopping cart, and seamlessly transition to external purchase websites. Additionally, a reliable backend has been implemented to ensure real-time book listings and updates.',
    features: ['Categories of Book', 'Favorite Books', 'User Profile'],
    technologies: ['JavaScript', 'Html', 'Css'],
    link: 'https://github.com/Mishanja123/Bookshelf',
    page: 'https://mishanja123.github.io/Bookshelf/',
  },
  {
    title: 'MIMINO',
    image: [markup1, markup2],
    description:
      'Mimino is a platform where you can reserve a table for a specific number of people or book apartments in a hotel, including 2 to 3-bedroom options.',
    features: ['Book A Room', 'Book A Table', 'View The Menu', 'View Location'],
    technologies: ['Html', 'Css'],
    link: 'https://github.com/DanyloTytarenko/mimino-project',
    page: 'https://danylotytarenko.github.io/mimino-project/',
  },
  {
    title: 'Web Studio',
    image: [markup1, markup2],
    description: 'Simple HTML and CSS project.',
    features: ['Information about company', 'Features', 'Team', 'Clients', 'Portfolio Page'],
    technologies: ['Html', 'Css'],
    link: 'https://github.com/TrifonovDenys/goit-markup-hw-07fix',
    page: 'https://trifonovdenys.github.io/goit-markup-hw-07fix/',
  },
];

export const certificatePages = [img1, img2, img3];
export default projects;
