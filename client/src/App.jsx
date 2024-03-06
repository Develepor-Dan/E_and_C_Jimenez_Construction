// App.jsx
import { useState } from 'react'
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
// import './App.css'
import Header from './components/Header';
import Footer from './components/Footer'

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Error from './pages/Error';
import Project from './pages/Projects';
import Services from './pages/Services';

function App() {
  const location = useLocation(); // Use useLocation hook to get the current location
  const currentPage = location.pathname;

   // Define a function to render the appropriate page component based on the current path
   const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Services />;
      case '/about-us':
        return <AboutUs />;
      case '/contact-us':
        return <ContactUs />;
        case '/projects':
          return <Project/>;
      default:
        return <Error />;
    }
  };

  return (
    <div>
      <Header />
      <main>
        {/* Render the appropriate page component based on the current path */}
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;