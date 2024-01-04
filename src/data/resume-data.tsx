import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import MennaPhoto from "../images/profile.jpg"; // Replace with the actual path

import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Menna Fateen",
  initials: "MF",
  location: "Fukuoka, Japan",
  about: "Experienced Machine Learning Engineer. PhD Student at Kyushu University. Currently interested in NLP applications in Educational Technology. ",
  avatarUrl: MennaPhoto,
  personalWebsiteUrl: "https://mennafateen.github.io", // Replace with your personal website URL
  summary: "Hey there! I'm a PhD student at Kyushu University in Japan, currently working on the application of Natural Language Processing (NLP) techniques to educational technology. I have experience building and launching Deep Learning models in the real world. And that's what I'm passionate about: building things that make a difference. I'm all about bringing research to life and making things user-friendly. Let's chat about any exciting projects or collaborations – I'm always up for a challenge!",

  contact: {
    email: "menna.fateen@gmail.com",
    tel: "(+81)090-3940-0353",
    social: [
      {
        name: "LinkedIn",
        url: "http://linkedin.com/in/menna-fateen",
        icon: LinkedInIcon, // Add LinkedInIcon component if needed
      },
      {
        name: "GitHub",
        url: "http://github.com/mennafateen",
        icon: GitHubIcon, // Add GitHubIcon component if needed
      },
    ],
  },

  education: [
    {
      school: "Graduate School of Information Science and Electrical Engineering, Kyushu University",
      degree: "PhD in Intelligent Information Systems Engineering",
      start: "April 2022",
      end: "Ongoing",
    },
    {
      school: "Graduate School of Information Science and Electrical Engineering, Kyushu University",
      degree: "MSc in Intelligent Information Systems Engineering",
      start: "Oct 2019",
      end: "February 2022",
    },
    {
      school: "Faculty of Computers and Artificial Intelligence, Cairo University",
      degree: "BSc in Computer Science",
      start: "Oct 2014",
      end: "June 2018",
    },
    {
      school: "Al-Hoda International School",
      degree: "International General Certificate of Secondary Education",
      start: "September 2011",
      end: "July 2014",
    },
  ],

  work: [
    {
      company: "Line Yahoo Communications",
      title: "Machine Learning Engineer Intern",
      badges:["ML Engineering"],
      location: "Fukuoka, Japan",
      start: "August 2023",
      end: "November 2023",
      description: "Worked on projects involving Python and Computer Vision.",
    },
    {
      company: "ISEE, Kyushu University",
      title: "Research Assistant at Mine Lab",
      badges: ["Research"],
      location: "Fukuoka, Japan",
      start: "August 2020",
      end: "April 2022",
      description: "Worked on various NLP projects using Python and Pytorch for Educational Data Mining.",
    },
    {
      company: "UC - IT Solution Center",
      title: "Software Developer Intern",
      badges: ["Software Engineering"],
      location: "Ohio, USA",
      start: "July 2017",
      end: "September 2017",
      description: "Built a cross-platform mobile application using Cordova, NodeJs, and jQuery.",
    },
  ],

  skills: [
    "Python",
    "Pytorch",
    "Git",
    "JavaScript",
    "SQL",
    "LaTeX",
    "Scikit-learn",
    "Pandas",
  ],

  projects: [
    // Add your projects if needed
  ],

  publications: [
    {
      title: "In-Context Meta-Learning vs. Semantic Score-Based Similarity: A Comparative Study in Arabic Short Answer Grading",
      authors: ["Menna Fateen, ", "Tsunenori Mine "],
      venue: "ArabicNLP 2023 - EMNLP 2023",
      year: 2023,
      month: "December",
      badges: [],
      url: "https://aclanthology.org/2023.arabicnlp-1.28.pdf",
      description: "",
    },
    {
      title: "Using Similarity Learning with SBERT to Optimize Teacher Report Embeddings for Academic Performance Prediction",
      authors: ["Menna Fateen, ", "Tsunenori Mine "],
      venue: "International Conference on Artificial Intelligence in Education 2023",
      year: 2023,
      month: "July",
      badges: [],
      url: "https://www.researchgate.net/publication/372019091_Using_Similarity_Learning_with_SBERT_to_Optimize_Teacher_Report_Embeddings_for_Academic_Performance_Prediction",
      description: "",
    },
    {
      title: "Extraction of Useful Observational Features from Teacher Reports for Student Performance Prediction",
      authors: ["Menna Fateen, ", "Tsunenori Mine "],
      venue: "International Conference on Artificial Intelligence in Education 2022",
      year: 2020,
      badges: [],
      url: "https://www.researchgate.net/publication/362275925_Extraction_of_Useful_Observational_Features_from_Teacher_Reports_for_Student_Performance_Prediction",
      description: "",
    },
    {
      title: "An Improved Model to Predict Student Performance using Teacher Observation Reports",
      authors: ["Menna Fateen, ", "Kyouhei Ueno, ", "Tsunenori Mine "],
      venue: "International Conference on Computers in Education 2021",
      year: 2021,
      month: "November",
      badges: [],
      url: "https://icce2021.apsce.net/wp-content/uploads/2021/12/ICCE2021-Vol.I-PP.-31-40.pdf",
      description: "",
    },
    {
      title: "Predicting Student Performance Using Teacher Observation Reports",
      authors: ["Menna Fateen, ", "Tsunenori Mine "],
      venue: "Educational Data Mining 2021",
      year: 2021,
      badges: [],
      url: "https://eric.ed.gov/?id=ED615587",
      description: "",
    },
  ],

  languages: ["English", "Arabic", "Japanese"],
} as const;

