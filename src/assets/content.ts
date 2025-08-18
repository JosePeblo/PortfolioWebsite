enum Category {
  AI = 'AI',
  GameDev = 'Game Development',
  IoT = 'Internet of things',
  WebDev = 'Web Development',
  Tools = 'Tools',
  MobileDev = 'Mobile Development',
}

interface ProjectCard {
  title: string;
  image: string;
  link: string;
  categories: Category[];
  tags: string[];
  featured: boolean;
  content: string;
}

const content: ProjectCard[] = [
  {
    title: "AI Caetec",
    image: "/src/assets/cows.png",
    link: "https://github.com/Amatt2-B/LauCows",
    categories: [],
    tags: ['ai', 'python'],
    featured: false,
    content: "Trained an AI object detection model for cattle monitoring at Tec de Monterrey's Experimental Agricultural Field (CAETEC), using the YOLOv8 architecture. Deployed the model locally on a Raspberry Pi with Python, PyTorch, and OpenCV for real-time detection and analytics.",
  },

  {
    title: "CML",
    image: "/src/assets/cml.png",
    link: "https://github.com/JosePeblo/cml",
    categories: [],
    tags: ['c++'],
    featured: false,
    content: "Developing a single-header C++ library for graphics oriented math operations. Implemented support for vectors, matrices, projections, and quaternions to facilitate 3D rendering and transformations.",
  },

  {
    title: "Shader Shop",
    image: "/src/assets/shader.png",
    link: "https://github.com/JosePeblo/ShaderShop",
    categories: [],
    tags: ['graphics', 'c++', 'opengl'],
    featured: false,
    content: "Built an image editor in C++ using ImGui and OpenGL to apply real-time shader effects and filters to images.",
  },

  {
    title: "RRO",
    image: "/src/assets/rro.jpg",
    link: "https://github.com/Roberto-Ruiz-Obregon-Tec/iOS-App",
    categories: [],
    tags: ['mobile dev', 'swift'],
    featured: false,
    content: "Developed a native iOS application using SwiftUI for the non-profit organization Roberto Ruiz Obregón. Worked as part of an agile team using the Scrum methodology.",
  },

  {
    title: "Plag Classifier",
    image: "/src/assets/PlagClassifier.png",
    link: "https://github.com/JosePeblo/PlagClassifier",
    categories: [],
    tags: ['ai', 'python'],
    featured: false,
    content: "Created a machine learning-based plagiarism detector for Java soruce code. Utilized the BERT transformer to generate sequence embeddings and classify code similarity with high accuracy.",
  },

  {
    title: "shoot2d",
    image: "/src/assets/shoot2d.png",
    link: "https://github.com/JosePeblo/shoot2d",
    categories: [],
    tags: ['game dev', 'typescript'],
    featured: false,
    content: "Developed a 2D multiplayer shooter game with custom client-server architecture. Used WebSockets to handle real-time multiplayer interactions.",
  },

  {
    title: "Ghost Run",
    image: "/src/assets/ghost.png",
    link: "https://github.com/JosePeblo/GhostRun",
    categories: [],
    tags: ['game dev', 'c++'],
    featured: false,
    content: "Designed and developed a 2D game in C++ with a UML-based class hierarchy. Implemented a game loop, sprite animations, and 2D collision detection mechanics.",
  },

  {
    title: "Food classifier",
    image: "/src/assets/food.png",
    link: "https://github.com/JosePeblo/inteligencia-artifical/tree/main/deep_learning",
    categories: [],
    tags: ['ai', 'python'],
    featured: false,
    content: "Trained a convolutional network (ResNet50) using Python and PyTorch to classify food images from a Kaggle dataset. Documented the full process, including data extraction, preprocessing, training and evaluation. Developed a Python script to run the model in real time using OpenCV and the device camera.",
  },

  {
    title: "Smart Growth",
    image: "/src/assets/smartg.png",
    link: "https://github.com/JosePeblo/SmartGrowth",
    categories: [],
    tags: ['iot', 'javascript', 'express', 'python'],
    featured: false,
    content: "Designed an IoT solution for a smart greenhouse system. Used a Raspberry Pi and Python to collect temperature and humidity data, and to control water pumps and ventilation. Stored data in a local SQLite database and created a web dashboard using Express and vanilla JavaScript for analytics and remote actuator control across multiple greenhouses.",
  },

  {
    title: "Multi-agent systems",
    image: "/src/assets/multiagents.png",
    link: "https://github.com/JosePeblo/",
    categories: [],
    tags: ['simulation', 'python', 'c#', 'unity'],
    featured: false,
    content: "Built a multi-agent simulation for pedestrians and vehicles using Python, NumPy, and AgentPy. Integrated pathfinding algorithms like A*, and developed a custom communication protocol over raw TCP sockets. Visualized the simulation in Unity via real-time data streaming using C#.",
  },

  {
    title: "Project Nexus",
    image: "/src/assets/projnexus.png",
    link: "https://github.com/alejandraa-cruiz/TC2005B-Equipo-/tree/main/ProjectNexus",
    categories: [],
    tags: ['web dev', 'express', 'javascript', 'mysql'],
    featured: false,
    content: "Developed a web application for agile project management. Integrated data from Jira to generate a custom dashboard that visually represents project in a more intuitive and accessible format.",
  },

  {
    title: "Community Yoga",
    image: "/src/assets/community.png",
    link: "https://community-dev-aira.web.app/",
    categories: [],
    tags: ['wev dev', 'react', 'firebase'],
    featured: false,
    content: "Designed and deployed a web application for a local yoga studio. Features included class scheduling, reservations, membership management, payments, and discount systems. Collaborated using the DAD (Disciplined Agile Delivery) methodology. Built the UI in React and deployed the application on Firebase using Firestore, Storage, Functions, and Authentication services.",
  },

];

export default content; 

