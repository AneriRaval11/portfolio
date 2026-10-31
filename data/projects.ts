export type Project = {
  id: string;
  order: number;
  name: string;
  oneLiner: string;
  problem: string;
  architecture: string;
  engineering: string;
  impact: string;
  technologies: string[];
  link: string;
  projectType: string;
};

export const projects: Project[] = [
  {
    id: "diabetes-hypothesis-testing",
    order: 1,
    name: "Lifestyle, Biology, and Socioeconomic Status in Diabetes",
    oneLiner:
      "A hypothesis-driven analysis of diabetes risk and blood-glucose control across 100,000 individual-level records.",
    problem:
      "Investigate behavioural, biological, and socioeconomic factors associated with HbA1c and diabetes diagnosis while making the limits of observational data explicit.",
    architecture:
      "Pre-specified hypotheses, statistical tests, effect sizes with confidence intervals, multiple-testing correction, equivalence tests, adjusted models, and cross-validated prediction.",
    engineering:
      "A reproducible Python analysis organized into data, notebooks, source utilities, generated tables, and figures, with a fixed random seed for cross-validation.",
    impact:
      "Demonstrates careful interpretation of associations, including data caveats and the limits of prediction when outcome-defining markers are included.",
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "Logistic Regression",
      "Hypothesis Testing",
      "Statistical Analysis",
    ],
    link: "https://github.com/AneriRaval11/diabetes-hypothesis-testing",
    projectType: "Pinned project",
  },
  {
    id: "scarab-dcc-detection",
    order: 2,
    name: "Deep Convective Cloud Detection in Megha-Tropiques Data",
    oneLiner:
      "A research prototype that evaluates unsupervised deep convective-cloud detection from Megha-Tropiques satellite observations.",
    problem:
      "Use SAPHIR brightness-temperature observations to establish a reference cloud flag, then evaluate whether an unsupervised model can recover it.",
    architecture:
      "Separate two-component Gaussian Mixture Models for near-nadir and off-nadir pixels, using incidence angle, SAPHIR channels, and a land/ocean mask.",
    engineering:
      "The repository includes a preprocessing notebook, reproduction script, gridding helpers, generated tables, and figures; satellite data stays outside the repository under source terms.",
    impact:
      "Documents measured recall and false-alarm rates alongside limitations, including same-orbit evaluation and the need for independent validation with ScaRaB data.",
    technologies: [
      "Python",
      "Gaussian Mixture Models",
      "scikit-learn",
      "Remote Sensing",
      "Unsupervised Learning",
    ],
    link: "https://github.com/AneriRaval11/scarab-dcc-detection",
    projectType: "Pinned project",
  },
  {
    id: "paperinsight",
    order: 3,
    name: "PaperInsight",
    oneLiner:
      "An AI-powered research companion for uploading academic PDFs, extracting knowledge, and asking context-aware questions.",
    problem:
      "Help students, researchers, and knowledge workers understand dense academic papers and technical reports without manually reading every page first.",
    architecture:
      "PDF text is extracted, split into chunks, embedded with Google Generative AI, stored in FAISS, and retrieved as context for Gemini answers.",
    engineering:
      "Built as an interactive Streamlit application with a local vector index and a plain-language question-and-answer workflow.",
    impact:
      "Turns documents into an interactive Q&A workspace with semantic retrieval and natural-language answers.",
    technologies: [
      "Python",
      "Streamlit",
      "LangChain",
      "FAISS",
      "Gemini",
      "PyPDF2",
    ],
    link: "https://github.com/AneriRaval11/PaperInsight",
    projectType: "Pinned project",
  },
  {
    id: "facial-emotion-recognition",
    order: 4,
    name: "Facial Emotion Recognition",
    oneLiner:
      "A deep-learning project for recognizing facial emotions from images with TensorFlow/Keras and OpenCV.",
    problem:
      "Build an end-to-end learning and inference pipeline that classifies emotions from facial images and supports real-time face detection.",
    architecture:
      "A MobileNetV2-style transfer-learning approach feeds dense layers and a seven-class softmax output for emotion classification.",
    engineering:
      "The notebook covers image preprocessing, CNN-based training, model saving and reuse, and webcam-oriented inference with OpenCV.",
    impact:
      "Creates a clear educational and research-oriented demonstration of computer-vision classification across seven emotion categories.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "MobileNetV2",
      "Computer Vision",
    ],
    link: "https://github.com/AneriRaval11/Facial_Emotion_Recognition",
    projectType: "Pinned project",
  },
  {
    id: "predictive-model-integration",
    order: 5,
    name: "Predictive Model Integration System",
    oneLiner:
      "A containerized purchase-prediction system connecting a Spring Boot API with a FastAPI machine-learning service.",
    problem:
      "Serve machine-learning predictions through a production-style API while keeping the Java application and Python model service independently deployable.",
    architecture:
      "Spring Boot accepts client requests and forwards data to FastAPI, which loads a scikit-learn logistic-regression model and returns the prediction.",
    engineering:
      "Docker Compose runs both services together, while GitHub Actions builds and publishes Docker images through a CI/CD pipeline.",
    impact:
      "Demonstrates an end-to-end polyglot microservice workflow for delivering a machine-learning model behind a clean REST API.",
    technologies: ["Java", "Spring Boot", "Python", "FastAPI", "scikit-learn", "Docker", "GitHub Actions"],
    link: "https://github.com/AneriRaval11/medium-predictive-model-integration-system-with-springboot",
    projectType: "Selected project",
  },
  {
    id: "notification-hub",
    order: 6,
    name: "NotificationHub",
    oneLiner:
      "A centralized Spring Boot service that processes notification events and routes them to delivery channels.",
    problem:
      "Provide a dependable notification-processing layer for email, SMS, and other downstream delivery services.",
    architecture:
      "Kafka-based event ingestion, delivery logging, template rendering, dead-letter topic support, and optional MongoDB integration.",
    engineering:
      "Built with Java, Spring Boot, Spring Kafka, Spring Data JPA, Docker, and a local H2 development setup.",
    impact:
      "Establishes an event-driven foundation for tracking and routing notification delivery across multiple channels.",
    technologies: ["Java 21", "Spring Boot", "Kafka", "JPA", "MongoDB", "Docker", "Microservices"],
    link: "https://github.com/AneriRaval11/NotificationHub",
    projectType: "Selected project",
  },
];
