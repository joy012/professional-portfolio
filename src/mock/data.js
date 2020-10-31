import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'JoY - The Web Guy',
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Zahidul Islam Joy',
  subtitle: 'Front End Developer',
  cta: 'Download Resume',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne:
    "I'm a Front End Developer with reasonable knowledge of Back End. I can develope responsive , user interactive site with pixel perfect coding",
  paragraphTwo:
    "I'm Also a student of Bangladesh University of Engineering and Technology (BUET). Currently doing B.Sc. in Industrial and Production Engineering.",
  resume: 'https://drive.google.com/file/d/1XZh02RChE1sY9OxvMjW7tHAedjNXi0vr/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'Creative Agency',
    info:
      'A react-based full-stack agency app where a user can take different services on development and design. User can have service on customized design and also can give review.',
    info2: [
      'React.js',
      'Javascript',
      'ES6',
      'HTML',
      'CSS',
      'Bootstrap',
      'React Router',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
      'Heroku',
    ],
    url: 'https://creative-agency-spa.firebaseapp.com/',
    repo: 'https://github.com/joy012/creative-agency-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Volunteer Network',
    info:
      'A full-stack volunteer origination site where anyone can register as a volunteer and work for the betterment of the society and country. Picking date of starting task is flexible for the volunteer.',
    info2: [
      'React.js',
      'Javascript',
      'ES6',
      'HTML',
      'CSS',
      'Bootstrap',
      'React Router',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
      'Heroku',
    ],
    url: 'https://volunteer-network-spa.firebaseapp.com/',
    repo: 'https://github.com/joy012/volunteer-network-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Travel Guru',
    info:
      'A react-based front-end site of a travel agency page. Anyone can register as a new user and existing user can login with email, facebook or google. User can pic check in and check out date and see available hotels on that date range . Also a react map of destination place is showed',
    info2: [
      'React.js',
      'Javascript',
      'ES6',
      'HTML',
      'CSS',
      'Bootstrap',
      'React Router',
      'React Map',
      'Material-UI',
      'Firebase',
    ],
    url: '',
    repo: 'https://github.com/joy012/travel-guru', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel Free To Contact Me Anytime',
  btn: 'Get In Touch',
  email: 'joy.buet.012@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      iconName: 'facebook',
      url: 'https://web.facebook.com/zahidulislam.joy.56/',
    },
    {
      id: nanoid(),
      iconName: 'linkedin',
      url: 'https://www.linkedin.com/in/zahidulislamjoy/',
    },
    {
      id: nanoid(),
      iconName: 'github',
      url: 'https://github.com/joy012',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
