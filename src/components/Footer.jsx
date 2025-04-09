import React from 'react';

const FooterLink = ({ label, href }) => (
  <a
    href={href}
    className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
  >
    {label}
  </a>
);

const Footer = () => {
  return (
    <footer className="py-7 w-full">
      <div className="max-w-screen-xl mx-auto px-14 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left links */}
        <div className="flex space-x-6">
          <FooterLink label="Terms and conditions" href="/terms" />
          <FooterLink label="Privacy policy" href="/privacy" />
          <FooterLink label="Help & Support" href="/support" />
        </div>

        {/* Right copyright */}
        <div className="text-sm text-gray-500">
          All rights reserved, © Moments
        </div>
      </div>
    </footer>
  );
};

export default Footer;
