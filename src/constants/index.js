import project1 from "../assets/projects/1.jpg";
import project2 from "../assets/projects/2.jpg";
import project3 from "../assets/projects/3.jpg";
import project4 from "../assets/projects/4.jpg";

export const HERO_CONTENT = `I am a passionate Software Developer and 3D Designer with a diverse skill set and a drive for innovation.Experienced in fullstack for previous 2 years. Currently pursuing a B-Tech in Computer Science and Engineering, I am eager to apply my  knowledge and skills in a challenging work environment to contribute to company growth and success.`;

export const ABOUT_TEXT = `I am a versatile professional with expertise in various programming languages and design tools. My skills range from Python and C# to 3D modeling in Blender and AR/VR development using Unity. I have a strong foundation in data structures and algorithms, and I'm continuously expanding my knowledge in areas such as cybersecurity and operating systems. As an active member of IEDC and IEEE, I'm committed to staying at the forefront of technological advancements and fostering collaborative innovation.I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role:  "3D Designer/Web Developer",
    company: "Arookie",
    description: `Functioned as the primary designer of the company. Designed 3D models and developed web solutions. Gained hands-on experience in project development and implementation. Worked with various technologies to create AR and web-based projects.`,
    technologies: ["Unity", "Blender", "MetaSpark", "HTML", "CSS", "JavaScript"],
  },
  {
    year: "2023 - Present",
    role: "Vice Chair",
    company: "IEEE UEC_SB",
    description: `Developed leadership and management skills. Engaged in professional development activities and fostered networking and collaboration among members. Provided mentorship and support to fellow students.`,
    technologies: ["Leadership", "Project Management", "Networking"],
  },
  {
    year: "2024",
    role: "Full Stack Developer-internship",
    company: "Emvigo Tech",
    description: `Worked on React and Next.js projects. Developed a todo-list application using React and Next.js, gaining practical experience in modern frontend development technologies.`,
    technologies: ["React", "Next.js","Tailwindcss", "Node.js"],
  }
];

export const PROJECTS = [
  {
    title: "Campus Guide",
    image: project1,
    description:
      "An application using augmented-reality to guide the people to locate and find the way to the destination in and around the college campus.",
    technologies: ["Unity","Blender","Opencv"],
  },
  {
    title: "To-do App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["react","node","CSS"],
    url:"https://todo-dwc94zne6-gbs-projects-f9cfcfc2.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["node.js", "React", "TailwindCSS"],
    url:"https://portfolio-react-opal-nu.vercel.app/"
  },
  {
    title: "Whatsapp-chat",
    image: project4,
    description:
      "A platform for chatting with number without saving the number.",
    technologies: ["node.js","TailwindCSS","React"],
    url:"https://wc-phi.vercel.app/"
  },
];

export const CONTACT = {
  address: "G.Bhadra nair,UEC vallivattom",
  phoneNo: "+91 9446429640 ",
  email: "gsb22102@gmail.com",
};