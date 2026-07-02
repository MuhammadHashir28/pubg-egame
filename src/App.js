import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import './css/modern.css';
import Home from './pages/Home';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Map from './pages/Maps/Maps'
import ContactForm from './pages/ContactForm';
import Cursor from './components/Cursor/Cursor';
import CustomHeader from './components/CustomHeader/CustomHeader';
import SitePreloader from './components/SitePreloader/SitePreloader';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';
import CustomFooter from './components/CustomFooter/CustomFooter';
import BlogMainPage from './pages/BlogMainPage/BlogMainPage';
import BlogPage from './pages/BlogPage/BlogPage';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isMapRoute = location.pathname === '/Map';

  return (
    <>
      {loading && <SitePreloader />}
              <SmoothScroll />
              <ScrollToTopButton />

      <div className="app-root page-enter">
        <CustomHeader />
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/BlogMain" element={<BlogMainPage />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Contact" element={<ContactForm />} />
        </Routes>
        {!isMapRoute && <CustomFooter />}
      </div>
    </>
  );
}

export default App;
