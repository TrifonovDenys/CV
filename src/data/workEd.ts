import {img} from './imgs'

import  {WorkEd}  from '../types/interfaces'

// const certIt1Image: HTMLImageElement = new Image();
// certIt1Image.src = img.certIt1;

// console.log(certIt1Image);
// const certIt2Image: HTMLImageElement = new Image();
// certIt2Image.src = img.certIt2;

// const certIt3Image: HTMLImageElement = new Image();
// certIt3Image.src = img.certIt3;

// const certEng1Image: HTMLImageElement = new Image();
// certEng1Image.src = img.certEng1;

// const certEng2Image: HTMLImageElement = new Image();
// certEng2Image.src = img.certEng2;

const workEd: WorkEd[] = [
  {
    title: 'Green Forest',
    period: 'Intermediate/B1 English Course | feb 24',
    description: 'Learn English till proficiency in all four language skills (reading, writing, speaking, and listening) is achieved.',
    status: true,
    work: false,
    sertificate: [img.certEng1, img.certEng2],
  },
  {
    title: 'IT School GoIT',
    period: 'Fullstack Developer | jan 23',
    description:
      'During the course, I delved into subjects such as HTML, CSS, JavaScript, React, Redux, Node.js, and more. I successfully completed various individual and group projects, taking on the role of a developer in group collaborations.',
    status: true,
    work: false,
    sertificate: [img.certIt1, img.certIt2, img.certIt3],
  },
  {
    title: 'Biostrategy',
    period: 'IT department | oct 2020',
    description:
      'I excel in website programming, specializing in HTML, CSS, JavaScript, and WordPress. My role includes crafting compelling HTML emails, overseeing a medical education platform`s functionality and content. In the IT department, I focus on analytics, analyzing data to offer valuable insights for informed decision-making.',
    status: true,
    work: true,
    sertificate: false,
  },
  {
    title: 'PC-Service',
    period: 'Specialized Service | jan 2019 - mar 2019',
    description:
      'I specialize in client communication within enterprises, addressing inquiries and ensuring clear understanding of their needs. Additionally, I troubleshoot system and hardware issues, utilizing technical expertise to swiftly resolve challenges.',
    status: false,
    work: true,
    sertificate: false,
  },
  {
    title: 'Oles Honchar Dnipro National University',
    period: 'sep 2014 - may 2020',
    description: 'Master`s degree in Computer engineering.',
    status: false,
    work: false,
    sertificate: false,
  },
];

export default workEd;
