import { motion } from 'framer-motion';
import './News.css';

function News() {
  const posts = [
    {
      id: 1,
      title: "新播客上线通知",
      content: "今天录制了一期关于人工智能的精彩节目，即将上线！期待与大家分享这期内容 🎉",
      timestamp: '2024-03-20',
      tag: '播客更新'
    },
    {
      id: 2,
      title: "特别来宾预告",
      content: "下周我们将邀请特别嘉宾做客直播间，敬请期待！🎤✨",
      timestamp: '2024-03-19',
      tag: '活动预告'
    }
  ];

  return (
    <div className="news-page">
      <div className="news-header">
        <h1>最新动态</h1>
        <p>分享我们的日常与创作历程</p>
      </div>

      <div className="news-feed">
        {posts.map(post => (
          <motion.div 
            key={post.id} 
            className="post"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="post-tag">
              <i className="fas fa-bookmark"></i> {post.tag}
            </div>
            <h2 className="post-title">
              <i className="fas fa-newspaper"></i> {post.title}
            </h2>
            <div className="post-content">
              <p>{post.content}</p>
            </div>
            <div className="post-timestamp">
              <i className="far fa-clock"></i> {post.timestamp}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default News; 