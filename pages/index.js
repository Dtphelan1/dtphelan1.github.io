import React, { useRef } from "react";
import Image from "next/image";
import { Globe, GitHub, Mail, Linkedin, Printer } from "react-feather";
import { useReactToPrint } from "react-to-print";
import headshot from "../public/headshot.jpeg";
import CircleLeft from "../public/circle-left.svg";
import CircleRight from "../public/circle-right.svg";
import WaveLeft from "../public/wave-left.svg";
import WaveRight from "../public/wave-right.svg";
import SkillLevel from "../components/SkillLevel";
import SkillLevelLegend from "../components/SkillLevelLegend";

function projectMetadata(project) {
  return (
    <i>
      {project.role && <span>{project.role}</span>}
      {project.roleList && <span>{project.role}</span>}
      {project.date && <span>, {project.date}</span>}
    </i>
  );
}

function jobMetadata(job) {
  return (
    <i>
      {job.roleList &&
        job.roleList.map((role) => (
          <span key={role.title} className="block">
            {role.title}, {role.date}
          </span>
        ))}
    </i>
  );
}

export default function Resume() {
  const aboutMe = {
    name: "Dylan Phelan",
    title: "Lead Frontend Engineer @ MITRE",
    elevatorPitch: `I'm a Frontend Engineer with 6+ years experience working on healthcare, psephology, ai ethics, and benefit delivery projects.  I've created UI's using React and Vue, CLI's and API's using Node.js, ML models using python, and architecture diagrams/roadmaps to support projects as a technical lead. Seeking Boston/remote Frontend Developer positions.`,
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
  const jobs = [
    {
      title: "MITRE Corporation",
      roleList: [
        {
          title: "Lead Frontend Engineer",
          date: "2021 - Now",
        },
        {
          title: "Senior Frontend Engineer",
          date: "2018 - 2021",
        },
        {
          title: "Frontend Engineer",
          date: "2016 - 2018",
        },
      ],
      date: "2016 - Now",
      elevatorPitch: "Technical lead, intern program co-lead, ",
      bullets: [
        "Technical lead for one arm of MITRE's oncology moonshot, accelerating the adoption of MITRE's mCODE standard",
        "Coordinator for department brownbag series (3+ yr), attracting dozens of project presentations, feedback sessions, and team collaborations",
        "Co-led department internship program for cohort of 8+ interns 2 years running",
        "Presented EOY moonshot updates to MITRE's C-Suite/SVPs",
      ],
      tags: [],
    },
  ];
  const projects = [
    {
      title: "NYJMusic.com",
      role: "Solo Developer & Designer",
      date: "Aug 2022",
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
      tags: ["Balsamiq", "HTML", "jQuery", "Tailwind", "Vercel"],
    },
    {
      title: "Vote Smart Arlington",
      role: "Lead Designer & Frontend Dev",
      date: "Apr 2021 ",
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
      title: "mCODE Extraction Framework (MEF)",
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
        "Enabled MITRE's ICAREdata clinical trial data analysis with data extracted by MEF",
      ],
      tags: ["FHIR", "Node", "Electron", "React", "Bootstrap"],
    },
    {
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
    { name: "HTML", level: 5 },
    { name: "React", level: 5 },
    { name: "Vue", level: 4 },
    { name: "Next.js", level: 4 },
    { name: "Nuxt.js", level: 3 },
    { name: "Create React App (CRA)", level: 5 },
    { name: "React Router", level: 4 },
    { name: "Bootstrap", level: 4 },
    { name: "Material UI", level: 3 },
    { name: "CSS", level: 5 },
    { name: "Tailwind", level: 4 },
    { name: "SASS", level: 3 },
    { name: "JavaScript", level: 5 },
    { name: "Node.js", level: 4 },
    { name: "Python", level: 4 },
    { name: "Flask", level: 2 },
    { name: "HL7's FHIR", level: 4 },
    { name: "Vercel", level: 2 },
    { name: "Heroku", level: 3 },
    { name: "GitHub Pages", level: 4 },
    { name: "GitHub Workflows", level: 3 },
    { name: "Docker", level: 3 },
    { name: "Eslint/Prettier", level: 3 },
    { name: "Sketch", level: 3 },
    { name: "Balsamiq", level: 3 },
  ];
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="h-screen md:h-auto md:max-h-[97vh] w-full overflow-auto text-sm">
      {/* <Image
        src={WaveLeft}
        className="h-full"
        fill
        width={"100px"}
        // height={"100%"}
      /> */}
      <div ref={componentRef} className="overflow-clip mx-auto">
        <div
          id="contact-and-high-level "
          className="flex flex-wrap p-4 max-w-screen-xl mx-auto bg-primary xl:bg-neutral-main print:bg-neutral-main"
        >
          <div className="flex flex-wrap flex-full items-center basis-full xl:basis-1/4 print:basis-1/4 xl:pr-8 print:pr-8 ">
            <div className="max-h-48 max-w-[10rem] mx-auto">
              <Image
                src={headshot}
                className="rounded-full"
                alt="A photo of Dylan, taken in 2019 from a rooftop restaurant in Morocco. Pictured with medium length brown hair, slightly disheveled and parted on the viewer's right, is a wide-smiling, green-eye squinting Dylan wearing a black floral-print collared shirt. The image is neck-up, and the shirt is barely visible in the crop. A portrait style photo, the head makes way to slightly blurred shrubbery, offering a verdant contrast to the subject's peach-toned skin. Further in the photo's background we see the Old Town of Morocco stretch to the horizon, beige and reddish-brown buildings carrying our eyes to the gray-blue sky behind up."
              />
            </div>
            <button
              className="flex items-center justify-center mx-auto  rounded border bg-primary  xl:border-0 border-neutral-main text-neutral-main p-1 mt-2 print:hidden"
              onClick={handlePrint}
            >
              <Printer size={12} className="mr-1" /> Print or PDF
            </button>
          </div>
          {/* Need the wrapping div so the HR can be the same length as the top-level bio info */}
          <div className="basis-full xl:basis-3/4 print:basis-3/4 xl:p-4 print:p-4 bg-primary text-neutral-main">
            <div className="flex items-center justify-between">
              <header className="basis-1/2 mb-1">
                <h1 className="text-4xl ">{aboutMe.name}</h1>
                <p>{aboutMe.title}</p>
              </header>
              <address id="links" className="text-xs basis-1/2">
                <ul className="flex flex-row flex-wrap justify-between">
                  {aboutMe.links.map((link, i) => (
                    <li className="flex items-center mx-2 my-1" key={link.id}>
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
            <hr className="mb-4 h-1" />
            <p id="mission-statement">{aboutMe.elevatorPitch}</p>
          </div>
        </div>
        <div
          id="content"
          className="flex flex-wrap-reverse p-4 max-w-screen-xl mx-auto  text-primary bg-neutral-main"
        >
          <section className="basis-full xl:basis-1/4 print:basis-1/4 xl:pr-4 print:pr-4 flex flex-wrap">
            <div className="basis-full pr-0 sm:basis-1/2 sm:pr-4 xl:basis-full xl:pr-0 print:!basis-full print:pr-0">
              <h2 className="text-xl font-bold ">Education</h2>
              <hr className="w-full border-primary pb-4" />
              {education.map((edu) => (
                <article className="mb-4">
                  <h3 className="text-base font-bold">
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
            <div className="basis-full sm:basis-1/2 xl:basis-full print:!pointer-events-nonebasis-full">
              <h2 className="text-xl font-bold ">Skills</h2>
              <hr className="w-full border-primary pb-4" />
              <SkillLevelLegend />
              <ul>
                {skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="mb flex justify-between items-center mb-1 "
                  >
                    <p className="basis-1/2 text-sm">{skill.name}</p>
                    <SkillLevel
                      className="basis-1/2 text-right"
                      level={skill.level}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="basis-full xl:basis-3/4 print:basis-3/4">
            <div id="experience">
              <h2 className="text-xl font-bold ">Experience</h2>
              <hr className="w-full border-primary pb-4" />
              {jobs.map((job) => {
                return (
                  <article
                    id={job.title}
                    className="mb-4 last-of-type:mb-4"
                    key={job.title}
                  >
                    <header>
                      <div className="w-full flex flex-row items-start justify-between">
                        <div className="flex flex-col">
                          <h3 className="text-base font-bold mr-2">
                            {job.title}
                          </h3>
                          <p className="text-base italic">
                            {job.elevatorPitch}
                          </p>
                        </div>
                        <p className="text-base text-right">
                          {jobMetadata(job)}
                        </p>
                      </div>
                      {/* Tags */}
                      <div className="w-full flex flex-row justify-between items-center">
                        <div className="flex flex-1 flex-row justify-end">
                          {job.tags.map((tag) => {
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
                      {job.bullets?.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
            <div id="projects">
              <h2 className="text-xl font-bold ">Projects</h2>
              <hr className="w-full border-primary pb-4" />
              {projects.map((project) => {
                return (
                  <article
                    id={project.title}
                    className="mb-4 last-of-type:mb-4"
                    key={project.title}
                  >
                    <header>
                      <div className="w-full flex flex-row justify-between">
                        <div className="flex items-center">
                          <h3 className="text-base font-bold mr-2">
                            {project.title}
                          </h3>
                          {/* Links */}
                          {project.links.map((link) => (
                            <a
                              target="__blank"
                              href={link.url}
                              key={link.url}
                              title={link.title}
                              className="text-base bg-primary text-neutral-main rounded-full  px-1 py-1 mx-1 font-bold animate__animated hover:animate__tada"
                            >
                              <link.Icon className="mx-2" size={16} />
                            </a>
                          ))}
                        </div>
                        <p className="text-base text-right">
                          {projectMetadata(project)}
                        </p>
                      </div>
                      {/* Tags */}
                      <div className="w-full flex flex-row justify-between items-center">
                        <p className="text-base italic flex-2">
                          {project.elevatorPitch}
                        </p>
                        <div className="flex flex-1 flex-row justify-end">
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
            </div>
          </section>
        </div>
      </div>
      {/* <Image
        src={WaveRight}
        className="h-full"
        fill
        width={"100px"}
        // height={"100%"}
      /> */}
    </div>
  );
}
