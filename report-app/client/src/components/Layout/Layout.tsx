// Layout.tsx
import { Outlet } from "react-router-dom";
import "./layout.css";
import {LoaderPinwheel, Menu } from 'lucide-react';


const Layout = () => {
  return (
    <div className="layout-container">
      <nav className="sidenavi">
        <div className="top-section">
            <div className="logo">
                <LoaderPinwheel/>
            </div>
            <div className="logo-name">
            <span>Now</span><span>ERP</span>
            
            </div>
            <div className="menu">
            <Menu/>
            </div>

        </div>
        
      </nav>
      <main className="main-content">
        <Outlet /> {/* This will render the current page content */}
      </main>
    </div>
  );
};

export default Layout;
