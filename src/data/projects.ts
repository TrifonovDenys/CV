import {img} from './imgs'
import  {Project}  from '../types/interfaces'

const projects: Project[] = [
  {
    title: 'Drink Master',
    image: [img.drinks1, img.drinks2, img.drinks3],
    description:
      'Drink Master is the frontend component of a full-stack project developed by a group of junior full-stack developers as their final course project. ',
    features: ['Create Your Own Drink', 'Drink Collection', 'Profile Customization'],
    technologies: ['JavaScript', 'React.js', 'React Router DOM', 'Redux Toolkit', 'Axios', 'Material UI', 'Module CSS'],
    link: 'https://github.com/Zyabrik10/team-project-cocktails-website',
    page: 'https://zyabrik10.github.io/team-project-cocktails-website/welcome',
  },
  {
    title: 'Rest-API',
    image: [img.restAPI],
    description: 'List of functionalities related to user authentication, profile management, contact operations, and additional features.',
    features: ['user sign up/sign in/logout', 'update users subscription plan and avatar', 'create/update/deletecontacts', 'filtering and more'],
    technologies: ['Node.JS', 'Express', 'MongoDB', 'Monguse', 'Joi', 'Multer'],
    link: 'https://github.com/TrifonovDenys/nodejs-homework-rest-api',
    page: '',
  },
  // {
  //   title: 'Movie-search',
  //   image: [markup1, markup2],
  //   description: '',
  //   features: [],
  //   technologies: ['JavaScript', 'React.js', 'React Router DOM', 'Redux Toolkit', 'Axios', 'Module CSS'],
  //   link: 'https://github.com/TrifonovDenys/goit-react-hw-05-movies',
  //   page: 'https://trifonovdenys.github.io/goit-react-hw-05-movies/',
  // },
  // {
  //   title: 'Phonebook',
  //   image: [markup1, markup2],
  //   description: '',
  //   features: ['user sign up/sign in/logout', 'create/update/delete contacts', 'filtering'],
  //   technologies: ['JavaScript', 'React.js', 'React Router DOM', 'Redux Toolkit', 'Axios', 'Module CSS'],
  //   link: 'https://github.com/TrifonovDenys/goit-react-hw-08-phonebook',
  //   page: 'https://trifonovdenys.github.io/goit-react-hw-08-phonebook/',
  // },
  {
    title: 'Bookshelf',
    image: [img.bookshelf1, img.bookshelf2],
    description: 'The website enables users to browse an extensive collection of books, add them to a favorite`s page',
    features: ['Categories of Book', 'Favorite Books', 'User Profile'],
    technologies: ['JavaScript', 'Html', 'Css'],
    link: 'https://github.com/Mishanja123/Bookshelf',
    page: 'https://mishanja123.github.io/Bookshelf/',
  },
  {
    title: 'MIMINO',
    image: [img.mimino1, img.mimino2, img.mimino3],
    description:
      'Mimino is a platform where you can reserve a table for a specific number of people or book apartments in a hotel, including 2 to 3-bedroom options.',
    features: ['Book A Room', 'Book A Table', 'View The Menu', 'View Location'],
    technologies: ['Html', 'Css'],
    link: 'https://github.com/DanyloTytarenko/mimino-project',
    page: 'https://danylotytarenko.github.io/mimino-project/',
  },
  {
    title: 'Web Studio',
    image: [img.markup1, img.markup2],
    description: 'Simple HTML and CSS project.',
    features: ['Information about company', 'Features', 'Team', 'Clients', 'Portfolio Page'],
    technologies: ['Html', 'Css'],
    link: 'https://github.com/TrifonovDenys/goit-markup-hw-07fix',
    page: 'https://trifonovdenys.github.io/goit-markup-hw-07fix/',
  },
];

export default projects;
