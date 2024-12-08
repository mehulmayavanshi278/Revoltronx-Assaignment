import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 lg:px-[100px] md:px-[50px] px-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {/* Company Section */}
        <div className="space-y-4">
          <img
            src="/images/logom.png"
            alt="Company Logo"
            className="h-16 w-16 object-contain rounded-[50%]"
          />
          <h2 className="font-semibold text-lg text-gray-800">Yoga Art Assignment</h2>
          <address className="text-gray-600 not-italic">
            Random Address Line 1<br />
            Random City, State, PIN<br />
            Country
          </address>
          <a href="#" className="text-blue-600 hover:underline">
            See Our Stores
          </a>
          <div className="space-y-1">
            <p className="flex items-center text-gray-700">
              <PhoneIcon className="mr-2" />
              +91 12345 67890
            </p>
            <p className="flex items-center text-gray-700">
              <PhoneIcon className="mr-2" />
              +91 98765 43210
            </p>
            <p className="flex items-center text-gray-700">
              <EmailIcon className="mr-2" />
              sales@yogaart.com
            </p>
            <p className="flex items-center text-gray-700">
              <EmailIcon className="mr-2" />
              info@yogaart.com
            </p>
          </div>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Information</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:underline">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                My Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Checkout
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wholesale & Custom Order
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Services</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                GDPR
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cancellation Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Subscribe</h3>
          <p className="mt-4 text-gray-600">
            Enter your email below to be the first to know about new collections and product launches.
          </p>
          <form className="mt-4 space-y-2">
            <label htmlFor="email" className="block text-sm text-gray-600">
              Fields marked with an <span className="text-red-600">*</span> are required
            </label>
            <div className="flex items-center">
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-r-md hover:bg-gray-700 focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
