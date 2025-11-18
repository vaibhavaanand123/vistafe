import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Vistafe. All rights reserved.</p>
        <nav aria-label="Footer">
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
