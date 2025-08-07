
const words = [
  { text: "Full-Stack Dev", imgPath: "/images/ideas.svg" },
  { text: "Robotics", imgPath: "/images/concepts.svg" },
  { text: "AI", imgPath: "/images/designs.svg" },
  { text: "Machine Learning", imgPath: "/images/code.svg" },
  { text: "Full-Stack Dev", imgPath: "/images/ideas.svg" },
  { text: "Robotics", imgPath: "/images/concepts.svg" },
  { text: "AI", imgPath: "/images/designs.svg" },
  { text: "Machine Learning", imgPath: "/images/code.svg" },
];


const projects = [
  {
    image: "/images/MyPortfolio.png",
    title: "My Portfolio WebPage",
    link: "https://github.com/Yun2828/MyPortfolio",
  },
  {
    image: "/images/realTimeChat.png",
    title: "Real Time Movie Chat",
    link: "https://github.com/Yun2828/Real-Time-Chat-Rooms/tree/master",
  },
  {
    image: "/images/stock.png",
    title: "Stock Price Prediction Model",
    link: "https://github.com/Yun2828/Stock-Price-Prediction",
  },
  {
    image: "/images/creditCard.png",
    title: "Credit Card Fraud Detection Model",
    link: "https://github.com/Yun2828/Credit-Card-Fraud-Detection",
  },
];

const cards = [
  {
    title: "My Portfolio Website",
    tech: "React.js, GSAP, Tailwind CSS, HTML",
    responsibilities: [
        "Designed and developed a fully responsive portfolio, enhancing user experience with scroll-triggered effects.",
        "Achieved 100% responsiveness across all devices and screen sizes.",
        "Enhanced accessibility and SEO by adhering to WCAG standards and scored 96 in Best Practices category.",
        "Implemented component-based architecture and abstracted separate static data folders to improve reusability."
    ]
  },
  {
    title: "Real Time Chat Rooms",
    tech: "JavaScript, Node.js, Express, Socket.IO , Moment.js, CSS, HTML",
    responsibilities: [
      "Built a full-stack real-time chat using Socket.IO and dynamic DOM updates using vanilla JavaScript to enable bidirectional websocket communication, reducing message latency by 95% with zero page reloads.",
      "Implemented server-side routing with Express.js and Nodemon for automatic server restarts.",
      "Utilized modular architecture with components to improve reusability and reduce debugging time.",
    ]
  },
  {
    title: "Stock Price Prediction Model",
    tech: "Python, TensorFlow, Keras, Pandas, NumPy, Scikit-learn, Matplotlib",
    responsibilities: [
      "Applied TensorFlow and Keras API to predict stock prices with an error (RMSE) less than 5.",
      "Utilized Matplotlib to conduct Exploratory Data Analysis on 9 companies, Pandas to manipulate datasets and Numpy to vectorize the data, using a sliding 60-day window to improve runtime and reshape the data into 3D format for LSTM.",
      "Trained a 5-layer Long Short-Term Memory (LSTM) model and predicted the stock price by randomly dropping out half of the neurons to reduce overfitting and optimized with Adam optimizer to reduce model loss by 15%.",
       ]
  },
  {
    title: "Credit Card Fraud Detection Model",
    tech: "Python, Seaborn, Pandas, NumPy, Scikit-learn, Matplotlib",
    responsibilities: [
        "Trained a fraud detector using Random Forest Classifier, achieving 97.47% precision score with 87.01% balance between precision and recall on an imbalanced dataset of transactions, measured by Scikit-learn metrics module.",
        "Utilized Pandas and Numpy to find correlation matrix and visualized data correlations using Matplotlib and Seaborn to uncover negative correlations patterns and confusion matrix, identifying false positives and negative cases. "
        ]
  },
]

const skillCategories = [
  {
    title: "Languages",
    skills: [
      "Java", "Python", "JavaScript", "HTML", "CSS", "Node.js", "React.js", "C++", "PostgreSQL"
    ]
  },
  {
    title: "Frameworks / Tools",
    skills: [
      "Git", "GitHub", "Agile", "Tailwind CSS", "Express", "LangChain", "Hugging Face", "APIs", "Nodemon", "Jupyter Notebook"
    ]
  },
  {
    title: "Libraries",
    skills: [
      "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Socket.io", "Moment.js"
    ]
  },
  {
    title: "Concepts",
    skills: [
      "NLP", "LLM", "Transformers"
    ]
  }
];

const certifications = [
  {
    title: "Full-Stack Web Development Certificate",
    image: "/images/fullStackDev.jpg",
    link: "https://www.udemy.com/certificate/UC-6f25ead6-51da-4a9a-942b-c4fb010c528c/"
  },
  {
    title: "The AI Engineer Certificate",
    image: "/images/AiEng.jpg",
    link: "https://www.udemy.com/certificate/UC-b2a1634f-20f7-4643-8867-618b1432d3a3/"
  }
];

const navItems = [
  { id: "hero", label: "Home" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume", download: true },
  { id: "timeline", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export {
  words,
  projects,
  cards,
  skillCategories,
  certifications,
  navItems,
};
