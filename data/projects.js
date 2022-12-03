import { Globe, GitHub } from "react-feather";

const PROJECTTYPES = {
  work: "work",
  personal: "personal",
};

const workProjects = [
  {
    title: "mCODE Extraction Framework (MEF)",
    featured: true,
    role: "Technical Lead & Developer",
    type: PROJECTTYPES["work"],
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
    elevatorPitch: "Bridge current cancer data to emerging data standard",
    bullets: [
      "Built Node CLI for translating healthcare data from proprietary formats to FHIR's minimal Common Oncology Data Elements (mCODE) standard",
      "Designed a technical architecture enabling modularity across data sources and usecases",
      "Extracted data from proprietary web APIs, and from CSV files either on disk or served over HTTP",
      "Created and maintained 6+ other github repositories in support of 3 separate usecases",
      "Enabled MITRE's ICAREdata project to analyze health system clinical trial data extracted by MEF",
    ],
    tags: ["React", "Bootstrap", "Node", "FHIR"],
  },
  {
    title: "Radiation Therapy Treatment Data (RTTD) App",
    featured: false,
    role: "Technical Lead & Web Dev",
    type: PROJECTTYPES["work"],
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
      "Developed React web application using Axios to fetch & render RTTD data from FHIR servers",
      "Conducted requirements solicitations from MITRE's RTTD team",
      "Delivered initial prototype within 3 weeks, enabling the team's external stakeholder interviews",
      "Iterated application based on stakeholder feedback, supporting new request headers, reformatted visualizations, and metadata displays",
    ],
    tags: ["React", "Tailwind", "FHIR"],
  },
  {
    title: "Unemployment Benefits UI Prototype",
    featured: false,
    role: "Technical Lead & Web Dev",
    type: PROJECTTYPES["work"],
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
    featured: true,
    role: "Web Dev",
    type: PROJECTTYPES["work"],
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
      "Ported Python NumPy and Streamlit code to HTML/JS, aligning visualizations and input controls to our design language",
      "Integrated Chart JS into our admin-authoring tools, visualizing data with bar and line charts",
      "Supported markdown preview in resource authoring and rendering on resource detail views",
      "Implemented custom URLs for resources at the admin-authoring and routing level",
    ],
    tags: ["Vue", "EJS", "NGINX", "Express"],
  },
  {
    title: "COVID-19 Free Testing Finder",
    featured: false,
    role: "Lead Web Developer",
    type: PROJECTTYPES["work"],
    date: "Oct 2021 - Jan 2022",
    links: [],
    elevatorPitch: "Find free COVID tests at ICATT-participating pharmacies ",
    bullets: [
      "Constructed a Vue application capable of finding free, nearby COVID-19 tests at pharmacies participating in CDC's Increasing Community Access To Testing (ICATT) program.",
      "Collaborated with designer to tailor Vue components and tailwind styling to high fidelity wireframes",
      "Utilized Open Street Maps and Leaflet for testing site visualization",
      "Integrated backend web service request generating and response parsing into frontend",
      "Transitioned complete web application to sponsor for integration into their deployment environemnt",
      // TODO
    ],
    tags: ["Vue", "Tailwind", "Node", "Express", "Leaflet"],
  },
  {
    title: "FluxNotes",
    featured: false,
    role: "Technical Lead & Developer",
    type: PROJECTTYPES["work"],
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
    title: "Synthea Homepage",
    featured: false,
    role: "Lead Designer and Web Dev",
    type: PROJECTTYPES["work"],
    date: "2017",
    links: [
      {
        url: "https://synthetichealth.github.io/synthea/",
        title: "Synthea Website",
        Icon: Globe,
      },
    ],
    elevatorPitch: "Generate free, synthetic, & realistic patient data easily",
    bullets: [
      "Constructed a simple HTML/JS site to spread awareness of MITRE's healthcare data generation tool, Synthea",
      "Conducted landscape assessment for similar single-page information pages in academic contexts",
      "Utilized Material Design and Bootstrap in the design of components",
      "Facilitated the adoption of Synthea as the definitive tool for generating realistic but not real data in the FHIR community",
      // TODO
    ],
    tags: ["HTML", "Material Design", "Bootstrap", "FHIR"],
  },
  {
    title: "MITRE's Standard Health Record Homepage",
    featured: false,
    role: "Lead Designer and Web Dev",
    type: PROJECTTYPES["work"],
    date: "2016",
    links: [
      {
        url: "http://standardhealthrecord.org/",
        title: "Standard Health Record Website",
        Icon: Globe,
      },
    ],
    elevatorPitch:
      "Sparking community engagement in healthcare standards development",
    bullets: [
      "Constructed a simple HTML/JS site to spread awareness of MITRE's standard health record, SHR",
      "Conducted landscape assessment for similar single-page information pages in academic contexts",
      "Utilized Material Design and Bootstrap in the design of components",
      "Facilitated the adoption of Synthea as the definitive tool for generating realistic but not real data in the FHIR community",
      // TODO
    ],
    tags: ["HTML", "Material Design", "Bootstrap", "FHIR"],
  },
];

const personalProjects = [
  {
    title: "Sorting out Bandcamp Merch",
    featured: false,
    type: PROJECTTYPES["personal"],
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
    featured: false,
    type: PROJECTTYPES["personal"],
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
  {
    title: "Vote Smart Arlington",
    featured: true,
    type: PROJECTTYPES["personal"],
    role: "Lead Designer & Web Dev",
    date: "Apr 2021 ",
    links: [
      {
        url: "https://www.votesmartarlington.com/#/",
        title: "Vote Smart Arlington Website",
        Icon: Globe,
      },
      {
        url: "https://github.com/dtphelan1/arlington-ma-town-member-voting",
        title: "Vote Smart Arlington Code",
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
    featured: false,
    type: PROJECTTYPES["personal"],
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
    title: "Elections and Tournaments",
    featured: false,
    type: PROJECTTYPES["personal"],
    role: "Solo Project",
    date: "Summer 2020",
    links: [
      {
        url: "https://dtphelan1.github.io/elections/ ",
        title: "Website",
        Icon: Globe,
      },
      {
        url: "https://github.com/Dtphelan1/elections",
        title: "Code",
        Icon: GitHub,
      },
    ],
    elevatorPitch: "Explain frustrating voting patterns with graph theory",
    bullets: [
      "Built a React-powered one-pager using Graph Theory to explore frustrations with First Past the Post voting",
      "Leveraged 'tournaments' as a mechanism of Explored ",
      "Garnered appreciation from multiple local representatives, >1000 visits during local election week",
    ],
    tags: ["React", "Bootstrap", "SASS"],
  },
  {
    title: "Gerrymandering & Markov Chain Monte Carlo Simulation",
    featured: false,
    type: PROJECTTYPES["personal"],
    role: "Solo Project",
    date: "Spring 2020",
    links: [
      {
        url: "https://dtphelan1.github.io/elections/ ",
        title: "Website",
        Icon: Globe,
      },
      {
        url: "https://github.com/Dtphelan1/elections",
        title: "Code",
        Icon: GitHub,
      },
    ],
    elevatorPitch: "Use graphs and simulation to identify gerrymandering",
    bullets: [
      "Used markov chain monte carlo simulation to quantifying the likelihood a voting district map is gerrymandered",
      "Replicated Tufts' MGGG lab's ReCombination algorithm using Python to generate new district maps",
      "Visualize frequency plot of simulated graph 'eccentricity' using matplotlib to show outliership",
    ],
    tags: ["Python", "matplotlib", "argparse"],
  },
];

export { PROJECTTYPES, workProjects, personalProjects };
