import { Link } from "react-router-dom";
import "./accounts.css"
import { House } from 'lucide-react';

const Accounts = () => {
  return (
    <div className="Page-container">
        <Link to={"/"} className="sidenav">
        <House className="icon" strokeWidth={1.5} />
        </Link>
    </div>
  )
}

export default Accounts