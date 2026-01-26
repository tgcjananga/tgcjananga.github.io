// src/data/portfolioData.js
export const personalInfo = {
  name: 'Chamuditha Jananga',
  initials: 'Chamuditha Jananga',
  title: 'Software Engineer & DevOps Enthusiast',
  description: 'Final year Computer Engineering student specializing in Full-Stack Development, Cloud Computing, DevOps, and Machine Learning',
  email: 'e20158@eng.pdn.ac.lk',
  phone: '+94 712 283 012',
  github: 'https://github.com/tgcjananga',
  linkedin: 'https://linkedin.com/in/chamuditha-jananga'
};

export const education = [
  {
    degree: 'BSc Eng (Hons) in Computer Engineering',
    institution: 'University of Peradeniya',
    period: 'Feb 2022 - Present',
    gpa: '3.50/4.0'
  },
  {
    degree: 'G.C.E. Advanced Level',
    institution: 'Rahula College, Matara',
    achievement: 'District Rank: 64'
  }
];

export const experience = [
  {
    role: 'Undergraduate Teaching Assistant',
    organization: 'Dept. of Computer Engineering, UoP',
    period: 'Feb 2023 - Aug 2025',
    courses: ['Computing', 'Programming Methodology', 'Programming for Engineers I & II']
  }
];

export const skills = {
  'Programming': ['Java', 'Python', 'JavaScript', 'C'],
  'Web Development': ['React.js', 'Node.js', 'Express', 'Spring Boot', 'Hibernate'],
  'ML & Data Science': ['scikit-learn', 'PyTorch', 'GNN', 'PCA', 't-SNE', 'UMAP'],
  'Database & Cloud': ['MongoDB', 'MySQL', 'AWS S3', 'AWS EC2', 'AWS Lambda', 'Azure ML', 'AWS IoT Core','AWS LightSail'],
  'DevOps & Tools': ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Kubernetes']
};

export const projects = [
  {
    title: 'Data-Driven Methods for Comparative Metagenomics',
    type: 'Research Project',
    status: 'Ongoing',
    description: 'Comprehensive analysis of dimensionality reduction methods for metagenomics data. Implementing Graph Neural Networks for clustering with end-to-end evaluation pipeline.',
    tech: ['Python', 'PyTorch', 'GNN', 'scikit-learn'],
    highlights: ['Topology preservation metrics', 'GNN clustering', 'Published research (under review)'],
    image: '/images/projects/metagenomics.jpg',
    gradient: 'from-purple-600/20 to-pink-600/20',
    borderGradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Vescueye – Real-Time Blood Flow Monitoring',
    type: 'Third Year Project',
    status: 'Nov 2024 – Jun 2025',
    description: 'Medical IoT solution for post-surgery monitoring with cloud-based infrastructure, real-time data transfer, and mobile notifications for doctors.',
    tech: ['React.js', 'React Native', 'Node.js', 'MongoDB', 'AWS', 'IoT Core'],
    highlights: ['CI/CD pipeline', 'Real-time monitoring', 'Medical IoT integration'],
    image: '/images/projects/vescueye.jpg',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    borderGradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'TourMate – Smart Travel Companion',
    type: 'Second Year Project',
    status: 'Completed',
    description: 'Full-stack web application for intelligent trip planning with route scheduling and personalized recommendations.',
    tech: ['React.js', 'Spring Boot', 'MySQL', 'OpenStreetMap API'],
    highlights: ['Smart routing', 'API integration', 'User preference analysis'],
    image: '/images/projects/tourmate.jpg',
    gradient: 'from-green-600/20 to-emerald-600/20',
    borderGradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'iHeart – Heart Disease Prediction',
    type: 'ML Project',
    status: 'Feb 2025 – Mar 2025',
    description: 'End-to-end MLOps pipeline with automated CI/CD, Flask web app, real-time inference, and interactive visualizations.',
    tech: ['Python', 'Flask', 'Azure ML', 'XGBoost', 'GitHub Actions'],
    highlights: ['MLOps lifecycle', 'Real-time inference', 'Feature importance analysis'],
    image: '/images/projects/iheart.jpg',
    gradient: 'from-red-600/20 to-rose-600/20',
    borderGradient: 'from-red-500 to-rose-500'
  }
];

export const achievements = [
  { 
    title: 'Fourth Place', 
    event: 'ACES Coders v10.0', 
    detail: '04/500+ participants', 
    year: '2025',
    color: 'from-yellow-500 to-orange-500'
  },
  { 
    title: 'Third Place', 
    event: 'IEEE EMBS BioFusion AI/ML Hackathon', 
    detail: 'Medical AI Challenge', 
    year: '2026',
    color: 'from-cyan-500 to-blue-500'
  },
  { 
    title: 'Top 30 Teams', 
    event: 'Asia Pacific Regional Contest', 
    detail: 'Selected for Championship', 
    year: '2025',
    color: 'from-purple-500 to-pink-500'
  }
];