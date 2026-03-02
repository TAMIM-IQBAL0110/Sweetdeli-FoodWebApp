import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../../utilities/apiClient';
import { API_PATHS } from '../../utilities/apiPath';
import LeftSideAuthPage from '../../componets/LeftSideAuthPage';
import AuthForm, { AuthInput } from '../../componets/AuthForm'; 

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.email.trim()) {
      setError('Email is required');
      setLoading(false);
      return;
    }
    if (!formData.password) {
      setError('Password is required');
      setLoading(false);
      return;
    }

    try {
      const response = await apiClient.post(API_PATHS.AUTH.LOGIN, formData);
      if (response.success) {
        localStorage.setItem('token', response.token);
        setTimeout(() => navigate('/home'), 1000);
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left side */}
      <div className="flex-1">
        <LeftSideAuthPage />
      </div>

      {/* Right side Form Area */}
      <div className="flex-1 flex items-center justify-center bg-white py-12">
        <AuthForm
          title="Welcome back!"
          subtitle="Meet the good taste today"
          submitText={loading ? 'Sign In...' : 'Sign In'}
          onSubmit={handleSubmit}
          footerText="Don’t have an account?"
          footerLinkText="Sign Up"
          onFooterClick={() => navigate('/signup')}
        >
          <AuthInput
            label="E-mail or phone number"
            placeholder="Type your e-mail or phone number"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          
          <div className="flex flex-col gap-2">
            <AuthInput
              label="Password"
              placeholder="Type your password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="flex justify-end">
              <Link 
                to="/forgot-password" 
                className="text-xs font-medium text-[#9CA3AF] hover:text-black transition-colors"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
        </AuthForm>
      </div>
    </div>
  );
};

export default Login;