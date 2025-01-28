import './Footer.css';
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Us */}
     

        {/* Our Services */}
        <div>
          <h2 className="text-lg font-bold mb-4">Our Fintech Services</h2>
          <ul className="space-y-2">
            <li>BBPS</li>
            <li>Domestic Money Transfer</li>
            <li>Payout API</li>
            <li>Recharge API</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Our API Services</h2>
          <ul className="space-y-2">
            <li>AEPS</li>
            <li>P O S</li>
            <li>Mini ATM</li>
            <li>Indo Nepal Money Transfer</li>
            <li>Prepaid Card</li>
          </ul>
        </div>
        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Contact us</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Info</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="inline-block w-6 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2z" />
                </svg>
              </span>
              care@unityBank.com
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="w-5 h-5"
                >
                  <path d="M4.854 2.146a.5.5 0 0 1 .192.326l.3 2.4a.5.5 0 0 1-.604.545l-1.1-.22a.5.5 0 0 1-.345-.25L1.1 2.6A.5.5 0 0 1 1.5 2h2.8a.5.5 0 0 1 .554.146z" />
                </svg>
              </span>
              Office number 000, 00 291, <br />
              Feroze Gandhi Market, Ludhiana, Punjab - 141001
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
        <p>© 2022 Unity Bank. - All Rights Reserved.</p>
        <p className="mt-2 space-x-4">
          <a href="#" className="hover:underline">
            Refund Policy
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
