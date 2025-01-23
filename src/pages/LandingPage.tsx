import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, BedDouble, Bath, Maximize2, CreditCard, FileText, Users, ShieldCheckIcon, Headset, Bell } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { CurrencyDollarIcon, DocumentTextIcon } from '@heroicons/react/16/solid';

export function LandingPage() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-indigo-10 border-b border-indigo-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <img src="/images/icon-logo.png" alt="Arcquity Logo" className="w-30 h-20" />
              <span className="text-xl font-bold text-gray-900">Arcquity</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#hero" className="text-gray-900 hover:text-gray-700 transition duration-200">Home</a>
              <a href="#features" className="text-gray-900 hover:text-gray-700 transition duration-200">Features</a>
              <a href="/properties" className="text-gray-900 hover:text-gray-700 transition duration-200">Properties</a>
              <a href="/contact-us" className="text-gray-900 hover:text-gray-700 transition duration-200">Contact Us</a>

              {/* Dropdown for Sign In */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                >
                  <span>Sign In</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-200`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg w-44">
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        navigate('/tenant-signin');
                      }}
                      className="w-full text-center px-4 py-2 text-gray-800 hover:bg-indigo-100 focus:bg-indigo-200 transition duration-150"
                    >
                      Tenant Login
                    </button>
                    <button
                      onClick={() => {
                        setDropdownOpen(false);
                        navigate('/landlord-signin');
                      }}
                      className="w-full text-center px-4 py-2 text-gray-800 hover:bg-indigo-100 focus:bg-indigo-200 transition duration-150"
                    >
                      Landlord Login
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigate('/signup')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="border border-gray-300 rounded-full p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-indigo-200 text-gray-900 border border-indigo-200 rounded-lg shadow-sm py-6 px-4">
                <div className="flex flex-col items-center space-y-4">
                  {/* Navigation Links with Hover */}
                  <a
                    href="#hero"
                    className="block w-full text-center text-gray-900 font-medium hover:text-indigo-600 hover:bg-gray-100 rounded-md transition duration-200 py-2"
                  >
                    Home
                  </a>
                  <a
                    href="#features"
                    className="block w-full text-center text-gray-900 font-medium hover:text-indigo-600 hover:bg-gray-100 rounded-md transition duration-200 py-2"
                  >
                    Features
                  </a>
                  <a
                    href="/properties"
                    className="block w-full text-center text-gray-900 font-medium hover:text-indigo-600 hover:bg-gray-100 rounded-md transition duration-200 py-2"
                  >
                    Properties
                  </a>
                  <a
                    href="/contact-us"
                    className="block w-full text-center text-gray-900 font-medium hover:text-indigo-600 hover:bg-gray-100 rounded-md transition duration-200 py-2"
                  >
                    Contact Us
                  </a>

                  {/* Mobile Sign In Dropdown */}
                  <div className="relative w-full">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="bg-indigo-600 w-full text-white font-medium px-4 py-2 rounded-md flex items-center justify-between hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                    >
                      <span className="w-full text-center">Sign In</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transform ${dropdownOpen ? "rotate-180" : "rotate-0"} transition-transform duration-200`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {dropdownOpen && (
                      <div className="absolute mt-2 bg-white border border-gray-200 shadow-xl rounded-lg w-full">
                        <button
                          onClick={() => {
                            setDropdownOpen(false);
                            navigate("/tenant-signin");
                          }}
                          className="w-full text-center px-4 py-2 text-gray-800 hover:bg-indigo-100 focus:bg-indigo-200 transition duration-150"
                        >
                          Tenant Login
                        </button>
                        <button
                          onClick={() => {
                            setDropdownOpen(false);
                            navigate("/landlord-signin");
                          }}
                          className="w-full text-center px-4 py-2 text-gray-800 hover:bg-indigo-100 focus:bg-indigo-200 transition duration-150"
                        >
                          Landlord Login
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Sign Up Button */}
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate("/signup");
                    }}
                    className="bg-indigo-600 w-full text-white font-medium px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            )}


        </div>
      </nav>

      {/* Hero Section */}
      <div id="hero" className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-gray-900 text-center mb-6">
            Find Your Perfect Rental Home with Arcquity
          </h1>
          <p className="text-xl text-gray-600 text-center mb-10">
            Search from a curated selection of premium rental properties that match your preferences and lifestyle. Discover homes in your desired location, with the features that matter most to you.
          </p>

          <div className="max-w-4xl mx-auto flex gap-6 mb-10">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by location, property type, price range, or amenities"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Advanced Filters
            </button>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Arcquity is Your Ideal Rental Partner
            </h2>
            <p className="text-gray-600 mb-6">
              At Arcquity, we simplify the rental process. Whether you're looking for a cozy studio or a spacious family home, we offer advanced search options, real-time listings, and a seamless communication platform to connect you with landlords and property owners. 
            </p>
            <a
              href="/properties"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Begin Your Search Now
            </a>
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <div id="properties" className="bg-indigo-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Explore Our Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              title="Luxury Downtown Apartment"
              address="123 Main St, San Francisco, CA"
              price="₹22,500"
              beds={2}
              baths={2}
              sqft={1200}
              onViewDetails={() => navigate('/property/1')}
            />
            <PropertyCard
              image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              title="Modern Suburban Home"
              address="456 Park Ave, Los Angeles, CA"
              price="₹32,200"
              beds={3}
              baths={2.5}
              sqft={1800}
              onViewDetails={() => navigate('/property/2')}
            />
            <PropertyCard
              image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              title="Cozy Studio Loft"
              address="789 Broadway, New York, NY"
              price="₹9,800"
              beds={1}
              baths={1}
              sqft={750}
              onViewDetails={() => navigate('/property/3')}
            />
          </div>
          {/* See All Properties Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => navigate('/properties')} 
              className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
              See All Properties
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Arcquity?
          </h2>
          
          {/* Landlord Features Section */}
          <div className="bg-indigo-100 p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700 text-center">Landlord Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center hover:bg-indigo-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Easy Property Search</h3>
                <p className="text-gray-600">List your properties with ease and use advanced search filters to attract the right tenants.</p>
              </div>

              <div className="text-center hover:bg-indigo-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Inquiries</h3>
                <p className="text-gray-600">Receive high-quality tenant inquiries and connect with potential tenants efficiently through our platform.</p>
              </div>

              <div className="text-center hover:bg-indigo-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CurrencyDollarIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Income & Expense Analytics</h3>
                <p className="text-gray-600">Easily track your rental income and expenses with built-in analytics, helping you stay organized and make informed decisions.</p>
              </div>

              <div className="text-center hover:bg-indigo-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Autopay Rent Management</h3>
                <p className="text-gray-600">Manage rent payments effortlessly with autopay and easily access your payment history for better tracking.</p>
              </div>

              {/* New Landlord Feature 1 */}
              <div className="text-center hover:bg-indigo-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Automated Lease Agreement</h3>
                <p className="text-gray-600">Automate the process of generating customized lease agreements for each tenant, ensuring compliance and saving time.</p>
              </div>

              {/* New Landlord Feature 2 */}
              <div className="text-center hover:bg-indigo-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Tenant Screening & Background Checks</h3>
                <p className="text-gray-600">Perform thorough tenant screenings and background checks to ensure that you're selecting the most reliable tenants for your properties.</p>
              </div>
            </div>
          </div>

          {/* Tenant Features Section */}
          <div className="bg-indigo-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700 text-center">Tenant Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center hover:bg-indigo-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Prime Locations</h3>
                <p className="text-gray-600">Access properties in the most desirable neighborhoods, giving you the best living options.</p>
              </div>

              <div className="text-center hover:bg-indigo-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BedDouble className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Homes</h3>
                <p className="text-gray-600">Verified listings of high-quality rental properties that are tailored to your needs.</p>
              </div>

              <div className="text-center hover:bg-indigo-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Lease Renewal Notifications</h3>
                <p className="text-gray-600">Stay informed and updated on your lease renewal dates, ensuring smooth communication with your landlord throughout the process.</p>
              </div>

              <div className="text-center hover:bg-indigo-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Customizable Alerts & Reminders</h3>
                <p className="text-gray-600">Set personalized notifications for important dates like lease renewals, rent payments, and maintenance requests.</p>
              </div>

              <div className="text-center hover:bg-indigo-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headset className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">24/7 Customer Support</h3>
                <p className="text-gray-600">Access round-the-clock support for any queries, ensuring you're never alone in your rental journey.</p>
              </div>

              <div className="text-center hover:bg-indigo-200 hover:shadow-lg transition-all duration-300 p-4 rounded-lg">
                <div className="bg-indigo-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Rent Payment Flexibility</h3>
                <p className="text-gray-600">Choose a rent payment schedule that suits your financial situation, whether weekly, bi-weekly, or monthly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-indigo-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Client Success Stories
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <p className="text-gray-600 text-lg mb-4">"Arcquity made finding and managing my rental effortless. The filters allowed me to easily find rentals that matched my location, price, and amenities preferences. Autopay for rent payments and access to payment history made rent management hassle-free. I was also able to stay updated on lease renewals, ensuring smooth communication with my landlord throughout the process."</p>
              <div className="flex items-center space-x-4">
                <img src="/Testimonials/test-1.jpg" alt="Client 1" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-gray-800 font-semibold">John Doe</p>
                  <p className="text-gray-500">Tenant</p>
                </div>
              </div>
            </div>
            <div className="max-w-xs bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <p className="text-gray-600 text-lg mb-4">"Listing my property on Arcquity was quick and easy. The platform allowed me to upload property details, photos, and rental terms with ease. I was able to manage tenant profiles, track payments, and handle lease renewals digitally. The automated rent collection feature saved me time, and the analytics helped me keep track of income and expenses effortlessly. I received quality inquiries and successfully rented out my property in no time."</p>
              <div className="flex items-center space-x-4">
                <img src="/Testimonials/test-2.jpg" alt="Client 2" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-gray-800 font-semibold">Jane Smith</p>
                  <p className="text-gray-500">Landlord</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="border-b pb-4">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 cursor-pointer">
                  How do I list a property?
                </h3>
                <p className="text-gray-600">
                  To list a property, simply log in or sign up as a landlord. Once logged in, you'll have access to the "List Property" option in "Properties", where you can enter your property details and submit it to our platform.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="border-b pb-4">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 cursor-pointer">
                  What are the payment options?
                </h3>
                <p className="text-gray-600">
                  We accept credit and debit cards, bank transfers, and various online payment platforms to make your transaction smooth.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="border-b pb-4">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 cursor-pointer">
                  Can I view a property before signing a lease or rental agreement?
                </h3>
                <p className="text-gray-600">
                  Yes! Contact the property owner directly through our platform to schedule a tour of the property before making a decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="bg-indigo-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-balck">
          <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
          <p className="text-xl mb-6">Subscribe to our newsletter for the latest property listings and exclusive offers.</p>
          <div className="flex justify-center space-x-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-1/2 sm:w-3/4 md:w-1/3 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-100">About Arcquity</h4>
              <p className="text-gray-400 text-base leading-relaxed">Making rentals simple and seamless for everyone. We aim to revolutionize the rental process with cutting-edge technology and personalized service.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/properties" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">Find Properties</a></li>
                <li><a href="/signup" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">List Property</a></li>
                <li><a href="/contact-us" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-100">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-100">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">support@arcquity.com</li>
                <li className="text-gray-400">+91 1234567890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-center">
            <p className="text-gray-400 text-sm">© 2025 Arcquity Inc. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}