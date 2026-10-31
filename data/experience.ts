export type ExperienceEntry = {
  period: string;
  company: string;
  role: string;
  summary: string;
  projects: Array<{
    name: string;
    domain: string;
    role: string;
    technologies: string[];
    whatBuilt: string;
    engineeringProblem: string;
    impact: string;
  }>;
};

export const experience: ExperienceEntry[] = [
  {
    period: "CURRENT",
    company: "TATA CONSULTANCY SERVICES",
    role: "Software Engineer",
    summary:
      "Building scalable, production-ready AI applications for web and mobile platforms, with a focus on bringing GenAI models into real-world software.",
    projects: [
      {
        name: "Production AI Applications",
        domain: "AI SOFTWARE ENGINEERING",
        role: "Software Engineer",
        technologies: ["GenAI", "Web", "Mobile", "AI Integration"],
        whatBuilt:
          "Works on production-ready AI applications for web and mobile platforms and the integration of GenAI models into practical application workflows.",
        engineeringProblem:
          "Bridging the gap between AI models and dependable software that can be used in real-world products.",
        impact:
          "Combines software-engineering foundations with applied GenAI to move beyond prototypes toward deployable applications.",
      },
    ],
  },
  {
    period: "INTERNSHIP",
    company: "INDIAN SPACE RESEARCH ORGANISATION",
    role: "AI & Machine Learning Intern",
    summary:
      "Gained hands-on experience on AI and machine-learning projects during an internship at ISRO.",
    projects: [
      {
        name: "AI & Machine Learning Projects",
        domain: "RESEARCH EXPLORATION",
        role: "Intern",
        technologies: ["AI", "Machine Learning"],
        whatBuilt:
          "Contributed hands-on to AI and machine-learning project work during the internship.",
        engineeringProblem:
          "Applied AI and machine-learning methods in a research-oriented environment.",
        impact:
          "Built early practical experience that informs a continued focus on applied AI software engineering.",
      },
    ],
  },
];
