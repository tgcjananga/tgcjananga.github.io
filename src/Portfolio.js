import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Award, Code, Briefcase, GraduationCap, Menu, X, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    'Programming': ['Java', 'Python', 'JavaScript', 'C'],
    'Web Development': ['React.js', 'Node.js', 'Express', 'Spring Boot', 'Hibernate'],
    'ML & Data Science': ['scikit-learn', 'PyTorch', 'GNN', 'PCA', 't-SNE', 'UMAP'],
    'Database & Cloud': ['MongoDB', 'MySQL', 'AWS S3', 'AWS EC2', 'AWS Lambda'],
    'DevOps & Tools': ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Kubernetes']
  };

  const projects = [
    {
      title: 'Data-Driven Methods for Comparative Metagenomics',
      type: 'Research Project',
      status: 'Ongoing',
      description: 'Comprehensive analysis of dimensionality reduction methods for metagenomics data. Implementing Graph Neural Networks for clustering with end-to-end evaluation pipeline.',
      tech: ['Python', 'PyTorch', 'GNN', 'scikit-learn'],
      highlights: ['Topology preservation metrics', 'GNN clustering', 'Published research (under review)']
    },
    {
      title: 'Vescueye – Real-Time Blood Flow Monitoring',
      type: 'Third Year Project',
      status: 'Nov 2024 – Jun 2025',
      description: 'Medical IoT solution for post-surgery monitoring with cloud-based infrastructure, real-time data transfer, and mobile notifications for doctors.',
      tech: ['React.js', 'React Native', 'Node.js', 'MongoDB', 'AWS', 'IoT Core'],
      highlights: ['CI/CD pipeline', 'Real-time monitoring', 'Medical IoT integration']
    },
    {
      title: 'TourMate – Smart Travel Companion',
      type: 'Second Year Project',
      status: 'Completed',
      description: 'Full-stack web application for intelligent trip planning with route scheduling and personalized recommendations.',
      tech: ['React.js', 'Spring Boot', 'MySQL', 'OpenStreetMap API'],
      highlights: ['Smart routing', 'API integration', 'User preference analysis']
    },
    {
      title: 'iHeart – Heart Disease Prediction',
      type: 'ML Project',
      status: 'Feb 2025 – Mar 2025',
      description: 'End-to-end MLOps pipeline with automated CI/CD, Flask web app, real-time inference, and interactive visualizations.',
      tech: ['Python', 'Flask', 'Azure ML', 'XGBoost', 'GitHub Actions'],
      highlights: ['MLOps lifecycle', 'Real-time inference', 'Feature importance analysis']
    }
  ];

  const achievements = [
    { title: 'Fourth Place', event: 'ACES Coders v10.0', detail: '04/500+ participants', year: '2025' },
    { title: 'Third Place', event: 'IEEE EMBS BioFusion AI/ML Hackathon', detail: 'Medical AI Challenge', year: '2026' },
    { title: 'Top 30 Teams', event: 'Asia Pacific Regional Contest', detail: 'Selected for Championship', year: '2025' }
  ];

  const experience = [
    {
      role: 'Undergraduate Teaching Assistant',
      organization: 'Dept. of Computer Engineering, UoP',
      period: 'Feb 2023 - Aug 2025',
      courses: ['Computing', 'Programming Methodology', 'Programming for Engineers I & II']
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              CJ
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 rounded-md"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-5xl font-bold shadow-2xl">
              CJ
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Chamuditha Jananga
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Software Engineer & ML Enthusiast
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Final year Computer Engineering student specializing in Full-Stack Development, 
            Cloud Computing, DevOps, and Machine Learning
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="https://github.com/tgcjananga" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <Github size={20} /> GitHub
            </a>
            <a href="https://linkedin.com/in/chamuditha-jananga" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="mailto:e20158@eng.pdn.ac.lk"
               className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors">
              <Mail size={20} /> Contact
            </a>
          </div>
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all shadow-lg hover:shadow-cyan-500/50"
          >
            View My Work <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <GraduationCap className="inline mr-3 text-cyan-400" size={36} />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">BSc Eng (Hons) in Computer Engineering</h4>
                  <p className="text-gray-400">University of Peradeniya</p>
                  <p className="text-gray-500">Feb 2022 - Present | GPA: 3.50/4.0</p>
                </div>
                <div>
                  <h4 className="font-semibold">G.C.E. Advanced Level</h4>
                  <p className="text-gray-400">Rahula College, Matara</p>
                  <p className="text-gray-500">District Rank: 64</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Experience</h3>
              {experience.map((exp, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="font-semibold text-lg">{exp.role}</h4>
                  <p className="text-gray-400">{exp.organization}</p>
                  <p className="text-gray-500 mb-2">{exp.period}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.courses.map((course, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-gray-700 rounded">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Code className="inline mr-3 text-cyan-400" size={36} />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-sm hover:from-cyan-600 hover:to-blue-600 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Briefcase className="inline mr-3 text-cyan-400" size={36} />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800/80 to-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full border border-cyan-500/30">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start">
                        <ChevronRight size={16} className="text-cyan-400 mr-1 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-600/20 text-blue-300 rounded border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Award className="inline mr-3 text-cyan-400" size={36} />
            Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">{achievement.title}</div>
                <h4 className="font-semibold text-lg mb-1">{achievement.event}</h4>
                <p className="text-gray-400 text-sm mb-2">{achievement.detail}</p>
                <p className="text-gray-500 text-sm">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <Mail className="inline mr-3 text-cyan-400" size={36} />
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm currently looking for opportunities in Software Engineering, ML, and Cloud Computing. 
            Let's connect!
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:e20158@eng.pdn.ac.lk"
              className="flex items-center justify-center gap-3 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all"
            >
              <Mail className="text-cyan-400" size={24} />
              <div className="text-left">
                <div className="text-sm text-gray-400">Email</div>
                <div className="font-semibold">e20158@eng.pdn.ac.lk</div>
              </div>
            </a>
            <a
              href="tel:+94712283012"
              className="flex items-center justify-center gap-3 p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all"
            >
              <Phone className="text-cyan-400" size={24} />
              <div className="text-left">
                <div className="text-sm text-gray-400">Phone</div>
                <div className="font-semibold">+94 712 283 012</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Chamuditha Jananga. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;