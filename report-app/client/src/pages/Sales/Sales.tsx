import "./sales.css";

import InputField from "../../components/InputField/InputField";

const Sales = () => {
  const items = [
    "Event Horizon",
    "Celebrate Events",
    "Dream Weddings",
    "Party Planners Inc.",
    "Festivity Masters",
    "Grand Gatherings",
    "Epic Events Co.",
    "Unity Celebrations",
    "Vintage Vows",
    "Premier Parties",
    "Joyful Journeys",
    "Elegant Affairs",
    "The Celebration Co.",
    "Radiant Receptions",
    "Blissful Events",
    "Luxe Gatherings",
    "Timeless Occasions",
    "Sparkle Events",
    "Signature Celebrations",
    "Creative Occasions",
  ];

  const transporter=["ANK","Speed N Safe","Babu Courier","Kunjappa"]

  return (
    <div className="salesPage-container">
      <div className="parent-container">
        <div className="child-container">
          <div className="user-panel-container">
            <InputField fieldName="Party Name" items={items} />

            <InputField fieldName="Transporter" items={transporter} />
          </div>
          <div className="party-details-container">
            <h1>Party-Details</h1>
          </div>
        </div>

        <div className="slip-details-table-container">
          <h1>Slip-Details-table</h1>
        </div>
      </div>

      <div className="slip-container">
        <h1>Slip-Details</h1>
      </div>
    </div>
  );
};

export default Sales;
