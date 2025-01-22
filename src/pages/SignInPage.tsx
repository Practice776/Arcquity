import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'; // Import Eye and EyeOff icons
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

type SignInPageProps = {
  userType: 'tenant' | 'landlord'; // Define userType as prop
};

export function SignInPage({ userType }: SignInPageProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // Reset any previous error message
    try {
      const response = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          userType,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Signin successful:', data);
        // Navigate based on the user type
        navigate(userType === 'tenant' ? '/tenant' : '/landlord');
      } else {
        setErrorMessage(data.message || 'Invalid email or password'); // Set error message from response
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.'); // Generic error message
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <img src="/images/icon-logo.png" alt="Arcquity Logo" className="w-36 h-36" />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign In as {userType}</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Email address"
              type="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              icon={Mail}
              aria-label="Email address" // Added for accessibility
            />

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
                required
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                icon={Lock}
                aria-label="Password" // Added for accessibility
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3/4 transform -translate-y-1/2 text-sm text-gray-500"
                aria-label={showPassword ? 'Hide password' : 'Show password'} // Added for accessibility
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full py-3 text-lg font-semibold rounded-lg shadow-lg"
            >
              Sign In
            </Button>
          </form>

          {errorMessage && (
            <div className="mt-4 text-center text-sm text-red-600">
              {errorMessage}
            </div>
          )}

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
            Don't have an account?{' '}
            <a
              href={userType === 'tenant' ? '/signup?userType=tenant' : '/signup?userType=landlord'} // Adjusted path based on userType
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
