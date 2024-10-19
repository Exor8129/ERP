import { Link } from "react-router-dom";
import "./purchase.css"
import { House } from 'lucide-react';

const Purchase = () => {
  return (
    <div className="Page-container">
        <Link to={"/"} className="sidenav">
        <House className="icon" strokeWidth={1.5} />
        </Link>
    </div>
  )
}

export default Purchase