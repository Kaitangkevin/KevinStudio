import { motion } from 'framer-motion';
import './Blog.css';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "React开发技巧分享",
      summary: "分享一些React开发中常用的优化技巧和最佳实践，帮助开发者提升代码质量和性能。",
      date: "2024-03-20",
      category: "技术",
      readTime: "10 分钟阅读"
    },
    {
      id: 2,
      title: "设计思维与用户体验",
      summary: "探讨如何将设计思维应用到实际项目中，创造更好的用户体验。",
      date: "2024-03-18",
      category: "设计",
      readTime: "8 分钟阅读"
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>博客文章</h1>
        <p>分享技术与设计的思考</p>
      </div>
      
      <div className="blog-grid">
        {blogPosts.map(post => (
          <motion.div 
            key={post.id} 
            className="blog-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="blog-category">{post.category}</div>
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-summary">{post.summary}</p>
            <div className="blog-meta">
              <span className="blog-date">
                <i className="far fa-calendar-alt"></i> {post.date}
              </span>
              <span className="blog-readtime">
                <i className="far fa-clock"></i> {post.readTime}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Blog;