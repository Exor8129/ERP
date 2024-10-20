import { Outlet, useNavigate } from "react-router-dom";
import "./layout.css";
import {
  Unplug,
  NotebookPen,
  PackagePlus,
  ReceiptIndianRupee,
  ArrowRightLeft,
  ChevronRight,
  LoaderPinwheel,
  MessageSquare,
  Sun,
  Settings,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import Tab from "../Tabs/Tabs";

const Layout = () => {
  const [open, setOpen] = useState(false);

  const toggleSidenav = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const [activeTab, setActiveTab] = useState("sales");
  const navigate = useNavigate();
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);

    switch (tab) {
      case "Sales":
        navigate("/sales"); // Adjust this path based on your routes
        break;
      case "Purchase":
        navigate("/purchase");
        break;
      case "Accounts":
        navigate("/accounts");
        break;
      case "Complaints":
        navigate("/complaints");
        break;
      // case "Settings":
      //   navigate("/settings");
      //   break;
      // case "Logout":
      //   // Handle logout logic here (if applicable)
      //   break;
      default:
        break;
    }
  };

  return (
    <div className="layout-container">
      <nav className={`sidenavi ${open ? "open" : "closed"}`}>
        {/* Top section code starts here */}

        <div className="top-section">
          <div className="logo">
            <LoaderPinwheel
              size={34}
              strokeWidth={1.7}
              onClick={toggleSidenav}
            />
          </div>
          <div className={`logo-name ${open ? "visible" : "hidden"}`}>
            <span className="name">Now</span>
            <span className="name2">ERP</span>
          </div>
          <div className={`menu ${open ? "open" : "closed"}`}>
            <ChevronRight size={34} onClick={toggleSidenav} />
          </div>
        </div>
        {/* Top section code ends here */}

        {/* Business-Profile section code starts here */}

        <div className="business-container">
          <div className="business-logo">logo</div>
        </div>
        <div className="business-icons">
          <MessageSquare />
          <ArrowRightLeft />
          <Sun />
        </div>
        <div className="fadeout-line"></div>

        {/* Business-Profile section code ends here */}

        {/* Tab section code starts here */}
        <div className="tab-section">
          <Tab
            label="Sales"
            icon={ReceiptIndianRupee}
            isActive={activeTab === "Sales"}
            onClick={() => handleTabClick("Sales")}
          />

          <Tab
            label="Purchase"
            icon={PackagePlus}
            isActive={activeTab === "Purchase"}
            onClick={() => handleTabClick("Purchase")}
          />

          <Tab
            label="Accounts"
            icon={NotebookPen}
            isActive={activeTab === "Accounts"}
            onClick={() => handleTabClick("Accounts")}
          />

          <Tab
            label="Complaints"
            icon={Unplug}
            isActive={activeTab === "Complaints"}
            onClick={() => handleTabClick("Complaints")}
          />
          <div className="fadeout-line"></div>
        </div>

        {/* Tab section code ends here */}

        {/* Footer section code starts here */}
        <div className="footer-section">
          <Tab
            label="Settings"
            icon={Settings}
            isActive={activeTab === "Settings"}
            onClick={() => handleTabClick("Settings")}
          />

          <Tab
            label="Logout"
            icon={LogOut}
            isActive={activeTab === "Logout"}
            onClick={() => handleTabClick("Logout")}
          />
        </div>
        {/* Footer section code starts here */}
      </nav>
      <main className="main-content">
        <Outlet /> {/* This will render the current page content */}
      </main>
    </div>
  );
};

export default Layout;
