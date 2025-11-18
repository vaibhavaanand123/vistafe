import React, { useEffect, useRef } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function ResponsiveMenu({ id = "responsive-menu", isOpen, closeMenu, triggerRef }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function onKey(e) {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key === "Tab") {
        const focusable = menuRef.current?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeMenu]);

  useEffect(() => {
    function onDocClick(e) {
      if (!isOpen) return;
      if (!menuRef.current) return;
      if (
        !menuRef.current.contains(e.target) &&
        !(triggerRef && triggerRef.current && triggerRef.current.contains(e.target))
      ) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isOpen, closeMenu, triggerRef]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => {
        const firstAnchor = menuRef.current?.querySelector("a[href]");
        firstAnchor?.focus();
      }, 100);
      return () => clearTimeout(t);
    } else {
      triggerRef?.current?.focus?.();
    }
  }, [isOpen, triggerRef]);

  return (
    <div
      id={id}
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`fixed top-16 left-0 z-50  transform transition-transform duration-200 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="w-full bg-white backdrop-blur-sm px-6 py-6 shadow-lg">
        <nav aria-label="Mobile primary" className="flex flex-col gap-3">
          <NavLink to="/coffee" onClick={closeMenu} className="px-3 py-4 rounded-md text-lg font-semibold text-primary2">
            Coffee
          </NavLink>
          <NavLink to="/recipes" onClick={closeMenu} className="px-3 py-4 rounded-md text-lg font-semibold text-primary2">
            Recipes
          </NavLink>
          <NavLink to="/sustainability" onClick={closeMenu} className="px-3 py-4 rounded-md text-lg font-semibold text-primary2">
            Sustainability
          </NavLink>
          <NavLink to="/subscribe" onClick={closeMenu} className="px-3 py-4 rounded-md text-lg font-semibold text-primary2">
            Subscribe
          </NavLink>
        </nav>

        <div className="flex mt-6 p-2 rounded-md mx-auto justify-evenly">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
