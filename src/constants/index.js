import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";

export const HERO_CONTENT = `I am a versatile full-stack developer and game developer with expertise in crafting robust web applications and engaging game experiences. With a strong foundation in modern web technologies and years of hands-on experience in Unity game development, I excel at building solutions that are both functional and visually appealing.`;

export const ABOUT_TEXT = `I am a dedicated full-stack developer with a passion for creating efficient and scalable web applications. My journey began with learning game development, where I built a strong foundation in C# and Unity. This initial experience sparked my interest in software development, leading me to enroll in a web development program to broaden my skill set.

Now, I specialize in building responsive front-end interfaces using React and robust back-end systems with Node.js, MySQL, and MongoDB. My combined expertise in web and game development enables me to approach challenges creatively and deliver user-centered solutions.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Unity Game Developer",
    company: "Fiverr.com",
    description: `I have been a freelance game developer on Fiverr since September 2022, specializing in Unity and C#. With 49 completed orders on the platform and a 4.9/5 rating, I've built a reputation for delivering high-quality games and apps. My commitment to excellence has earned me 41 repeat clients.`,
    technologies: ["Unity", "C#", "mySqlServer", ".Net", "Photon Fusion", "ARCore", "Git"],
    
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and Product Sorting.",
    technologies: ["HTML", "CSS", "React", "Node.js"],
    link : "https://github.com/LagrichMohamed/E-commerce-TP",
    demo: "https://lagrichmohamed.github.io/E-commerce-TP/"
  },
  {
    title: "Task Management App",
    image: project5,
    description:
      "An application for managing tasks and projects, with features such as task creation, edition, and deletion.",
    technologies: ["HTML", "CSS", "React"],
    link : "https://github.com/LagrichMohamed/Application-de-Gestion-de-Taches",
    demo: "https://lagrichmohamed.github.io/Application-de-Gestion-de-Taches/"
  },
  {
    title: "Expense Tracker",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind css"],
    link : "https://github.com/LagrichMohamed/Expense-Tracker",
    demo: "https://lagrichmohamed.github.io/Expense-Tracker/"
  },
  {
    title: "Youtube Clone",
    image: project6,
    description:
      "A Youtube clone",
    technologies: ["HTML", "CSS", "React", "Google Cloud Console", "Youtube Api"],
    link : "https://github.com/LagrichMohamed/youtube-clone",
    demo: "https://lagrichmohamed.github.io/youtube-clone/"
  },
  {
    title: "Recipe Finder",
    image: project7,
    description:
      "A Recipe Finder App",
    technologies: ["HTML", "CSS", "React",  "Edamam Api"],
    link : "https://github.com/LagrichMohamed/recette-app",
    demo: "https://lagrichmohamed.github.io/recette-app/"
  },
];

export const CONTACT = {
  address: "Hay al inara, block d18, Marrakech, Morocco",
  phoneNo: "+212650141785",
  email: "lagrich.mohamed@outook.com",
};
