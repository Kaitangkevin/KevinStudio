import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里通常会有API调用来处理表单提交
    // 模拟表单提交成功
    setFormStatus({
      submitted: true,
      success: true,
      message: '您的消息已成功发送！我会尽快回复您。'
    });
    
    // 重置表单
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // 5秒后重置状态消息
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <motion.h1 
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          联系我
        </motion.h1>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>联系方式</h2>
            <p>如果您有任何问题或合作意向，欢迎随时联系我。</p>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <h3>地址</h3>
                <p>上海市浦东新区张江高科技园区</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h3>邮箱</h3>
                <p>contact@kevinstudio.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-text">
                <h3>电话</h3>
                <p>+86 123 4567 8910</p>
              </div>
            </div>

            <div className="contact-social">
              <h3>社交媒体</h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>发送消息</h2>
            <p>填写下面的表单，我会尽快回复您。</p>

            {formStatus.submitted && (
              <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">姓名</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">主题</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">消息</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                发送消息 <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="contact-map"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>位置</h2>
          <div className="map-container">
            {/* 这里通常会嵌入Google地图或百度地图 */}
            <div className="map-placeholder">
              <i className="fas fa-map-marked-alt"></i>
              <p>地图加载中...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;