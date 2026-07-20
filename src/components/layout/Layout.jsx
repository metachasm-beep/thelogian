import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './Navbar';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-sky-200 selection:text-sky-900">
        <Navbar />
        <main className="pt-20">
          <Outlet />
        </main>
      </div>
    </ReactLenis>
  );
}
