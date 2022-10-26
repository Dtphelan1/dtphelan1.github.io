import React from "react";
import Image from "next/image";
import { Globe, GitHub, Mail, Linkedin } from "react-feather";
import headshot from "../public/headshot.jpeg";
import SkillLevel from "../components/SkillLevel";
import SkillLevelLegend from "../components/SkillLevelLegend";

function projectMetadata(project) {
  return (
    <i>
      {project.role && <span className="role">{project.role}</span>}
      {project.date && <span className="date">, {project.date}</span>}
      {project.team && <span className="team">, {project.team}</span>}
    </i>
  );
}

export default function Resume() {
  const aboutMe = {
    name: "Dylan Phelan",
    title: "Lead Frontend Engineer @ MITRE",
    elevatorPitch: `I'm an experienced web developer (esp. React and Vue), Node.js
    backend developer, general purpose python developer, and project
    technical lead. Computer Science Master's focused on AI and AI
    Ethics. Quick learner. Mission driven. Passionate about building
    software to improve healthcare or civic technology programs.`,
    links: [
      {
        id: "website",
        link: "https://www.dylanphelan.tech",
        display: "dylanphelan.tech",
        Icon: Globe,
      },
      {
        id: "email",
        link: "mailto:dtphelan1@gmail.com",
        display: "@dtphelan1",
        Icon: GitHub,
      },
      {
        id: "github",
        link: "https://www.github.com/Dtphelan1",
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
  const projects = [
    {
      id: "nyj-music",
      role: "Solo Developer & Designer",
      date: "Aug 2022",
      title: "NYJMusic.com",
      links: [
        {
          url: "https://www.nyjmusic.com/",
          title: "Website",
          Icon: Globe,
        },
        {
          url: "https://github.com/Dtphelan1/NYJ",
          title: "Code",
          Icon: GitHub,
        },
      ],
      elevatorPitch:
        "Minimalist responsive webpage for NYJ Da Prafet's merch/music/socials",
      bullets: [
        "Conducted stakeholder interview and landscape assessment of similar artists websites",
        "Solicited feedback on designs and mockups before executing final product",
        "Rapidly implemented and deployed website (48hrs) time for upcoming music/merch launch",
      ],
      tags: ["HTML", "jQuery", "Tailwind", "Vercel"],
    },
    {
      id: "VSA",
      role: "Lead Designer & Frontend Dev",
      date: "Apr 2021 ",
      title: "Vote Smart Arlington",
      links: [
        {
          url: "https://www.votesmartarlington.com/#/ ",
          title: "Website",
          Icon: Globe,
        },
        {
          url: "https://github.com/dtphelan1/arlington-ma-town-member-voting",
          title: "Code",
          Icon: GitHub,
        },
      ],
      elevatorPitch:
        "Making representatives' voting patterns easy to understand",
      bullets: [
        "Built and led team of three devs to volunteer their time to build this application",
        "Visualized voting history of 100+ town representatives on ballot measures",
        "Generated >1000 visits, garnered praise from multiple local representatives",
      ],
      tags: ["Sketch", "React", "Bootstrap", "Node"],
    },
    {
      id: "mCODE-Extraction-Client",
      role: "Technical Lead & Developer",
      date: "2018-Now",
      title: "mCODE Extraction Framework (MEF)",
      links: [
        {
          url: "https://github.com/mcode/mcode-extraction-framework",
          title: "Code for core mCODE Extraction Framework",
          Icon: GitHub,
        },
        {
          url: "https://github.com/mcode/base-icare-extraction-client",
          title: "Code for ICAREdata Client",
          Icon: GitHub,
        },
        {
          url: "https://github.com/mcode/mcode-extraction-ui",
          title: "Code for Extraction UI",
          Icon: GitHub,
        },
      ],
      elevatorPitch: "Converting hospital cancer data to FHIR's mCODE standard",
      bullets: [
        "Built Node command line tool for extracting & translating healthcare data from proprietary formats to the FHIR's mCODE standard",
        "Architected framework for modularity across data sources and usecase extensibility ",
        "Led the development of 6+ github repositories leveraging the MEF in 2+ applications",
        "Enabled MITRE's ICAREdata clinical trial data analysis with data extracted by MEF",
      ],
      tags: ["FHIR", "Node", "Electron", "React", "Bootstrap"],
    },
    {
      id: "rttd-web-app",
      title: "RTTD Web Application",
      role: "Technical Lead & Developer",
      date: "2018-Now",
      links: [
        {
          url: "https://github.com/mcode/mcode-extraction-framework",
          title: "Code for core mCODE Extraction Framework",
          Icon: GitHub,
        },
        {
          url: "https://github.com/mcode/base-icare-extraction-client",
          title: "Code for ICAREdata Client",
          Icon: GitHub,
        },
        {
          url: "https://github.com/mcode/mcode-extraction-ui",
          title: "Code for Extraction UI",
          Icon: GitHub,
        },
      ],
      elevatorPitch: "Converting hospital cancer data to FHIR's mCODE standard",
      bullets: [
        "Built Node command line tool for extracting & translating healthcare data from proprietary formats to the FHIR's mCODE standard",
        "Architected framework for modularity across data sources and usecase extensibility ",
        "Led the development of 6+ github repositories leveraging the MEF in 2+ applications",
        "Delivered initial prototype within 3 weeks, enabling stakeholder interviews",
      ],
      tags: ["React", "CRA", "Tailwind", "Prettier", "GitHub Workflows"],
    },
  ];
  const education = [
    {
      school: "Tufts University",
      degree: "MS",
      focus: "Computer Science",
      period: "2018 - 2021",
      gpa: "4.00",
      notes: "Completed Part-Time",
    },
    {
      school: "Tufts University",
      degree: "BS",
      focus: "Computer Science, Minor in Philosophy",
      period: "2012 - 2016",
      gpa: "3.87",
      notes: "Summa Cum Laude",
    },
  ];
  const skills = [
    { name: "React", level: 5 },
    { name: "Vue", level: 4 },
    { name: "Next.js", level: 4 },
    { name: "Nuxt.js", level: 3 },
    { name: "Create React App (CRA)", level: 5 },
    { name: "React Router", level: 4 },
    { name: "HTML", level: 5 },
    { name: "Bootstrap", level: 4 },
    { name: "Material UI", level: 3 },
    { name: "Bulma", level: 1 },
    { name: "CSS", level: 5 },
    { name: "Tailwind", level: 4 },
    { name: "SASS", level: 3 },
    { name: "CSS Modules", level: 1 },
    { name: "JavaScript", level: 5 },
    { name: "Node.js", level: 4 },
    { name: "Python", level: 4 },
    { name: "Flask", level: 2 },
    { name: "Vercel", level: 2 },
    { name: "Heroku", level: 3 },
    { name: "GitHub Pages", level: 4 },
    { name: "GitHub Workflows", level: 3 },
    { name: "Docker", level: 3 },
    { name: "Eslint/Prettier", level: 3 },
    { name: "HL7 FHIR", level: 4 },
  ];

  return (
    <div className="h-screen md:h-auto md:max-h-[97vh] overflow-auto">
      <div
        id="contact-and-high-level "
        className="p-4 max-w-screen-xl mx-auto bg-primary xl:bg-neutral-main flex flex-wrap"
      >
        <div className="basis-full xl:basis-1/4 xl:pr-8 ">
          <div className="justify-center flex max-h-64 max-w-[14rem] mx-auto">
            <Image
              src={headshot}
              className="rounded-full "
              alt="A photo of Dylan, taken in 2019 from a rooftop restaurant in Morocco. Pictured with medium length brown hair, slightly disheveled and parted on the viewer's right, is a wide-smiling, green-eye squinting Dylan wearing a black floral-print collared shirt. The image is neck-up, and the shirt is barely visible in the crop. A portrait style photo, the head makes way to slightly blurred shrubbery, offering a verdant contrast to the subject's peach-toned skin. Further in the photo's background we see the Old Town of Morocco stretch to the horizon, beige and reddish-brown buildings carrying our eyes to the gray-blue sky behind up."
            />
          </div>
        </div>
        {/* Need the wrapping div so the HR can be the same length as the top-level bio info */}
        <div className="basis-full xl:basis-3/4 xl:p-8 bg-primary text-neutral-main">
          <div className="flex items-center justify-between">
            <header className="basis-1/2 mb-1">
              <h1 className="text-4xl ">{aboutMe.name}</h1>
              <p>{aboutMe.title}</p>
            </header>
            <address id="links" className="text-sm basis-1/2">
              <ul className="flex flex-row flex-wrap justify-between">
                {aboutMe.links.map((link, i) => (
                  <li
                    className="flex items-center mx-2 my-1 text-sm"
                    key={link.id}
                  >
                    <link.Icon size={16} className="inline mr-2" />
                    <a
                      target="_blank"
                      href={link.link}
                      rel="noopener noreferrer"
                    >
                      {link.display}
                    </a>
                  </li>
                ))}
              </ul>
            </address>
          </div>
          <hr className="mb-4" />
          <p id="mission-statement">{aboutMe.elevatorPitch}</p>
        </div>
      </div>
      <div className="p-4 max-w-screen-xl mx-auto bg-neutral-main flex flex-wrap-reverse xl:flex-wrap text-primary">
        <section className="basis-full xl:basis-1/4 xl:pr-4 flex flex-wrap">
          <div className="basis-full sm:basis-1/2 xl:basis-full pr-0 sm:pr-4 xl:pr-0">
            <h2 className="text-2xl font-bold ">Education</h2>
            <hr className="w-full border-primary pb-4" />
            {education.map((edu) => (
              <article className="mb-4">
                <h3 className="text-xl font-bold">
                  {edu.degree}, {edu.school}
                </h3>
                <p className="text-sm">{edu.focus}</p>
                <p className="text-sm">
                  {edu.period}, {edu.gpa}
                </p>
                {edu.notes && <p className="text-sm italic">{edu.notes}</p>}
              </article>
            ))}
          </div>
          <div className="basis-full sm:basis-1/2 xl:basis-full">
            <h2 className="text-2xl font-bold ">Skills</h2>
            <hr className="w-full border-primary pb-4" />

            <SkillLevelLegend />
            <ul>
              {skills.map((skill) => (
                <li className="mb flex justify-between ">
                  <p>{skill.name}</p>
                  <SkillLevel level={skill.level} />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="basis-full xl:basis-3/4">
          <h2 className="text-2xl font-bold ">Projects</h2>
          <hr className="w-full border-primary pb-4" />
          {projects.map((project) => {
            return (
              <article
                id={project.id}
                className="mb-4 last-of-type:mb-4"
                key={project.id}
              >
                <header>
                  <div className="w-full flex flex-row justify-between">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold mr-2">
                        {project.title}
                      </h3>
                      {/* Links */}
                      {project.links.map((link) => (
                        <a
                          target="__blank"
                          href={link.url}
                          key={link.url}
                          title={link.title}
                          className="text-xl bg-primary text-neutral-main rounded-full  px-1 py-1 mx-1 font-bold animate__animated hover:animate__tada"
                        >
                          <link.Icon className="mx-2" size={16} />
                        </a>
                      ))}
                    </div>
                    <p className="text-lg text-right">
                      {projectMetadata(project)}
                    </p>
                  </div>
                  {/* Tags */}
                  <div className="w-full flex flex-row justify-between items-center">
                    <p className="text-lg italic flex-2">
                      {project.elevatorPitch}
                    </p>
                    <div className="flex flex-1 flex-row-reverse">
                      {project.tags.map((tag) => {
                        return (
                          <p
                            id={tag}
                            key={tag}
                            className="inline px-2 py-1 mx-1 first-of-type:ml-0 rounded bg-primary-ultra-light text-primary text-xs "
                          >
                            {tag}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </header>
                {/* Bullets */}
                <ul className="list-inside list-disc text-sm">
                  {project.bullets?.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
