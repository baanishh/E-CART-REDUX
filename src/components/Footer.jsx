import React from "react";

const Footer = () => {
  return (
    <footer className="bg-violet-700 text-white py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Logo and Description */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <h2 className="text-3xl font-bold mb-2">Your Company</h2>
            <p className="text-gray-400">
              Building innovative solutions for modern businesses. We are
              committed to delivering quality products to help you succeed.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-between lg:w-2/3">
            {/* About Links */}
            <div className="mb-8 lg:mb-0 w-1/2 md:w-1/4">
              <h3 className="text-xl font-semibold mb-3">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div className="mb-8 lg:mb-0 w-1/2 md:w-1/4">
              <h3 className="text-xl font-semibold mb-3">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Cloud Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="mb-8 lg:mb-0 w-1/2 md:w-1/4">
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="w-1/2 md:w-1/4">
              <h3 className="text-xl font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-900" />

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-white">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
