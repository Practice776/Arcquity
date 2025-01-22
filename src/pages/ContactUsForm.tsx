import { useState } from 'react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ message: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ message: '', type: '' });
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', type: '' });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ message: 'All fields are required.', type: 'error' });
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ message: 'Please enter a valid email address.', type: 'error' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus({ message: 'Message sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ message: 'Something went wrong. Please try again later.', type: 'error' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ message: 'Something went wrong. Please try again later.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 px-4">
  <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 max-w-2xl w-full">
    <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Contact Us</h2>
    <p className="text-gray-600 text-center mb-6">
      Have questions or need assistance? Reach out to us using the form below or contact us directly.
    </p>
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
          autoComplete="off"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition duration-200 ease-in-out"
          required
          autoComplete="off"
          aria-describedby="emailHelp"
        />
        {/* Optional: Email helper text */}
        <p id="emailHelp" className="text-xs text-gray-500 mt-1">
          We'll never share your email with anyone else.
        </p>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className={`bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>

    {/* Status Message */}
    {status.message && (
      <p
        className={`mt-4 text-center font-medium ${
          status.type === 'success' ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {status.message}
      </p>
    )}

    {/* Alternative Contact Information */}
    <div className="text-center mt-8">
      <p className="text-gray-600">Or contact us directly at:</p>
      <p className="text-gray-900 font-medium">Phone: +91 1234567890</p>
      <p className="text-gray-900 font-medium">Email: support@arcquity.com</p>
    </div>
  </div>
</div>


  );
};

export default ContactUsForm;
