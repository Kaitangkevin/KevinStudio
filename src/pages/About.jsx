import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>关于我们</h1>
        <p>探索 KevinStudio 的故事</p>
      </div>

      <div className="about-content">
        <motion.div 
          className="about-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="about-card">
            <i className="fas fa-microphone-alt"></i>
            <h2>我们的使命</h2>
            <p>致力于为听众带来高质量的播客内容，分享知识与见解，连接创意与技术。</p>
          </div>
        </motion.div>

        <motion.div 
          className="about-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="about-card">
            <i className="fas fa-users"></i>
            <h2>团队介绍</h2>
            <p>我们是一群热爱创作的年轻人，期待通过声音传递价值，用技术改变世界。</p>
          </div>
        </motion.div>

        <motion.div 
          className="about-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="about-card">
            <i className="fas fa-star"></i>
            <h2>我们的特色</h2>
            <p>专业的录音设备，独特的内容视角，创新的呈现方式，打造极致的听觉体验。</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;