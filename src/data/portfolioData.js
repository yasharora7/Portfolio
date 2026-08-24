export const PORTFOLIO_DATA = {
  personal: {
    name: "Yash Arora",
    initials: "YA",
    roles: [
      "Software Development Engineer (SDE)",
      "Software Developer",
      "Full-Stack Web Developer",
      "Problem Solver (500+ LeetCode)"
    ],
    tagline: "Computer Science Undergraduate passionate about software development, web applications, and solving algorithmic problems.",
    status: "Seeking Entry-Level Software Development Engineer (SDE) Roles",
    location: "Kanpur, UP, India (Open to Remote / Relocation)",
    email: "y79arora@gmail.com",
    phone: "+91-7991843017",
    github: "https://github.com/yasharora7",
    linkedin: "https://linkedin.com/in/yash-arora-631482260",
    twitter: "https://github.com/yasharora7",
    codepen: "https://github.com/yasharora7",
    bio: {
      story: "I am a Computer Science & Engineering undergraduate at Pranveer Singh Institute of Technology (PSIT), Kanpur. I specialize in software development, full-stack web applications, RESTful API design, and Data Structures & Algorithms. As an entry-level Software Development Engineer, I am eager to apply my programming skills, collaborate in engineering teams, and build reliable software solutions.",
      competencies: [
        { title: "Software Development & Architecture", desc: "Building full-stack web applications and backend API services using Java, Spring Boot, Node.js, and React." },
        { title: "Full-Stack Web Development", desc: "Building responsive frontends with React and backend APIs with Express & Node.js." },
        { title: "Data Structures & Algorithms", desc: "Solved 500+ coding problems on LeetCode & HackerRank with strong CS foundations." },
        { title: "Databases & Storage", desc: "Designing schemas and writing queries in MySQL, MongoDB, H2, and Redis." }
      ],
      philosophy: "As a fresh graduate, I focus on writing clean, readable, and well-structured code while continuously learning modern technologies.",
      values: [
        "Strong Foundation in Data Structures & Algorithms",
        "Writing Clean & Maintainable Code",
        "Collaborative & Eager Team Player",
        "Continuous Learning & Quick Tech Adoption"
      ]
    },
    stats: [
      { label: "DSA Problems Solved", value: "500+" },
      { label: "B.Tech CSE CGPA", value: "7.9" },
      { label: "Class XII CBSE", value: "88.66%" },
      { label: "GitHub Repositories", value: "14+" }
    ]
  },

  experience: [
    {
      id: "exp-1",
      role: "Software Engineering Project Developer",
      company: "Independent & Academic SDE Projects",
      location: "Kanpur, UP, India",
      period: "2023 - Present",
      description: "Designed, architected, and deployed scalable backend services, full-stack applications, and algorithmic systems.",
      achievements: [
        "Architected an offline UPI payment routing system utilizing mesh networking, RSA-2048 key exchange, and AES-256-GCM encryption.",
        "Engineered full-stack web platforms using Java, Spring Boot, Node.js, Express, React, and MySQL / MongoDB.",
        "Solved 500+ data structures and algorithms challenges across LeetCode and HackerRank."
      ]
    }
  ],

  themeAccents: [
    { id: "cyan", name: "Cyber Cyan", primary: "#06b6d4", secondary: "#3b82f6", glow: "rgba(6, 182, 212, 0.4)" },
    { id: "purple", name: "Royal Violet", primary: "#a855f7", secondary: "#ec4899", glow: "rgba(168, 85, 247, 0.4)" },
    { id: "emerald", name: "Emerald Synth", primary: "#10b981", secondary: "#06b6d4", glow: "rgba(16, 185, 129, 0.4)" },
    { id: "amber", name: "Sunset Gold", primary: "#f59e0b", secondary: "#ef4444", glow: "rgba(245, 158, 11, 0.4)" }
  ],

  skillCategories: [
    {
      id: "languages",
      title: "Programming Languages",
      icon: "Code2",
      skills: [
        { name: "Java (Core & OOP)", level: 92, icon: "Code2" },
        { name: "C / C++", level: 90, icon: "Code2" },
        { name: "JavaScript (ES6+) / TypeScript", level: 88, icon: "FileCode" },
        { name: "SQL", level: 88, icon: "Database" },
        { name: "HTML5 & CSS3", level: 90, icon: "Palette" }
      ]
    },
    {
      id: "webtech",
      title: "Web & Backend Frameworks",
      icon: "Server",
      skills: [
        { name: "Spring Boot & Java Frameworks", level: 90, icon: "Server" },
        { name: "Node.js & Express.js", level: 88, icon: "Server" },
        { name: "React.js", level: 88, icon: "Atom" },
        { name: "REST APIs & JWT Auth", level: 92, icon: "Network" },
        { name: "Hibernate / JPA", level: 85, icon: "Layers" },
        { name: "Maven & Build Tools", level: 86, icon: "Box" }
      ]
    },
    {
      id: "databases",
      title: "Databases & Storage",
      icon: "Database",
      skills: [
        { name: "MySQL", level: 88, icon: "Database" },
        { name: "MongoDB", level: 86, icon: "Layers" },
        { name: "H2 Database", level: 85, icon: "Database" },
        { name: "Redis Caching", level: 82, icon: "Cpu" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Fundamentals",
      icon: "Sparkles",
      skills: [
        { name: "Data Structures & Algorithms (DSA)", level: 92, icon: "Gauge" },
        { name: "Git & GitHub", level: 90, icon: "GitBranch" },
        { name: "Linux Basics", level: 82, icon: "Terminal" },
        { name: "DBMS & Computer Networks", level: 88, icon: "Network" }
      ]
    }
  ],

  projects: [
    {
      id: "offline-upi",
      title: "UPI without Internet",
      category: "Software Development",
      categoryLabel: "Java & Spring Boot",
      featured: true,
      image: "/images/project_offline_upi.png",
      summary: "Spring Boot–based offline UPI payment system leveraging mesh networking, RSA-2048, AES-256-GCM encryption, and SHA-256 packet fingerprinting.",
      fullDescription: "A Java Spring Boot offline UPI payment system designed for internet-free payment routing and settlement over local mesh networks. Protected with RSA-2048 key exchange, AES-256-GCM encryption, and idempotent transaction processing.",
      tags: ["Java", "Spring Boot", "Hibernate", "H2", "Maven", "REST APIs", "RSA/AES", "SHA-256"],
      demoUrl: "https://github.com/yasharora7",
      githubUrl: "https://github.com/yasharora7",
      highlights: [
        "Developed a Spring Boot–based offline UPI payment system leveraging mesh networking for internet-free transaction routing and settlement.",
        "Secured payment transmission using RSA-2048 key exchange and AES-256-GCM encryption, protecting transaction data from intermediary nodes.",
        "Prevented duplicate settlements through SHA-256–based packet fingerprinting and idempotent transaction processing.",
        "Implemented replay-attack and tampering defenses using nonce validation, timestamp checks, expiry verification, and authenticated encryption."
      ]
    },
    {
      id: "hotel-booking",
      title: "Hotel Booking Platform",
      category: "Full-Stack Web App",
      categoryLabel: "Full-Stack Project",
      featured: true,
      image: "/images/project_hotel_booking.png",
      summary: "A hotel booking web application with user authentication, room availability search, and reservation management.",
      fullDescription: "A full-stack hotel reservation project built with Node.js, Express, MySQL, and Redis. Allows users to search for hotel listings, check room availability in real-time, and manage booking reservations.",
      tags: ["Node.js", "Express.js", "JavaScript", "MySQL", "Redis", "REST APIs", "JWT"],
      demoUrl: "https://github.com/yasharora7",
      githubUrl: "https://github.com/yasharora7",
      highlights: [
        "Implemented user authentication using JWT tokens.",
        "Built hotel search and real-time room availability status features.",
        "Integrated Redis caching to improve search query response times.",
        "Created RESTful API endpoints and structured MySQL database tables."
      ]
    },
    {
      id: "food-delivery",
      title: "Full-Stack Food Delivery App",
      category: "Web Apps",
      categoryLabel: "Full-Stack & TypeScript",
      featured: true,
      image: "/images/project_food_delivery.png",
      summary: "A food delivery web application built with TypeScript, React, Express, and cart state management.",
      fullDescription: "A complete food ordering platform featuring interactive menu browsing, shopping cart management, user accounts, and checkout workflows.",
      tags: ["TypeScript", "React.js", "Node.js", "Express.js", "Tailwind CSS", "REST API"],
      demoUrl: "https://github.com/yasharora7/food_delivery_project",
      githubUrl: "https://github.com/yasharora7/food_delivery_project",
      highlights: [
        "Built type-safe web application using TypeScript.",
        "Created responsive UI for food menus and shopping cart calculations.",
        "Integrated RESTful API endpoints for menu items and order processing."
      ]
    },
    {
      id: "edge-detection",
      title: "Real-Time Edge Detection Viewer",
      category: "Mobile & Vision",
      categoryLabel: "Mobile App",
      featured: false,
      image: "/images/project_edge_detection.png",
      summary: "A mobile application processing real-time camera video feeds with edge detection filters.",
      fullDescription: "A mobile image processing app built in Kotlin. Applies real-time image filtering algorithms (Sobel/Canny edge detection) to live camera feeds.",
      tags: ["Kotlin", "Computer Vision", "OpenCV", "Android SDK"],
      demoUrl: "https://github.com/yasharora7/-Real-Time-Edge-Detection-Viewer",
      githubUrl: "https://github.com/yasharora7/-Real-Time-Edge-Detection-Viewer",
      highlights: [
        "Real-time video frame processing using camera feed pipelines.",
        "Adjustable controls for filter sensitivity.",
        "Built using native Kotlin for mobile Android devices."
      ]
    },
    {
      id: "slack-app",
      title: "Slack Workspace Messaging App",
      category: "Web Apps",
      categoryLabel: "Web App & Socket.IO",
      featured: false,
      image: "/images/project_slack_app.png",
      summary: "A real-time workspace messaging platform with chat channels and instant messaging.",
      fullDescription: "A team communication web app allowing users to join chat channels, send instant messages, and share text content in real-time.",
      tags: ["JavaScript", "Node.js", "Socket.IO", "React.js", "Express"],
      demoUrl: "https://github.com/yasharora7/Slack_message_app",
      githubUrl: "https://github.com/yasharora7/Slack_message_app",
      highlights: [
        "Real-time instant messaging using Socket.IO WebSockets.",
        "Channel creation and direct user messaging capabilities.",
        "Clean chat UI with user online presence status."
      ]
    },
    {
      id: "social-analyzer",
      title: "Social Media Content Analyzer",
      category: "Tools",
      categoryLabel: "Web App & Analytics",
      featured: false,
      image: "/images/project_social_analyzer.png",
      summary: "A web tool analyzing social media posts, engagement metrics, and sentiment trends.",
      fullDescription: "A content analysis tool that evaluates social post engagement metrics, sentiment feedback, and presents graphical summaries.",
      tags: ["JavaScript", "Node.js", "Express", "Chart.js"],
      demoUrl: "https://github.com/yasharora7/Social-media-content-analyzer",
      githubUrl: "https://github.com/yasharora7/Social-media-content-analyzer",
      highlights: [
        "Sentiment evaluation for user comments and posts.",
        "Dashboard charts for post interaction metrics.",
        "Backend REST API for data handling."
      ]
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Pranveer Singh Institute of Technology (PSIT), Kanpur",
      university: "Dr. A. P. J. Abdul Kalam Technical University (AKTU), Lucknow",
      period: "2022 - 2026",
      score: "CGPA: 7.9 / 10.0",
      description: "Studying core Computer Science subjects including Software Engineering, Data Structures, Algorithms, Database Systems, and Computer Networks.",
      highlights: [
        "Solved 500+ Algorithmic Problems on LeetCode & HackerRank",
        "Built web & software development projects with Spring Boot, Node.js, and React",
        "Active learner in core computer science concepts"
      ]
    },
    {
      id: "edu-2",
      degree: "Intermediate (Class XII) – CBSE",
      institution: "Maharishi Vidya Mandir Senior Secondary School, Sitapur",
      university: "Central Board of Secondary Education",
      period: "2021",
      score: "Percentage: 88.66%",
      description: "Completed Senior Secondary Education with Physics, Chemistry, and Mathematics.",
      highlights: [
        "Scored 88.66% in Class XII Board Examination"
      ]
    },
    {
      id: "edu-3",
      degree: "High School (Class X) – CBSE",
      institution: "Maharishi Vidya Mandir Senior Secondary School, Sitapur",
      university: "Central Board of Secondary Education",
      period: "2019",
      score: "Percentage: 86.00%",
      description: "Completed Secondary School Education.",
      highlights: [
        "Scored 86.00% in Class X Board Examination"
      ]
    }
  ],

  certifications: [
    {
      title: "Problem Solving Certificate",
      issuer: "HackerRank",
      description: "Verified problem solving competency in Data Structures & Algorithms."
    },
    {
      title: "Infosys Springboard Certification",
      issuer: "Infosys",
      description: "Certified proficiency in HTML, CSS, and JavaScript web fundamentals."
    },
    {
      title: "500+ Coding Problems Milestone",
      issuer: "LeetCode & HackerRank",
      description: "Solved 500+ algorithmic problems demonstrating strong problem-solving skills."
    }
  ]
};
