import certIt1 from '../assets/img/certificate_page-1.jpg';
import certIt2 from '../assets/img/certificate_page-2.jpg';
import certIt3 from '../assets/img/certificate_page-3.jpg';

import certEng1 from '../assets/img/green-forest_1.png';
import certEng2 from '../assets/img/green-forest_1.png';

const workEd = [
  {
    title: 'Green Forest',
    period: 'Intermediate/B1 English Course | feb 24',
    description: 'St',
    status: true,
    work: false,
    aditionBtn: true,
    sertificate: [certEng1, certEng2],
  },
  {
    title: 'IT School GoIT',
    period: 'Fullstack Developer | jan 23',
    description:
      'During the course, I delved into subjects such as HTML, CSS, JavaScript, React, Redux, Node.js, and more. I successfully completed various individual and group projects, taking on the role of a developer in group collaborations.',
    status: true,
    work: false,
    aditionBtn: true,
    sertificate: [certIt1, certIt2, certIt3],
  },
  {
    title: 'Biostrategy',
    period: 'IT department | oct 2020',
    description:
      'I excel in website programming, specializing in HTML, CSS, JavaScript, and WordPress. My role includes crafting compelling HTML emails, overseeing a medical education platform`s functionality and content. In the IT department, I focus on analytics, analyzing data to offer valuable insights for informed decision-making.',
    status: true,
    work: true,
    aditionBtn: false,
  },
  {
    title: 'PC-Service',
    period: 'Specialized Service | jan 2019 - mar 2019',
    description:
      'I specialize in client communication within enterprises, addressing inquiries and ensuring clear understanding of their needs. Additionally, I troubleshoot system and hardware issues, utilizing technical expertise to swiftly resolve challenges.',
    status: false,
    work: true,
    aditionBtn: false,
  },
  {
    title: 'Oles Honchar Dnipro National University',
    period: 'sep 2014 - may 2020',
    description: 'Master`s degree in Computer engineering.',
    status: false,
    work: false,
    aditionBtn: false,
  },
];

export default workEd;
