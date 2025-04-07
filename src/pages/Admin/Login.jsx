import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '0925') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('密码错误');
    }
  };

  return (
    <div className="admin-login">
      <div className="login-card">
        <h2>管理员登录</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入管理员密码"
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit">登录</button>
        </form>
      </div>
    </div>
  );
}

export default Login; 