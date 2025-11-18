import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Vistafe. All rights reserved.</p>
        <nav aria-label="Footer">
          <div className="flex mt-6 p-2 rounded-md mx-auto justify-evenly">
                    <a href="https://www.instagram.com/Vistafe_coffee" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <FaInstagram className="text-2xl" />
                    </a>
                    <a href="https://www.facebook.com/sumit7055" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <FaFacebook className="text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/company/vistafe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedin className="text-2xl" />
                    </a>
                  </div>
          <ul className="flex gap-4 text-sm">
            <li><a href="/privacy" className="hover:underline">Privacy</a></li>
            <li><a href="/terms" className="hover:underline">Terms</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
