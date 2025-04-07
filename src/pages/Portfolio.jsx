import { motion } from 'framer-motion';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "个人播客平台",
      description: "使用React开发的现代化播客平台，支持在线音频播放和互动社区功能。",
      image: "/images/podcast-platform.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      date: "2024-03"
    },
    {
      id: 2,
      title: "设计作品展示",
      description: "响应式网页设计作品集，展示了多个商业项目案例。",
      image: "/images/design-showcase.jpg",
      tags: ["UI/UX", "Responsive", "Design"],
      date: "2024-02"
    }
  ];

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1>作品集</h1>
        <p>展示我的创意项目</p>
      </div>
      
      <div className="portfolio-grid">
        {projects.map(project => (
          <motion.div 
            key={project.id} 
            className="portfolio-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            <div className="project-content">
              <h2 className="project-title">
                <i className="fas fa-project-diagram"></i> {project.title}
              </h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">
                    <i className="fas fa-tag"></i> {tag}
                  </span>
                ))}
              </div>
              <div className="project-date">
                <i className="far fa-calendar-alt"></i> {project.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;