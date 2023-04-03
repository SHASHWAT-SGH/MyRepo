import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  python,
  java,
  c,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Learning Flutter",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python, C, Java",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "c",
    icon: c,
  }
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "SoilSustain",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Integrated python based machine learning model to find which crop to grow on land using some fields.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "MeatYouThere",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "November 2022",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript.",
      "Used Figma to make prototype first before making original website.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Python Automation",
    company_name: "Autotandance",
    icon: shopify,
    iconBg: "#383E56",
    date: "October 2022",
    points: [
      "Made an attendance sheet for University and School with some automated features.",
      "This program sends email to student's parents on 1st of every month.",
      "It also predicts whether the student will be able to maintain his/her attendance above 75% or not and informs there parent's accordingly.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Automation",
    company_name: "Selenium",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Automating websites to monitor some data change or scraping data.",
      "Worked as a freelancer in this domain and got rated as a level 2 seller on fiverr.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SoilSustain",
    description:
      "Web-based platform that allows users to find soil quality of the whole world and to know what to plant on there field using ML.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "googleMaps",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SHASHWAT-SGH/",
  },
  {
    name: "MeatYouThere",
    description:
      "Website to showcase my frontend development skills and capability to make responsive pages.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SHASHWAT-SGH/",
  },
  {
    name: "Autotendance",
    description:
      "A comprehensive attendance sheet suitable for schools and universities to take attendance of students with uniquenes.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/SHASHWAT-SGH/",
  },
];

export { services, technologies, experiences, testimonials, projects };
