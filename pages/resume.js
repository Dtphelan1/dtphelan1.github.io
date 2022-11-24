import React, { useRef, useState } from "react";
import Image from "next/image";
import { Globe, GitHub, Mail, Linkedin, Printer } from "react-feather";
import { useReactToPrint } from "react-to-print";
import headshot from "../public/headshot.jpeg";
import PageFadeWrapper from "../components/PageFadeWrapper";
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
  const jobs = [
    {
      title: "MITRE Corporation",
      roleList: [
        {
          title: "Lead Web Developer",
          date: "2021 - Now",
        },
        {
          title: "Senior Web Developer",
          date: "2018 - 2021",
        },
        {
          title: "Web Developer",
          date: "2016 - 2018",
        },
      ],
      date: "2016 - Now",
      elevatorPitch:
        "Technical lead, developer, intern lead, dept. brown-bag coordinator",
      bullets: [
        "Current technical lead & developer on MITRE's oncology moonshot, improving cancer data standards with technology",
        "Prior technical lead & developer for 3+ software teams in charge of web applications, CLIs, APIs, visualizations, rich-text editors, multiphase complex forms, and more",
        "Developer for 12+ MITRE projects in oncology, social justice, benefits delivery, and COVID-19",
        "Runs department brown-bag series, executed 20+ presentations and project feedback sessions",
        "Co-leads department internship program, mentoring 12+ undergraduate and graduate interns",
      ],
    },
  ];
  const projects = [
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
      elevatorPitch: "Convert hospitals' cancer data to FHIR's mCODE standard",
      bullets: [
        "Designed a technical architecture enabling modularity across data sources and usecases",
        "Extracted data from proprietary web APIs, and from CSV files either on disk or served over HTTP",
        "Built Node CLI for translating healthcare data from proprietary formats to the mCODE standard",
        // "Created and maintained 6+ other github repositories in support of 3 separate usecases",
        "Enabled MITRE's ICAREdata project to analyze health system clinical trial data extracted by MEF",
      ],
      tags: ["React", "Bootstrap", "Node", "FHIR"],
    },
    {
      title: "Radiation Therapy Treatment Data (RTTD) App",
      role: "Technical Lead & Web Dev",
      date: "May 2022 - Now",
      links: [
        {
          url: "https://github.com/mcode/rttd-summary-webapp",
          title: "Code for RTTD web application",
          Icon: GitHub,
        },
        {
          url: "https://mcode.github.io/rttd-summary-webapp/",
          title: "Demo of RTTD web application",
          Icon: Globe,
        },
      ],
      elevatorPitch: "Empower discussions on radiation data standards",
      bullets: [
        "Solicited requirements from MITRE's RTTD team",
        "Developed React web application using Axios to fetch & render RTTD data from FHIR servers",
        "Delivered initial prototype within 3 weeks, enabling the team's external stakeholder interviews",
        "Iterated application based on stakeholder feedback, supporting new request headers, reformatted visualizations, and metadata displays",
      ],
      tags: ["React", "Tailwind", "FHIR"],
    },
    {
      title: "Unemployment Benefits UI Prototype",
      role: "Technical Lead & Web Dev",
      date: "Mar - Sept 2022",
      links: [],
      elevatorPitch: "Streamline unemployment insurance benefits",
      bullets: [
        "Created Vue frontend for submitting multi-page unemployment insurance benefits form",
        "Implemented Express backend API for creating, updating, and reviewing unemployment applications",
        "Distilled MVP requirements based on EOY objectives and research team's experimental scenarios",
        "Balanced competing needs for a rapid prototype and potential use-case pivots",
      ],
      tags: ["Vue", "Nuxt", "Tailwind", "HTML"],
    },
    {
      title: "MITRE's Social Justice Platform",
      role: "Web Dev",
      date: "Jan - Sept 2022",
      links: [
        {
          url: "https://www.sjp.mitre.org/",
          title: "MITRE's Social Justice Platform",
          Icon: Globe,
        },
        {
          url: "https://sjp.mitre.org/household-wealth-gap",
          title: 'Insight on "The Racial Wealth Gap and Household Finances"',
          Icon: Globe,
        },
      ],
      elevatorPitch: "Exhibit MITRE's social justice work in one place",
      bullets: [
        'Coordinated with MITRE researchers to build web-based interactive report, "The Racial Wealth Gap and Your Household Finances"',
        "Ported Python NumPy and Streamlit code to HTML/JS, aligning mockups, visualizations, and input controls to our design language",
        "Integrated Chart JS into our admin-authoring tools, visualizing data with bar and line charts",
        "Supported markdown preview in resource authoring and rendering on resource detail views",
        "Implemented custom URLs for resources at the admin-authoring and routing level",
      ],
      tags: ["Vue", "EJS", "NGINX", "Express"],
    },
    {
      title: "FluxNotes",
      role: "Technical Lead & Developer",
      date: "2017-2019",
      links: [
        {
          url: "https://github.com/fluxnotes/flux",
          title: "Code for core mCODE Extraction Framework",
          Icon: GitHub,
        },
        {
          url: "https://fluxnotes.github.io/flux/",
          title: "FluxNotes Application",
          Icon: Globe,
        },
      ],
      elevatorPitch: "Re-imagine the clinical note taking experience",
      bullets: [
        "Built a SMARTonFHIR React web application for visualizing and capturing mCODE data",
        "Leveraged SlateJs rich-text editor for inline suggestions and data tagging in clinical notes",
        "Visualized patient data with ReCharts and custom HTML visualizations",
        "Enabled data provenance tracking via data-linkage to source notes and ElasticSearch querying",
        "Received praise from oncologists and MITRE executives, motivating future research on novel data capture techniques",
      ],
      tags: ["React", "Material UI", "SCSS", "FHIR"],
    },
    {
      title: "Vote Smart Arlington",
      role: "Lead Designer & Web Dev",
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
      elevatorPitch: "Learn how representatives vote on Arlington measures",
      bullets: [
        "Organized a team of three devs to build a React web application with an Express backend",
        "Visualized voting history of 100+ town representatives on ballot measures with React Table",
        "Garnered appreciation from multiple local representatives, >1000 visits during local election week",
      ],
      tags: ["Sketch", "React", "Bootstrap", "Node"],
    },
    {
      title: "Ranked Choice Voting (RCV) Simulation Research",
      role: "Lead Designer & Web Dev",
      date: "Sept 2020 - May 2021",
      links: [
        {
          url: "https://mggg.github.io/rcv-webapp/#/",
          title: "RCV Simulation Demo",
          Icon: Globe,
        },
        {
          url: "https://github.com/mggg/rcv-webapp",
          title: "Frontend Code",
          Icon: GitHub,
        },
        {
          url: "https://github.com/mggg/RCV_Basics",
          title: "Frontend Code",
          Icon: GitHub,
        },
      ],
      elevatorPitch: "Explore RCV's impact on election outcomes",
      bullets: [
        "Implemented a React web application and Python Flask API for running RCV election simulations",
        "Conducted contextual inquiries to understand target users' interaction and visualization needs",
        "Designed mockups for defining input parameters and visualizing election outcomes",
        "Created Flask API for running and aggregating 4 types of RCV simulation",
        "Visualize simulation outcomes across various model types with Victory charts",
      ],
      tags: ["Balsamiq", "React", "Bootstrap", "Python"],
    },
    {
      title: "Sorting out Bandcamp Merch",
      role: "Lead Web Dev",
      date: "Aug 2022",
      links: [
        {
          url: "https://addons.mozilla.org/en-US/firefox/addon/bandcamp-merch-sorter/",
          title: "Firefox Extension",
          Icon: Globe,
        },
        {
          url: "https://github.com/Dtphelan1/bc-merch-sort-firefox-extension",
          title: "Code",
          Icon: GitHub,
        },
      ],
      elevatorPitch: "Move sold-out items out of the way",
      bullets: [
        "Relegates sold-out items to the bottom of the merch store's inventory",
        "Adds subtle transparency to sold-out items to indicate their absence",
        "Published extension on the Firefox add-on store",
      ],
      tags: ["JavaScript", "web-ext"],
    },
    {
      title: "NYJMusic.com",
      role: "Lead Designer & Web Dev",
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
      elevatorPitch: "Promote NYJ Da Prafet's merch, music, & socials",
      bullets: [
        "Conducted stakeholder interview and landscape assessment of similar artists websites",
        "Solicited feedback on designs and mockups before executing final product",
        "Implemented and deployed website rapidly (48hrs) in-time for upcoming launches",
      ],
      tags: ["HTML", "Tailwind", "jQuery", "Vercel"],
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
    { name: "Create React App", level: 5 },
    { name: "Next.js", level: 4 },
    { name: "Nuxt.js", level: 3 },
    // { name: "React Router", level: 4 },
    { name: "Bootstrap", level: 4 },
    // { name: "Material UI", level: 3 },
    { name: "CSS", level: 5 },
    { name: "Tailwind", level: 4 },
    { name: "SASS", level: 3 },
    { name: "JavaScript", level: 5 },
    { name: "Node.js", level: 4 },
    { name: "Python", level: 4 },
    // { name: "Flask", level: 2 },
    { name: "HL7's FHIR", level: 4 },
    { name: "GitHub Pages", level: 4 },
    // { name: "Heroku", level: 3 },
    { name: "Vercel", level: 2 },
    { name: "Docker", level: 3 },
    { name: "CI/CD Automation", level: 4 },
    // { name: "GitHub Workflows", level: 3 },
    { name: "Eslint/Prettier", level: 3 },
    { name: "Balsamiq", level: 3 },
    // { name: "Sketch", level: 2 },
  ];
  const skillAreas = ["Featured", "React", "Vue", "Healthcare", "Voting"];
  const [skillArea, setSkillArea] = useState(skillAreas[0]);
  // Printing logic
  // Ref of the component to print
  const componentRef = useRef();
  // Date for file-name time stamping
  const today = new Date();
  // Set up printing hook
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${[
      today.getDate(),
      today.getMonth() + 1,
      today.getFullYear(),
    ].join("-")}-Dylan-Phelan-Resume`,
  });

  return (
    <PageFadeWrapper>
      <div className="h-screen md:h-auto md:max-h-[97vh] w-full text-sm">
        <div ref={componentRef} className="relative overflow-clip mx-auto">
          <div
            id="contact-and-high-level "
            className="max-w-screen-xl flex flex-wrap px-4 my-0 py-4 xl:my-4 xl:py-0  mx-auto bg-primary xl:bg-neutral-main print:bg-neutral-main"
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
                className="absolute left-0 top-0 xl:mx-auto xl:relative  flex items-center justify-center w-[10rem] rounded border bg-primary transition-all xl:border-primary border-neutral-main text-neutral-main p-1 px-2 m-2 print:hidden hover:bg-neutral-main hover:text-primary "
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
                      <li
                        className="flex items-center px-2 py-1 basis-full sm:basis-1/2 animate__animated hover:animate__pulse"
                        key={link.id}
                      >
                        <a
                          target="_blank"
                          href={link.link}
                          rel="noopener noreferrer"
                        >
                          <link.Icon size={16} className="inline mr-2" />
                          {link.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </address>
              </div>
              <hr className="mb-4 h-1" />
              <p id="mission-statement" className="text-base print:text-sm">
                {aboutMe.elevatorPitch}
              </p>
            </div>
          </div>
          <div
            id="content"
            className=" max-w-screen-xl flex flex-wrap-reverse px-4 my-4 print:!mt-0 mx-auto text-primary bg-neutral-main"
          >
            <section className="basis-full xl:basis-1/4 print:basis-1/4 xl:pr-4 print:pr-4 flex flex-col sm:flex-row xl:flex-col print:!flex-col">
              <div className="pr-0 sm:pr-4 xl:pr-0 print:!pr-0 basis-auto sm:basis-1/2 xl:basis-auto print:!basis-auto">
                <h2 className="text-xl font-bold ">Education</h2>
                <hr className="w-full border-primary pb-4" />
                {education.map((edu) => (
                  <article
                    key={[edu.degree, edu.school].join("-")}
                    className="mb-4"
                  >
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
              <div className="sm:basis-1/2 xl:basis-auto print:!basis-auto">
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
                        skill={skill.name}
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
                          <div className="flex flex-col flex-1">
                            <h3 className="text-base font-bold mr-2">
                              {job.title}
                            </h3>
                            <p className="text-base italic">
                              {job.elevatorPitch}
                            </p>
                          </div>
                          <p className="text-base text-right flex-1 ">
                            {jobMetadata(job)}
                          </p>
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
                <h2 className="text-xl font-bold inline mr-2">Projects</h2>
                <div className="relative inline-block max-w-[16.25rem] md:max-w-max overflow-auto mb-[4px] bottom-[-11px] border-x border-t border-primary">
                  {skillAreas.map((curSkill) => {
                    return (
                      <p
                        key={curSkill}
                        className={
                          "cursor-pointer text-base inline border-primary border-r last-of-type:border-r-0 px-1 " +
                          (skillArea === curSkill && "font-bold")
                        }
                        onClick={() => setSkillArea(curSkill)}
                      >
                        {curSkill}
                      </p>
                    );
                  })}
                </div>
                <hr className="w-full border-primary pb-4" />
                {projects.map((project) => {
                  return (
                    <article
                      id={project.title}
                      className="mb-4 last-of-type:mb-4"
                      key={project.title}
                    >
                      <header>
                        <div className="w-full flex flex-row flex-wrap justify-start">
                          <div className="flex justify-between md:justify-start basis-full md:basis-1/2 text-base font-bold">
                            <h3 className="pr-2">{project.title}</h3>
                            {/* Links */}
                            <div className="flex flex-row ">
                              {project.links.map((link) => (
                                <a
                                  target="__blank"
                                  href={link.url}
                                  key={link.url}
                                  title={link.title}
                                  className="m-1 text-base font-bold animate__animated hover:animate__pulse"
                                >
                                  <link.Icon size={16} />
                                </a>
                              ))}
                            </div>
                          </div>
                          <p className="basis-full md:basis-1/2 text-base text-left md:text-right">
                            {projectMetadata(project)}
                          </p>
                        </div>
                        {/* Tags */}
                        <div className="w-full flex flex-col-reverse items-start md:flex-row md:flex-wrap md:justify-between md:items-center">
                          <p className="basis-full md:basis-1/2 text-base italic flex-1 pr-2">
                            {project.elevatorPitch}
                          </p>
                          <div className="basis-full md:basis-1/2 flex flex-1 flex-row flex-wrap items-center justify-start md:justify-end">
                            {project.tags.map((tag) => {
                              return (
                                <p
                                  id={tag}
                                  key={tag}
                                  className="inline px-2 py-1 mx-1 my-1 max-h-6 first-of-type:ml-0 rounded bg-primary-ultra-light text-primary text-xs "
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
    </PageFadeWrapper>
  );
}
