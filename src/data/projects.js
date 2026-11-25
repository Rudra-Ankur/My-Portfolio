// Each project is one object. Pages build their cards from this list with map().
export const projects = [
  {
    id: "ats-resume-analyser",
    title: "ATS Resume Analyser",
    category: "Python",
    tags: ["Python", "Streamlit", "MySQL", "scikit-learn"],
    description:
      "Reads PDF and DOCX resumes and gives an explainable ATS score out of 100. It matches a resume against a job description, lists missing skills, and detects whether the resume is for BPO or tech roles. Every analysis is saved to MySQL.",
    github: "https://github.com/Rudra-Ankur/ATS-AI-Resume-Analyser",
  },
  {
    id: "kmap-minimizer",
    title: "K-Map Logic Minimizer",
    category: "JavaScript",
    tags: ["JavaScript", "Digital logic"],
    description:
      "An interactive tool that simplifies Boolean expressions using Karnaugh Maps, built to practise Boolean algebra and digital logic design.",
    github: "https://github.com/Rudra-Ankur", // TODO: replace with the repo link
  },
];
