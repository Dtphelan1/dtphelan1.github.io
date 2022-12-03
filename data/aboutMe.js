import { Globe, GitHub, Mail, Linkedin } from "react-feather";

const aboutMe = {
  name: "Dylan Phelan",
  title: "Lead Web Developer @ MITRE",
  elevatorPitch: `Hi, I'm Dylan! I'm a web developer with 6+ years experience working on healthcare, social justice, and benefits delivery projects. I've created UI's using React and Vue, CLIs and APIs using Node.js and Python, ML models using Python, and architecture diagrams/roadmaps to support projects as a technical lead. `,
  links: [
    {
      id: "website",
      link: "https://www.dylanphelan.tech",
      display: "dylanphelan.tech",
      Icon: Globe,
    },
    {
      id: "github",
      link: "https://www.github.com/Dtphelan1",
      display: "@dtphelan1",
      Icon: GitHub,
    },
    {
      id: "email",
      link: "mailto:dtphelan1@gmail.com",
      display: "Dtphelan1@gmail.com",
      Icon: Mail,
    },
    {
      id: "linkedin",
      link: "https://www.linkedin.com/in/dtphelan1/",
      display: "/dtphelan1",
      Icon: Linkedin,
    },
  ],
};

export default aboutMe;
