import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Pages
import { LandingPage } from './pages/LandingPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { PropertiesPage } from './pages/PropertiesPage';
import { TenantDashboard } from './pages/tenant/TenantDashboard';
import { TenantPayments } from './pages/tenant/TenantPayments';
import { TenantPaymentHistory } from './pages/tenant/TenantPaymentHistory';
import { TenantSupport } from './pages/tenant/TenantSupport';
import { TenantDocuments } from './pages/tenant/TenantDocuments';
import { TenantSettings } from './pages/tenant/TenantSettings';
import { LandlordDashboard } from './pages/landlord/LandlordDashboard';
import { LandlordPayments } from './pages/landlord/LandlordPayments';
import { LandlordSettings } from './pages/landlord/LandlordSettings';
import { LandlordDocuments } from './pages/landlord/LandlordDocuments';
import { LandlordProperties } from './pages/landlord/LandlordProperties';
import { LandlordTenantRequests } from './pages/landlord/LandlordTenantRequests';
import PricingPage from './pages/PricingPage'; // Import the Pricing Page
import ContactUsForm from './pages/ContactUsForm'; // Import the new Contact Us Page
import FloatingButton from './components/FloatingButton'; // Adjust the path as needed

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/properties" element={<PropertiesPage />} />

            {/* Tenant Routes */}
            <Route path="/tenant" element={<TenantDashboard />} />
            <Route path="/tenant/payments" element={<TenantPayments />} />
            <Route path="/tenant/payment-history" element={<TenantPaymentHistory />} />
            <Route path="/tenant/support" element={<TenantSupport />} />
            <Route path="/tenant/documents" element={<TenantDocuments />} />
            <Route path="/tenant/settings" element={<TenantSettings />} />
            <Route path="/tenant-signin" element={<SignInPage userType="tenant" />} /> {/* Tenant Sign-In Page */}

            {/* Landlord Routes */}
            <Route path="/landlord" element={<LandlordDashboard />} />
            <Route path="/landlord/payments" element={<LandlordPayments />} />
            <Route path="/landlord/settings" element={<LandlordSettings />} />
            <Route path="/landlord/documents" element={<LandlordDocuments />} />
            <Route path="/landlord/properties" element={<LandlordProperties />} />
            <Route path="/landlord/tenant-requests" element={<LandlordTenantRequests />} />
            <Route path="/landlord-signin" element={<SignInPage userType="landlord" />} /> {/* Landlord Sign-In Page */}

            {/* Pricing Page Route */}
            <Route path="/pricing" element={<PricingPage />} />
            {/* Contact Us Page Route */}
            <Route path="/contact-us" element={<ContactUsForm />} />  {/* New route for the Contact Us page */}
            {/* Catch-all Route to redirect to Landing Page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <FloatingButton /> {/* Floating button on all pages */}
        </Router>
    </QueryClientProvider>
  );
};

export default App;
