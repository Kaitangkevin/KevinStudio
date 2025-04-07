import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-subtitle">
              <i className="fas fa-code"></i> 欢迎来到我的博客
            </div>
            <h1 className="hero-title">
              我是Kevin，一名<span>创意开发者</span>和<span>幻想家</span>
            </h1>
            <p className="hero-description">
              这里是我的个人博客和作品集网站，记录我在技术、设计和生活中的所思所想。
              我们有更多的摄影创意和视频创意，欢迎大家来观看。
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="hero-button-primary">
                查看作品集 <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/about" className="hero-button-secondary">
                了解更多 <i className="fas fa-user"></i>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/名片.png" 
              alt="Hero Illustration" 
              style={{ borderRadius: '40px' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="section-header">
            <div className="section-subtitle">
              <i className="fas fa-star"></i> 我的专长
            </div>
            <h2 className="section-title">我能为您提供什么</h2>
            <p className="section-description">
              我们提供多个账号和平台来满足你对于音乐，科技，心理方面的需求。
            </p>
          </div>

          <div className="features-grid">
            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="feature-title">音乐博客</h3>
              <h1 className="feature-title">Sui言Sui语 - 哔哩哔哩</h1>
              <p className="feature-description">
                我们每周会更新两个音乐博客在Bilibili网站和喜马拉雅上，陪伴你的早晨时光。
              </p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3 className="feature-title">科技数码资讯</h3>
              <h1 className="feature-title">HiTec - 小红书</h1>
              <p className="feature-description">
                HiTec是我们的小红书科技数码资讯，我们会实时的更新科技数码的前瞻资讯和实时资讯。
              </p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3 className="feature-title">摄影作品</h3>
              <h1 className="feature-title">Pexel</h1>
              <p className="feature-description">
                我们会在pexel上分享我的摄影作品，并且支持大家来免费下载。
              </p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3 className="feature-title">BGM制作</h3>
              <h1 className="feature-title">Sui言Sui语 - 哔哩哔哩</h1>
              <p className="feature-description">
                为了保证我们的音乐博客和科技数码资讯的BGM质量，我们也会制作BGM，同时也是免费分享给大家。
              </p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <i className="fas fa-camera"></i>
              </div>
              <h3 className="feature-title">暖心信箱</h3>
              <h1 className="feature-title">guozijun_hezuo@153.com</h1>
              <p className="feature-description">
                我们在所有的账号上都同步了我们的暖心信箱，欢迎大家来信。
              </p>
            </motion.div>

            <motion.div 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="feature-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h3 className="feature-title">数字产品开发</h3>
              <h1 className="feature-title">KevinStudio - 微信工作号</h1>
              <p className="feature-description">
                我们也在不断的涉足数字产品的开发，同时包括APP，web，小程序，同时我们也会提供数字产品。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="recent-posts">
        <div className="recent-posts-container">
          <div className="recent-posts-header">
            <h2 className="recent-posts-title">最新博客文章</h2>
            <Link to="/blog" className="view-all-button">
              查看全部 <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

          <div className="blog-posts-grid">
            {/* Post 1 */}
            <motion.div 
              className="blog-post-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div 
                className="post-image" 
                style={{ backgroundImage: 'url(/images/blog/post-1.jpg)' }}
              ></div>
              <div className="post-content">
                <span className="post-category">科技数码</span>
                <h2>苹果公司指出因为美国政府的加税政策，可能会导致苹果产品涨价</h2>
                <p className="post-excerpt">
                  根据我们HiTec的估算，苹果公司会因为美国政府的加税举措，导致在美销售的苹果产品会增加售价。
                </p>
                <div className="post-meta">
                  <div className="post-date">
                    <i className="far fa-calendar"></i> 2025年4月6日
                  </div>
                  <Link to="/blog/react-state-management" className="read-more">
                    阅读更多 <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Post 2 */}
            <motion.div 
              className="blog-post-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="post-image" 
                style={{ backgroundImage: 'url(/images/blog/post-2.jpg)' }}
              ></div>
              <div className="post-content">
                <span className="post-category">BGM制作</span>
                <h2>2025年我们开始正式制作BGM</h2>
                <p className="post-excerpt">
                  如果大家需要可以直接在我们的哔哩哔哩平台或者是博客上直接收听。
                </p>
                <div className="post-meta">
                  <div className="post-date">
                    <i className="far fa-calendar"></i> 2025年4月6日
                  </div>
                  <Link to="/blog/ui-design-trends-2023" className="read-more">
                    阅读更多 <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Post 3 */}
            <motion.div 
              className="blog-post-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div 
                className="post-image" 
                style={{ backgroundImage: 'url(/images/blog/post-3.jpg)' }}
              ></div>
              <div className="post-content">
                <span className="post-category">摄影</span>
                <h2>我们在pexel平台增加了50个摄影作品</h2>
                <p className="post-excerpt">
                  你可以在我们的pexel平台上免费下载我们提供的摄影作品。
                </p>
                <div className="post-meta">
                  <div className="post-date">
                    <i className="far fa-calendar"></i> 2025年4月5日
                  </div>
                  <Link to="/blog/urban-photography-tips" className="read-more">
                    阅读更多 <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-shape-1"></div>
        <div className="newsletter-shape-2"></div>
        
        <div className="newsletter-container">
          <motion.div 
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="newsletter-title">订阅我的通讯</h2>
            <p className="newsletter-description">
              获取最新的博客文章、项目更新和独家内容，直接发送到您的收件箱。
              我保证不会发送垃圾邮件！
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                className="newsletter-input" 
                placeholder="输入您的邮箱地址" 
                required 
              />
              <button type="submit" className="newsletter-button">
                订阅
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;