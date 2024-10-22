import "./sales.css";
import InputField from "../../components/InputField/InputField";
import { Trash2,OctagonPause, PackagePlus, Pencil, Printer } from "lucide-react";
import { ItemSelecterPopup } from "../../components/ItemSelecterPopup/ItemSelecterPopup";
import { useState } from "react";
import SimpleDialogDemo from "../../components/Dialog/Dialog";

const Sales = () => {
  const items = [
    "Event Horizon",
    "Celebrate Events",
    "Dream Weddings",
    "Party Planners Inc.",
    // Add more items as needed
  ];

  const tableData = [
    { date:"12/10/24",slNo: 1, item: "Bipap Mask", qty: 10, gdl: "GDL123",pName:"Gracemed",slip:"EX-101" },
    { date:"16/10/24",slNo: 2, item: "Bipap Tubings", qty: 5, gdl: "GDL456",pName:"Gracemed",slip:"EX-101" },
    { date:"22/10/24",slNo: 3, item: "Glucometer", qty: 7, gdl: "GDL789",pName:"Grand Pharma",slip:"EX-102" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter the table data based on the search query
  const filteredData = tableData.filter((row) => {
    return (
      row.slip.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.pName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.date.includes(searchQuery)
    );
  });

  const transporter = ["ANK", "Speed N Safe", "Babu Courier", "Kunjappa"];
  const [showPopup, setShowPopup] = useState(false);

  const addItemHandler = () => {
    setShowPopup(!showPopup);
  };

  const closePopupHandler = () => {
    setShowPopup(false);
  };

  return (
    <div className="salesPage-container">
      <div className="parent-container">
        <div className="child-container">
          <div className="user-panel-container">
            <InputField fieldName="Party Name" items={items} />
            <InputField fieldName="Transporter" items={transporter} />
            <div className="item-select">
              <PackagePlus
                size={50}
                strokeWidth={1.4}
                onClick={addItemHandler}
              />
            </div>
          </div>
          <div className="party-details-container">
            <h1>Party-Details</h1>
            <SimpleDialogDemo/>
          </div>
        </div>

        <div className="slip-details-table-container">
        <div className="table-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Slip Number, Party Name, Item, or Date..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
        />
      </div>
      <table className="sales-table">
        <thead>
          <tr>
            <th>SL No</th>
            <th>Date</th>
            <th>Slip Number</th>
            <th>Party Name</th>
            <th>Item</th>
            <th>Qty</th>
            <th>GDL</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.slNo}</td>
                <td>{row.date}</td>
                <td>{row.slip}</td>
                <td>{row.pName}</td>
                <td>{row.item}</td>
                <td>{row.qty}</td>
                <td>{row.gdl}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No matching records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
        </div>
      </div>

      <div className="slip-container">
        <div className="slip-top-section">
          <div className="labels">
            <label>Slip No:</label>
            <label>Party Name:</label>
            <label>Transporter:</label>
          </div>
          <div className="label-props">
            <label>EX-101</label>
            <label>Gracemed</label>
            <label>Speed N Safe</label>
          </div>
        </div>

        {/* First fading border */}
        <div className="fading-border"></div>

        <div className="table-container">
          <table className="sales-table">
            <thead>
              <tr>
                <th>SL No</th>
                <th>Item</th>
                <th>Qty</th>
                <th>GDL</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.slNo}</td>
                  <td>{row.item}</td>
                  <td>{row.qty}</td>
                  <td>{row.gdl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Second fading border */}
        <div className="fading-border"></div>
        <div className="slip-icons">
        <div className="icon-container"><OctagonPause size={30} strokeWidth={1.4} /></div>
        <div className="icon-container"><Pencil size={30} strokeWidth={1.4} /></div>
        <div className="icon-container"><Printer size={30} strokeWidth={1.4} /></div>
        <div className="icon-container"><Trash2 size={30} strokeWidth={1.4} /></div>
        
        
        
      </div>

        
      </div>
      

      {showPopup && <ItemSelecterPopup closePopup={closePopupHandler} />}
    </div>
  );
};

export default Sales;
