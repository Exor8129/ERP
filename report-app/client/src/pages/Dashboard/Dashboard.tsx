import "./dashboard.css";
import {Unplug, NotebookTabs,ShoppingCart, LibraryBig } from 'lucide-react';
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="main-container">
      <div className="tabs">
        <Link to={"/sales"} className="tab">

          <LibraryBig size={44} strokeWidth={1.2} className="icon"/>

        </Link>
        <p className="name">SALES</p>

      </div>

      <div className="tabs">
        <Link to={"/purchase"} className="tab">

          <ShoppingCart size={44} strokeWidth={1.2} className="icon" />

        </Link>
        <p className="name">PURCHASE</p>

      </div>

      <div className="tabs">
        <Link to={"/accounts"}  className="tab">

          <NotebookTabs size={44} strokeWidth={1.2} className="icon" />

        </Link >
        <p className="name">ACCOUNTS</p>

      </div>

      <div className="tabs">
        <Link to={"/complaints"} className="tab">

          <Unplug size={44} strokeWidth={1.2} className="icon" />

        </Link>
        <p className="name">COMPLAINTS</p>

      </div>



      


    </div>

    </div>
    
  )
}

export default Dashboard