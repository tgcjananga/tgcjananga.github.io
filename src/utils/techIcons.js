// src/utils/techIcons.js
import { Code2, Database, Cloud, Server, GitBranch, Container } from 'lucide-react';

export const getTechIcon = (tech) => {
  const iconMap = {
    // Programming Languages
    'Java': { icon: Code2, color: 'text-orange-500' },
    'Python': { icon: Code2, color: 'text-blue-400' },
    'JavaScript': { icon: Code2, color: 'text-yellow-400' },
    'C': { icon: Code2, color: 'text-blue-600' },
    
    // Web Frameworks
    'React.js': { icon: Code2, color: 'text-cyan-400' },
    'React Native': { icon: Code2, color: 'text-cyan-400' },
    'Node.js': { icon: Server, color: 'text-green-500' },
    'Express': { icon: Server, color: 'text-gray-400' },
    'Spring Boot': { icon: Server, color: 'text-green-600' },
    'Hibernate': { icon: Database, color: 'text-orange-600' },
    'Flask': { icon: Server, color: 'text-gray-300' },
    
    // ML & Data Science
    'scikit-learn': { icon: Code2, color: 'text-orange-400' },
    'PyTorch': { icon: Code2, color: 'text-red-500' },
    'GNN': { icon: Code2, color: 'text-purple-500' },
    'PCA': { icon: Code2, color: 'text-indigo-400' },
    't-SNE': { icon: Code2, color: 'text-indigo-400' },
    'UMAP': { icon: Code2, color: 'text-indigo-400' },
    'XGBoost': { icon: Code2, color: 'text-green-500' },
    'Azure ML': { icon: Cloud, color: 'text-blue-500' },
    
    // Databases
    'MongoDB': { icon: Database, color: 'text-green-500' },
    'MySQL': { icon: Database, color: 'text-blue-600' },
    
    // Cloud & AWS
    'AWS': { icon: Cloud, color: 'text-orange-500' },
    'AWS S3': { icon: Cloud, color: 'text-orange-500' },
    'AWS EC2': { icon: Cloud, color: 'text-orange-500' },
    'AWS Lambda': { icon: Cloud, color: 'text-orange-500' },
    'IoT Core': { icon: Cloud, color: 'text-orange-500' },
    
    // DevOps
    'Docker': { icon: Container, color: 'text-blue-500' },
    'Git': { icon: GitBranch, color: 'text-orange-600' },
    'GitHub Actions': { icon: GitBranch, color: 'text-gray-800' },
    'CI/CD': { icon: GitBranch, color: 'text-green-500' },
    'Kubernetes': { icon: Container, color: 'text-blue-600' },
    
    // APIs
    'OpenStreetMap API': { icon: Code2, color: 'text-blue-500' }
  };
  
  return iconMap[tech] || { icon: Code2, color: 'text-gray-400' };
};

export const getSkillIcon = (category) => {
  const categoryIcons = {
    'Programming': Code2,
    'Web Development': Server,
    'ML & Data Science': Code2,
    'Database & Cloud': Database,
    'DevOps & Tools': Container
  };
  
  return categoryIcons[category] || Code2;
};