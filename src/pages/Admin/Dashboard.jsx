import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('blog');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem('adminAuth');
    if (!isAuth) {
      navigate('/admin');
    }
  }, [navigate]);

  const [blogPost, setBlogPost] = useState({
    title: '',
    summary: '',
    category: '',
    audioUrl: ''
  });

  const [portfolioItem, setPortfolioItem] = useState({
    title: '',
    description: '',
    image: '',
    tags: ''
  });

  const [newsPost, setNewsPost] = useState({
    content: ''
  });

  // 添加图片预览状态
  const [imagePreview, setImagePreview] = useState(null);

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    // 处理博客提交
    console.log('Blog submitted:', blogPost);
  };

  const handlePortfolioSubmit = (e) => {
    e.preventDefault();
    // 处理作品集提交
    console.log('Portfolio submitted:', portfolioItem);
  };

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    // 处理动态提交
    console.log('News submitted:', newsPost);
  };

  // 处理图片上传预览
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setPortfolioItem({...portfolioItem, image: file});
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <h2>管理面板</h2>
        <nav>
          <button 
            className={activeTab === 'blog' ? 'active' : ''} 
            onClick={() => setActiveTab('blog')}
          >
            博客管理
          </button>
          <button 
            className={activeTab === 'portfolio' ? 'active' : ''} 
            onClick={() => setActiveTab('portfolio')}
          >
            作品集管理
          </button>
          <button 
            className={activeTab === 'news' ? 'active' : ''} 
            onClick={() => setActiveTab('news')}
          >
            动态管理
          </button>
        </nav>
        <button 
          className="logout-button"
          onClick={() => {
            localStorage.removeItem('adminAuth');
            navigate('/admin');
          }}
        >
          退出登录
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'blog' && (
          <div className="content-section">
            <h3>添加新博客</h3>
            <form onSubmit={handleBlogSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="博客标题"
                  value={blogPost.title}
                  onChange={(e) => setBlogPost({...blogPost, title: e.target.value})}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="博客摘要"
                  value={blogPost.summary}
                  onChange={(e) => setBlogPost({...blogPost, summary: e.target.value})}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="分类"
                  value={blogPost.category}
                  onChange={(e) => setBlogPost({...blogPost, category: e.target.value})}
                />
              </div>
              <div className="form-group">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={(e) => setBlogPost({...blogPost, audioUrl: e.target.files[0]})}
                />
              </div>
              <div className="form-group image-upload-group">
                <label className="image-upload-label">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setBlogPost({...blogPost, coverImage: e.target.files[0]})}
                    className="image-input"
                  />
                  <span>上传封面图片</span>
                </label>
              </div>
              <button type="submit">发布博客</button>
            </form>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="content-section">
            <h3>添加新作品</h3>
            <form onSubmit={handlePortfolioSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="作品标题"
                  value={portfolioItem.title}
                  onChange={(e) => setPortfolioItem({...portfolioItem, title: e.target.value})}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="作品描述"
                  value={portfolioItem.description}
                  onChange={(e) => setPortfolioItem({...portfolioItem, description: e.target.value})}
                />
              </div>
              <div className="form-group image-upload-group">
                <label className="image-upload-label">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="image-input"
                  />
                  <span>点击上传图片</span>
                </label>
                {imagePreview && (
                  <div className="image-preview">
                    <img src={imagePreview} alt="预览" />
                  </div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="标签（用逗号分隔）"
                  value={portfolioItem.tags}
                  onChange={(e) => setPortfolioItem({...portfolioItem, tags: e.target.value})}
                />
              </div>
              <button type="submit">添加作品</button>
            </form>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="content-section">
            <h3>发布新动态</h3>
            <form onSubmit={handleNewsSubmit}>
              <div className="form-group">
                <textarea
                  placeholder="动态内容"
                  value={newsPost.content}
                  onChange={(e) => setNewsPost({...newsPost, content: e.target.value})}
                />
              </div>
              <button type="submit">发布动态</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard; 