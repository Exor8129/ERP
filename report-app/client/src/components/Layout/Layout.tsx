import { Outlet } from "react-router-dom";
import "./layout.css";
import {  ArrowRightLeft, ChevronRight, LoaderPinwheel, MessageSquare } from 'lucide-react';
import { useState } from "react";

const Layout = () => {
  const [open, setOpen] = useState(false);
  
  const toggleSidenav = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="layout-container">
      <nav className={`sidenavi ${open ? 'open' : 'closed'}`}>
        {/* Top section code starts here */}
        
        <div className="top-section">
          <div className="logo">
            <LoaderPinwheel size={34} strokeWidth={1.7} onClick={toggleSidenav}/>
          </div>
          <div className={`logo-name ${open ? 'visible' : 'hidden'}`}>
            <span className="name">Now</span><span className="name2">ERP</span>
          </div>
          <div className={`menu ${open?'open' : 'closed'}`}>
            <ChevronRight size={34} onClick={toggleSidenav} />
          </div>
        </div>
        {/* Top section code ends here */}
        

        {/* Business-Profile section code starts here */}

          <div className="business-container">
            <div className="business-logo">
              logo
            </div>
          </div>
          <div className="business-icons">
                <MessageSquare/>
                <ArrowRightLeft/>
                

              </div>

        {/* Business-Profile section code ends here */}
        

      </nav>
      <main className="main-content">
        <Outlet /> {/* This will render the current page content */}
      </main>
    </div>
  );
};

export default Layout;
