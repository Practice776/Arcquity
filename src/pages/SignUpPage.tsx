import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Building2, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function SignUpPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'tenant' | 'landlord' | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await fetch(`${apiUrl}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          userType: userType,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Signup successful:', data);
        navigate(userType === 'tenant' ? '/tenant' : '/landlord');
      } else {
        console.error('Signup failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <img src="/images/icon-logo.png" alt="Arcquity Logo" className="w-36 h-36" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create Your Account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow sm:rounded-lg sm:px-10">
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700">I am a:</label>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setUserType('tenant')}
                className={`flex items-center justify-center px-4 py-3 border rounded-lg transition duration-300 ease-in-out transform ${
                  userType === 'tenant'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-600 shadow-lg'
                    : 'border-gray-300 text-gray-700 hover:bg-indigo-50 hover:scale-105'
                }`}
              >
                <User className="w-5 h-5 mr-2" />
                Tenant
              </button>
              <button
                type="button"
                onClick={() => setUserType('landlord')}
                className={`flex items-center justify-center px-4 py-3 border rounded-lg transition duration-300 ease-in-out transform ${
                  userType === 'landlord'
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-600 shadow-lg'
                    : 'border-gray-300 text-gray-700 hover:bg-indigo-50 hover:scale-105'
                }`}
              >
                <Building2 className="w-5 h-5 mr-2" />
                Landlord
              </button>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Email address"
              type="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              icon={Mail}
            />

            <div className="relative">
              <Input
                label="Password"
                type={passwordVisible ? 'text' : 'password'}
                required
                placeholder="Choose a secure password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                icon={Lock}
              />
              <div
                className="absolute right-3 top-3/4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </div>
            </div>

            <div className="relative">
              <Input
                label="Confirm Password"
                type={confirmPasswordVisible ? 'text' : 'password'}
                required
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                icon={Lock}
              />
              <div
                className="absolute right-3 top-3/4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              >
                {confirmPasswordVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full py-3 text-lg font-semibold rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              disabled={!userType || formData.password !== formData.confirmPassword}
            >
              Sign Up
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition duration-200 ease-in-out transform hover:scale-105"
              >
                Google
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition duration-200 ease-in-out transform hover:scale-105"
              >
                Microsoft
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition duration-200 ease-in-out transform hover:scale-105"
              >
                Apple
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => {
                if (userType === 'tenant') {
                  navigate('/tenant-signin'); // Navigate to tenant sign-in page
                } else if (userType === 'landlord') {
                  navigate('/landlord-signin'); // Navigate to landlord sign-in page
                } else {
                  alert('Please select whether you are a Tenant or a Landlord to continue.');
                }
              }}
              className={`font-medium ${
                userType ? 'text-indigo-600 hover:text-indigo-500' : 'text-gray-400 cursor-not-allowed'
              }`}
              disabled={!userType}
            >
              Sign In
            </button>
          </p>

          <p className="mt-6 text-center text-sm text-gray-600">
            By signing up, you agree to our{' '}
            <a href="/terms" className="text-indigo-600 hover:text-indigo-500">
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-indigo-600 hover:text-indigo-500">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
