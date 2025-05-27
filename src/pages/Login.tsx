import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Button from '../components/common/Button';

const Login: React.FC = () => {
  useEffect(() => {
    document.title = 'Login | MedBedTrack';
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Clear any previous errors
    setError('');
    
    // Here you would normally handle login logic with a backend API
    console.log('Login attempt with:', { email });
  };

  return (
    <div className="min-h-screen pt-16 pb-12 flex flex-col items-center justify-center bg-neutral-50">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center justify-center">
            <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center">
              <AlertCircle size={24} />
            </div>
          </Link>
          <h1 className="mt-4 font-heading font-bold text-2xl text-neutral-800">Welcome back</h1>
          <p className="mt-1 text-neutral-500">Sign in to your account</p>
        </div>
        
        {/* Login Form */}
        <div className="bg-white shadow-card rounded-lg p-8">
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-center gap-2">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-700">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-neutral-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                    placeholder="hospital@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                    Password
                  </label>
                  <a href="#" className="text-sm font-medium text-primary-500 hover:text-primary-600">
                    Forgot password?
                  </a>
                </div>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-neutral-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-neutral-400 hover:text-neutral-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <Button 
                  variant="primary"
                  type="submit"
                  fullWidth={true}
                  size="lg"
                >
                  Sign in
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-6 text-center">
            <span className="text-neutral-600">Don't have an account?</span>{' '}
            <Link to="/register" className="font-medium text-primary-500 hover:text-primary-600">
              Register now
            </Link>
          </div>
        </div>
        
        {/* Additional Help */}
        <div className="mt-8 text-center text-sm text-neutral-500">
          <span>Need assistance?</span>{' '}
          <Link to="/contact" className="font-medium text-primary-500 hover:text-primary-600">
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;