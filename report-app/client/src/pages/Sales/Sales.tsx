import { Link } from "react-router-dom";
import "./sales.css"
import { House } from 'lucide-react';
import SearchableDropdown from "../../components/SearchableDropdown/SearchableDropdown";


const Sales = () => {
  const items = ['Gracemed', 'Medicastle', 'General Surgicals', 'Vita Surge', 'Grand Pharma', 'Yuzaxy', 'Amal Pharma'];

  const handleSelect = (selectedItem: string) => {
    alert(`You selected: ${selectedItem}`);
  };

  return (
    <div className="salesPage-container">
      <Link to={"/"} className="sidenav">
        <House className="icon" strokeWidth={1.5} />
      </Link>
      <div className="bg-container">
        <p className="text">
          Sales Department
        </p>
        <div className="header-container">
          <div className="dropdown"><SearchableDropdown items={items} onSelect={handleSelect} /></div>
        </div>
        <div className="body">
          <div className="body-container-left">
          </div>
          <div className="body-container-right">

          </div>
        </div>

        <div className="footer-container">

        </div>

      </div>
    </div>
  )
}

export default Sales