import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Subpage from './pages/Subpage';

export default function App() {
  const subpagePaths = [
    '/online-application-form-for-admission',
    '/online-enquiry',
    '/frequently-asked-questions',
    '/academic',
    '/list-of-graduation',
    '/prominent-doctorate-recipients-of-abts',
    '/objectives',
    '/doctrinal-statement-of-faith',
    '/abts-ministries',
    '/abts-indo-burma-border-area-ministries-pictures',
    '/news',
    '/contact-us',
    '/prayer-request',
    '/testimonials'
  ];

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {subpagePaths.map(path => (
          <Route key={path} path={path.substring(1)} element={<Subpage />} />
        ))}
      </Route>
    </Routes>
  );
}
