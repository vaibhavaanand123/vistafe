import React, { useCallback, useEffect, useRef, useState, lazy, Suspense } from "react";
import LogoImg from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const ResponsiveMenu = lazy(() => import("./ResponsiveMenu"));

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const triggerRef = useRef(null);

  const toggleMenu = useCallback(() => setIsMenuOpen((v) => !v), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Close menu when resized to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768 && isMenuOpen) closeMenu();
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm border-b" aria-label="Top navigation">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
            ref={triggerRef}
            className="inline-flex items-center justify-center p-2 rounded-md text-primary2 md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                className="transition-transform duration-200"
                d={isMenuOpen ? "M6 6L18 18" : "M4 6h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="transition-all duration-200"
                d={isMenuOpen ? "M12 12L12 12" : "M4 12h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="transition-all duration-200"
                d={isMenuOpen ? "M6 18L18 6" : "M4 18h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <Link to="/" className="flex-1 md:block flex justify-center md:justify-center">
            <img src={LogoImg} alt="Vistafe — coffee meets culture" className="h-11 object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            <div className="flex items-center gap-3">
              <NavLink to="/coffee" className="px-3 py-2 rounded-md text-lg font-semibold text-primary2 hover:bg-secondary2/10">
                Coffee
              </NavLink>
              <NavLink to="/recipes" className="px-3 py-2 rounded-md text-lg font-semibold text-primary2 hover:bg-secondary2/10">
                Recipes
              </NavLink>
              <NavLink to="/sustainability" className="px-3 py-2 rounded-md text-lg font-semibold text-primary2 hover:bg-secondary2/10">
                Sustainability
              </NavLink>
              <NavLink to="/subscribe" className="px-3 py-2 rounded-md text-lg font-semibold text-primary2 hover:bg-secondary2/10">
                Subscribe
              </NavLink>
            </div>

            <div className="flex items-center gap-3">
              <NavLink to="/buynow" className="px-3 py-1 rounded-md border border-nescafe-accent text-sm text-primary2 hover:bg-secondary2/10">
                Buy Now
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <div className="h-16" />

      {/* overlay */}
      <div
        aria-hidden={!isMenuOpen}
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-200 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      <Suspense fallback={null}>
        <ResponsiveMenu id="mobile-menu" isOpen={isMenuOpen} closeMenu={closeMenu} triggerRef={triggerRef} />
      </Suspense>
    </>
  );
}
