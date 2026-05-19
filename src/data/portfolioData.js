// Import Project Images
import kallesImg from '../assets/Screenshot 2026-05-05 194859.png';
import spraysImg from '../assets/image.png';
import iKhodalImg from '../assets/image copy.png';
import realEstateImg from '../assets/image copy 2.png';
import suxnixImg from '../assets/image copy 3.png';

export const portfolioData = {
  name: "Manthan Manani",
  role: "Full Stack Developer",
  about: "I am a MCA student with hands-on experience in full-stack development using React.js, Tailwind CSS, MUI, React query, redux toolkit, HTML5, CSS3, JavaScript and backend technologies like Node.js, MongoDB, Express.js, SQLite / MySQL. I have built multiple real-world projects and am currently working at Excelsior Technology.",
  contact: {
    phone: "9099215815",
    email: "manthanmanani1911@gmail.com",
    location: "Rajkot & Ahmedabad, Gujarat",
    github: "https://github.com/mananimanthan7",
    linkedin: "https://www.linkedin.com/in/manthan-manani-a97124276?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  skills: {
    frontend: ["React.js", "Tailwind CSS", "MUI", "React Query", "Redux Toolkit", "HTML5", "CSS3", "JavaScript"],
    backend: ["Node.js", "MongoDB", "Express.js", "SQLite", "MySQL"],
    tools: ["Git", "GitHub", "VS Code", "Antigravity", "Vercel", "Supabase"],
  },
  projects: [
    {
      title: "Kalles",
      description: "A comprehensive E-commerce Web App featuring a modern UI and robust functionality.",
      tech: ["React", "Tailwind", "Responsive UI"],
      image: kallesImg,
      live: "#",
      github: "https://github.com/mananimanthan7",
    },
    {
      title: "Sprays",
      description: "Full-stack web application focused on high performance and seamless database integration.",
      tech: ["Full Stack", "Database", "Performance"],
      image: spraysImg,
      live: "#",
      github: "https://github.com/mananimanthan7",
    },
    {
      title: "iKhodal Beauty Parlour",
      description: "An elegant, responsive business website for a beauty parlour.",
      tech: ["React", "Vercel", "Responsive"],
      image: iKhodalImg,
      live: "https://i-khodal-beauty-parlourr.vercel.app/",
      github: "https://github.com/mananimanthan7",
    },
    {
      title: "Real Estate Frontend",
      description: "Modern real estate platform with high-performance property listings and advanced filtering.",
      tech: ["React", "Tailwind", "MySQLite"],
      image: realEstateImg,
      live: "#",
      github: "https://github.com/mananimanthan7",
    },
    {
      title: "Suxnix Power Supply",
      description: "A specialized management system for power supply monitoring and control.",
      tech: ["React", "Tailwind"],
      image: suxnixImg,
      live: "#",
      github: "https://github.com/mananimanthan7",
    },
  ],
  experience: [
    {
      company: "Excelsior Technology",
      role: "Full Stack Developer",
      duration: "Aug 2025 – Present",
      description: "Working as a Full Stack Developer, building robust web applications using React, Node.js, and modern database systems.",
    },
  ],
  education: [
    {
      degree: "M.C.A.",
      institution: "Parul University",
      status: "Pursuing",
    },
    {
      degree: "B.C.A.",
      institution: "College",
      score: "8.16 CGPA",
    },
    {
      degree: "HSC",
      institution: "School",
      score: "74.33%",
    },
    {
      degree: "SSC",
      institution: "School",
      score: "75.06%",
    },
  ],
};
