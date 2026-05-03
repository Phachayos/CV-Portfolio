// src/data/portfolio.js

export const skills = [
  { label: 'Python', icon: '🐍', category: 'Language' },
  { label: 'Java', icon: '☕', category: 'Language' },
  { label: 'C', icon: '⚡', category: 'Language' },
  { label: 'HTML / CSS / JS', icon: '🌐', category: 'Web' },
  { label: 'React', icon: '⚛️', category: 'Web' },
  { label: 'OpenClaw', icon: '🎮', category: 'Tool' },
  { label: 'ESP32 / Arduino', icon: '🔌', category: 'IoT' },
  { label: 'GitHub', icon: '🐙', category: 'Tool' },
  { label: 'Machine Learning', icon: '🤖', category: 'AI' },
  { label: 'REST APIs', icon: '🔗', category: 'Web' },
  { label: 'Blynk IoT', icon: '📡', category: 'IoT' },
  { label: 'SQL', icon: '🗄️', category: 'Database' },
  { label: 'Gemini', icon: '✨', category: 'Tool' },
  { label: 'Claude', icon: '🧠', category: 'Tool' },
];

export const projects = [
  {
    id: 1,
    title: 'CiRAKLS-AI',
    subtitle: 'AI Image Classification System',
    description:
      'An intelligent image classification system powered by deep learning. Trained on custom datasets to accurately identify and categorize images with high precision, leveraging Convolutional Neural Networks for feature extraction.',
    image: '/CV-Portfolio/project-cirakls.png',
    tags: ['Python', 'TensorFlow', 'CNN', 'OpenCV', 'Machine Learning'],
    github: 'https://www.youtube.com/watch?v=0L3mdcIk9NE',
    live: null,
    color: 'from-blue-500/20 to-violet-500/20',
    accent: '#3b82f6',
  },
  {
    id: 2,
    title: 'IoT Fire & Gas Alarm',
    subtitle: 'Smart Safety Monitoring System',
    description:
      'A real-time fire and gas detection system built with ESP32 microcontrollers and the Blynk IoT platform. Features instant mobile alerts, sensor dashboards, and automated emergency notifications.',
    image: '/CV-Portfolio/project-iot.png',
    tags: ['ESP32', 'Blynk', 'Arduino', 'IoT', 'C++'],
    github: 'https://github.com/Phachayos/IoT-Fire-Gas-Alarm.git',
    live: null,
    color: 'from-orange-500/20 to-red-500/20',
    accent: '#f97316',
  },
  {
    id: 3,
    title: 'PSU Shop System - Java OOP Documentation',
    subtitle: 'Advanced Object-Oriented Programming ',
    description:
      'A full-featured e-commerce application developed as an Object-Oriented Programming project in Java. Implements design patterns including MVC architecture, inheritance, and polymorphism for a scalable codebase.',
    image: './project-psu.png',
    tags: ['Java', 'OOP', 'MVC', 'JDBC', 'MySQL'],
    github: 'https://github.com/Phachayos/Java_Oraltest_PSU_SHOP.git',
    live: null,
    color: 'from-emerald-500/20 to-cyan-500/20',
    accent: '#10b981',
  },
  {
    id: 4,
    title: 'Meeting Room Booking',
    subtitle: 'Web-Based Reservation System',
    description:
      'A dynamic web application for managing meeting room reservations. Supports real-time availability checking, user authentication, calendar integration, and admin management of room inventory.',
    image: '/CV-Portfolio/project-meeting.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/Phachayos/CoC-Room-Booking.git',
    live: null,
    color: 'from-violet-500/20 to-pink-500/20',
    accent: '#8b5cf6',

  },
];

export const education = [
  {
    degree: 'Vocational Certificate in Computer Technician',
    short: 'Computer Tech',
    icon: '💻',
    university: 'Yala Technical College',
    location: 'Yala, Thailand',
    period: '2022 — 2025',
    gpa: null,
    highlights: [
      'Hardware Control Programming',
      'Computer Hardware Systems',
      'Microcontrollers & Electronics',
      'System Maintenance & Troubleshooting',
    ],
  },
  {
    degree: 'B.Eng. in Artificial Intelligence and System Engineering',
    short: 'AISE',
    icon: '⚙️',
    university: 'Prince of Songkla University',
    location: 'Phuket, Thailand',
    period: '2025 — Present ',
    gpa: null,
    highlights: [
      'Artificial Intelligence & Machine Learning',
      'System Engineering & IoT',
      'Software Development & Design Patterns',
      'Data Structures & Algorithms',
    ],
  }
];

export const contact = {
  email: 'Phachayosba@email.com',
  github: 'https://github.com/Phachayos',
  linkedin: 'https://linkedin.com/in/phachayos',
};
