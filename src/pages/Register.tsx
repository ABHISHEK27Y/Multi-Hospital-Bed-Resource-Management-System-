import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Mail, Lock, Eye, EyeOff, Building, User, Phone, MapPin } from 'lucide-react';
import Button from '../components/common/Button';

const Register: React.FC = () => {
  useEffect(() => {
    document.title = 'Register | MedBedTrack';
  }, []);

  const [formData, setFormData] = useState({
    hospitalName: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep1 = () => {
    if (!formData.hospitalName || !formData.contactPerson || !formData.email || !formData.phone) {
      setError('Please fill all required fields');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.address) {
      setError('Please enter your hospital address');
      return false;
    }
    if (!formData.password) {
      setError('Please enter a password');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep1()) {
      setError('');
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep2()) {
      // Clear any previous errors
      setError('');
      
      // Here you would normally handle registration logic with a backend API
      console.log('Registration data:', formData);
      
      // For demo purposes, show success message
      alert('Registration successful! You can now log in.');
    }
  };

  return (
    <div className="min-h-screen pt-16 pb-12 flex flex-col items-center justify-center bg-neutral-50">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center justify-center">
            <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center">
              <AlertCircle size={24} />
            </div>
          </Link>
          <h1 className="mt-4 font-heading font-bold text-2xl text-neutral-800">Register your hospital</h1>
          <p className="mt-1 text-neutral-500">Join our network of healthcare providers</p>
        </div>
        
        {/* Registration Form */}
        <div className="bg-white shadow-card rounded-lg p-8">
          {/* Progress Steps */}
          <div className="flex items-center mb-8">
            <div className="flex-1">
              <div className={`h-1 ${step >= 1 ? 'bg-primary-500' : 'bg-neutral-200'}`}></div>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${step >= 1 ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-500'}`}>
              1
            </div>
            <div className="flex-1">
              <div className={`h-1 ${step >= 2 ? 'bg-primary-500' : 'bg-neutral-200'}`}></div>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${step >= 2 ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-500'}`}>
              2
            </div>
            <div className="flex-1">
              <div className="h-1 bg-neutral-200"></div>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-center gap-2">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-5">
                {/* Hospital Name Field */}
                <div>
                  <label htmlFor="hospitalName" className="block mb-2 text-sm font-medium text-neutral-700">
                    Hospital Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building size={18} className="text-neutral-400" />
                    </div>
                    <input
                      id="hospitalName"
                      name="hospitalName"
                      type="text"
                      required
                      value={formData.hospitalName}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                      placeholder="Central Hospital"
                    />
                  </div>
                </div>

                {/* Contact Person */}
                <div>
                  <label htmlFor="contactPerson" className="block mb-2 text-sm font-medium text-neutral-700">
                    Contact Person <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-neutral-400" />
                    </div>
                    <input
                      id="contactPerson"
                      name="contactPerson"
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-700">
                    Email address <span className="text-red-500">*</span>
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
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                      placeholder="hospital@example.com"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-neutral-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-neutral-400" />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    variant="primary"
                    type="button"
                    onClick={nextStep}
                    fullWidth={true}
                    size="lg"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                {/* Hospital Address */}
                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-neutral-700">
                    Hospital Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin size={18} className="text-neutral-400" />
                    </div>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                      placeholder="123 Healthcare Ave, City, State"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-neutral-700">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-neutral-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleChange}
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
                  <p className="mt-1 text-sm text-neutral-500">
                    Password must be at least 8 characters with a number and special character
                  </p>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-neutral-700">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={18} className="text-neutral-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline"
                    type="button"
                    onClick={prevStep}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    variant="primary"
                    type="submit"
                    className="flex-1"
                  >
                    Register
                  </Button>
                </div>
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
            <span className="text-neutral-600">Already have an account?</span>{' '}
            <Link to="/login" className="font-medium text-primary-500 hover:text-primary-600">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;