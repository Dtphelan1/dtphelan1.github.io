import { Globe, GitHub } from "react-feather";

const PROJECTTYPES = {
  work: "work",
  personal: "personal",
};

const projects = [
  {
    id: "mef",
    title: "mCODE Extraction Framework (MEF)",
    featured: true,
    role: "Tech Lead & Dev",
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
      "Built Node command line tool for translating healthcare data from proprietary formats to the minimal Common Oncology Data Elements (mCODE) standard, allowing for exchange and reuse of cancer patient data",
      "Designed a technical architecture enabling modularity across data sources and usecases",
      "Transformed data from proprietary healthsystem APIs and CSV files into mCODE standard",
      "Created, managed, and maintained 6+ GitHub repositories in support of multiple usecases",
      "Enabled MITRE's ICAREdata project to compare routine health data with clinical trial data",
    ],
    featuredTags: ["React", "Bootstrap", "Node", "FHIR"],
    tags: ["React", "Bootstrap", "Node", "FHIR"],
  },
  {
    id: "rttd",
    title: "Radiation Therapy Treatment Data (RTTD) App",
    featured: false,
    role: "Tech Lead & Web Dev",
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
      "Built a React app for reviewing data models for cancer radiation treatment summaries, enabling radiation data exchange for care coordination and multi-purpose reuse",
      "Used Axios to fetch data from FHIR servers and FHIRPath to isolate relevant data for visualizations ",
      "Conducted requirements solicitations from MITRE's RTTD team to enable pen/paper mockups",
      "Delivered initial prototype within 3 weeks, enabling rapid external stakeholder interviews",
      "Iterated application based on stakeholder feedback, supporting new request headers, reformatted visualizations, and better metadata displays",
    ],
    featuredTags: ["React", "Tailwind", "FHIR"],
    tags: ["React", "Tailwind", "FHIR"],
  },
  {
    id: "ssnmip",
    title: "Unemployment Benefits UI Prototype",
    featured: false,
    role: "Tech Lead & Web Dev",
    type: PROJECTTYPES["work"],
    date: "Mar - Sept 2022",
    links: [],
    elevatorPitch: "Streamline unemployment insurance benefits",
    bullets: [
      "Created Vue UI to enable research on improving user experience for accessing unemployment benefits",
      "Implemented Express API for creating, updating, and reviewing unemployment applications",
      "Distilled MVP requirements from EOY objectives and research team's experimental scenarios",
      "Balanced competing needs for a rapid prototype and potential use-case pivots",
    ],
    featuredTags: ["Vue", "Nuxt", "Tailwind", "Express"],
    tags: ["Vue", "Nuxt", "Tailwind", "Express"],
  },
  {
    id: "sjp",
    title: "MITRE's Social Justice Platform",
    featured: true,
    role: "Web Dev",
    type: PROJECTTYPES["work"],
    date: "Jan - Sept 2022",
    links: [
      {
        url: "https://sjp.mitre.org/",
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
      "Ported Streamlit and NumPy prototype to HTML/EJS aligned with sjp.mitre.org's design system",
      "Integrated Chart JS into our admin-authoring tools, visualizing data with bar and line charts",
      "Implemented markdown preview in resource-authoring and rendering on resource-detail views",
      "Implemented custom URLs on resources at the admin-authoring and page-routing level",
    ],
    featuredTags: ["Vue", "EJS", "NGINX", "Express"],
    tags: ["Vue", "EJS", "NGINX", "Express"],
  },
  {
    id: "icatt",
    title: "COVID-19 Free Testing Finder",
    featured: false,
    role: "Lead Web Dev",
    type: PROJECTTYPES["work"],
    date: "Oct 2021 - Jan 2022",
    links: [],
    elevatorPitch: "Find free COVID tests at ICATT-participating pharmacies ",
    bullets: [
      "Constructed a Vue application capable of finding free, nearby COVID-19 tests at pharmacies participating in CDC's Increasing Community Access To Testing (ICATT) program",
      "Collaborated with designer, tailoring Vue components/tailwind styles to high fidelity wireframes",
      "Utilized Open Street Maps and Leaflet for testing-site visualizations",
      "Integrated backend web service request-generating and response-parsing into frontend",
    ],
    featuredTags: ["Vue", "Tailwind", "Node", "Express", "Leaflet"],
    tags: ["Vue", "Tailwind", "Node", "Express", "Leaflet"],
  },
  {
    id: "flux-notes",
    title: "FluxNotes",
    featured: false,
    role: "Tech Lead & Dev",
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
      "Built a SMARTonFHIR React web application for reducing clinician burden collecting cancer data",
      "Leveraged SlateJs rich-text editor for inline suggestions and data tagging in clinical notes",
      "Visualized patient data with ReCharts and custom HTML visualizations",
      "Enabled data provenance tracking via linking to source notes and ElasticSearch document queries",
      "Received praise from oncologists and MITRE executives, motivating future research on novel data capture techniques",
    ],
    featuredTags: ["React", "Material UI", "SCSS", "FHIR"],
    tags: ["React", "Material UI", "SCSS", "FHIR"],
  },
  {
    id: "synthea",
    title: "Synthea Homepage",
    featured: false,
    role: "Lead Designer & Web Dev",
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
      "Constructed a HTML/JS site to spread awareness of Synthea, MITRE's healthcare data generation tool",
      "Conducted landscape assessment for similar single-page information pages in academic contexts",
      "Utilized Material Design and Bootstrap for component design and creation",
      "Facilitated the adoption of Synthea as the definitive tool for generating realistic but not real data in the FHIR community",
    ],
    featuredTags: ["HTML", "Material Design", "Bootstrap", "FHIR"],
    tags: ["HTML", "Material Design", "Bootstrap", "FHIR"],
  },
  {
    id: "shr",
    title: "Standard Health Record (SHR) Homepage",
    featured: false,
    role: "Lead Designer & Web Dev",
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
      "Constructed a HTML/JS site to spread awareness of the SHR, MITRE's standard health record initiative ",
      "Utilized Material Design and Bootstrap in the design of components",
      "Built tree diagram visualizations for exploring the structure of the standards 50+ data elements",
      "Project springboarded the development of MITRE's oncology data standard, mCODE, and many of the tools used therein",
    ],
    featuredTags: ["HTML", "Material Design", "Bootstrap", "FHIR"],
    tags: ["HTML", "Material Design", "Bootstrap", "FHIR"],
  },
  //////////////////////
  // PERSONAL PROJECTS
  {
    id: "bc-sort",
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
      "Relegates sold-out items to the bottom of the merch store's inventory, enhancing the bandcamp browsing experience",
      "Adds subtle transparency to sold-out items to indicate their absence",
      "Published extension on the Firefox add-on store",
    ],
    featuredTags: ["JavaScript", "web-ext"],
    tags: ["JavaScript", "web-ext"],
  },
  {
    id: "nyj-music",
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
      "Designed, constructed, and deployed a static-site for advertising local artist's multiple creative ventures",
      "Conducted stakeholder interview and landscape assessment of similar artists websites",
      "Solicited feedback on designs and mockups before executing final product",
      "Implemented and deployed website rapidly (48hrs) in-time for upcoming product launch",
    ],
    featuredTags: ["HTML", "Tailwind", "jQuery", "Vercel"],
    tags: ["HTML", "Tailwind", "jQuery", "Vercel"],
  },
  {
    id: "vsa",
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
      "Created a React webapp and Express backend showing voters how their representatives voted on town measures",
      "Visualized voting history of 100+ town representatives on ballot measures with React Table",
      "Organized a team of three devs to build the tool in 14 days, deploying before Arlington's election",
      "Garnered appreciation from multiple local representatives, >1000 visits during local election week",
    ],
    featuredTags: ["Sketch", "React", "Bootstrap", "Node"],
    tags: ["Sketch", "React", "Bootstrap", "Node"],
  },
  {
    id: "rcv",
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
    elevatorPitch: "Explore RCV's impact on representativeness",
    bullets: [
      "Implemented a React web application and Python Flask API for running RCV election simulations",
      "Designed mockups for defining input parameters and visualizing election outcomes",
      "Created Flask API for running and aggregating 4 types of RCV simulation",
      "Visualize outcomes across simulation types, showing RCV's impact on how voters are represented",
      "Built in collaboration with Moon Duchin and Tufts' Metric Geometry & Gerrymandering Group (MGGG)",
    ],
    featuredTags: ["Balsamiq", "React", "Bootstrap", "Python"],
    tags: ["Balsamiq", "React", "Bootstrap", "Python"],
  },
  {
    id: "elections-graph-theory",
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
      "Designed and implemented a React one-pager using Graph Theory to explore common frustrations in election outcomes",
      "Leveraged Tournaments and Ranked Voting to discuss Condorcet Winners, candidates who beat all others 1-on-1, and Condorcet Paradoxes, elections where every candidate loses to someone",
      "Visualized graphs of candidates using react-digraph & election outcomes using HTML tables",
    ],
    featuredTags: ["React", "Bootstrap", "SASS"],
    tags: ["React", "Bootstrap", "SASS"],
  },
  {
    id: "gerrymandering-mcmc",
    title: "Gerrymandering & Markov Chain Monte Carlo Simulation",
    featured: false,
    type: PROJECTTYPES["personal"],
    role: "Solo Project",
    date: "Spring 2020",
    links: [
      {
        url: "https://github.com/Dtphelan1/gerrymandering-mcmc",
        title: "Code",
        Icon: GitHub,
      },
    ],
    elevatorPitch:
      "Use graph theory and simulations to identify gerrymandering",
    bullets: [
      "Used markov chain monte carlo simulation to quantify how likely a voting district was gerrymandered",
      // "Implemented Tufts MGGG lab's ReCombination algorithm using Python to generate district maps",
      "Visualize frequency plot of simulated graphs' 'eccentricity' using matplotlib, showing outliership",
    ],
    featuredTags: ["Python", "matplotlib", "argparse"],
    tags: ["Python", "matplotlib", "argparse"],
  },
];

export { PROJECTTYPES, projects };
