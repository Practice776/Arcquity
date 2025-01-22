import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleGoBack = () => {
    navigate(-1); // Redirect to the home page
  };

  return (
    <div className="pricing-page px-4 sm:px-8 md:px-16 lg:px-32 py-12">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900">Choose Your Plan</h1>
        <p className="text-md md:text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Find the perfect plan tailored to your needs. Unlock premium features and take your experience to the next level.
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Landlord Plans */}
        <div className="bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 text-center py-6">For Landlords</h2>

          {/* Basic Plan */}
          <div className="p-8 mb-8 bg-indigo-50 rounded-lg border-2 border-indigo-600 hover:shadow-xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600">Basic Plan</h3>
            <p className="text-md md:text-lg text-gray-600">Free forever</p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>✔ Manage properties</li>
              <li>✔ Track payments</li>
              <li>✔ Handle tenant requests</li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="p-8 bg-indigo-50 rounded-lg border-2 border-indigo-600 hover:shadow-xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600">Pro Plan</h3>
            <p className="text-md md:text-lg text-indigo-600">₹999/month</p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>✔ AI-Powered Insights</li>
              <li>✔ Third-Party Integrations</li>
              <li>✔ Lease Agreement Management</li>
              <li>✔ Dynamic Pricing</li>
              <li>✔ Tenant Screening</li>
              <li>✔ Smart Notifications</li>
            </ul>
            <button
              className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-lg text-md md:text-lg font-medium transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Upgrade to Pro Plan for Landlords"
            >
              Upgrade to Pro
            </button>
          </div>
        </div>

        {/* Tenant Plans */}
        <div className="bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 text-center py-6">For Tenants</h2>

          {/* Basic Plan */}
          <div className="p-8 mb-8 bg-indigo-50 rounded-lg border-2 border-indigo-600 hover:shadow-xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600">Basic Plan</h3>
            <p className="text-md md:text-lg text-gray-600">Free forever</p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>✔ View available properties</li>
              <li>✔ Submit rental applications</li>
              <li>✔ Pay rent online</li>
            </ul>
          </div>

          {/* Pro Plan */}
          <div className="p-8 bg-indigo-50 rounded-lg border-2 border-indigo-600 hover:shadow-xl transition duration-300">
            <h3 className="text-xl md:text-2xl font-semibold text-indigo-600">Pro Plan</h3>
            <p className="text-md md:text-lg text-indigo-600">₹499/month</p>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>✔ Dynamic Payment Splitting</li>
              <li>✔ AI-Powered Matching</li>
              <li>✔ Smart Notifications</li>
              <li>✔ Personalized Lease Suggestions</li>
              <li>✔ 24/7 Support</li>
            </ul>
            <button
              className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-lg text-md md:text-lg font-medium transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Upgrade to Pro Plan for Tenants"
            >
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="faq mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>

        <div className="faq-item mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 cursor-pointer">What is included in the Pro plan?</h3>
            <p className="text-gray-600 mt-2">
              The Pro plan includes premium features such as AI-powered insights, advanced property management tools, and tenant screening functionalities to elevate your rental experience.
            </p>
          </div>
        </div>

        <div className="faq-item mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 cursor-pointer">How can I cancel my subscription?</h3>
            <p className="text-gray-600 mt-2">
              You can cancel your subscription anytime by navigating to your account settings in the dashboard. No hassle, no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <button
          onClick={handleGoBack}
          className="absolute top-4 left-4 bg-indigo-600 text-white w-16 h-16 rounded-full shadow-xl hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-75 flex items-center justify-center text-3xl font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          ←
        </button>
      </div>
    </div>
  );
};

export default PricingPage;
