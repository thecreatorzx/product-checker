import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer w-full h-auto bg-gray-900 bg-opacity-70 text-center">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#" class="bg-white text-blue-800">
                  <i>
                    <FaFacebook size={"40px"} />
                  </i>
                </a>
                <a href="#" class="bg-blue-600 text-white">
                  <i>
                    <FaTwitter size={"40px"} />
                  </i>
                </a>
                <a
                  href="#"
                  class=" bg-gradient-to-bl from-pink-700 to-yellow-600 text-white"
                >
                  <i>
                    <FaInstagram size={"40px"} />
                  </i>
                </a>
                <a href="#" class="bg-white text-blue-700 overflow-hidden">
                  <i>
                    <FaLinkedin size={"40px"} />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
