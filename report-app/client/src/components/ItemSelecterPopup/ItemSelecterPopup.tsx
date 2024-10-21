import "./ItemSelecterPopup.css"
import InputField from "../InputField/InputField"
import { SquareX } from 'lucide-react';

const products =["Bipap Mask","Bipap Tubings","Glucometer"]



export const ItemSelecterPopup = ({ closePopup }) => {
  return (
    <div className="popup-container">
          <div className="popup">
            <div className="close-btn" onClick={closePopup}>
            <SquareX strokeWidth={1.4}/>
            </div>
                
            <h2>Add Item</h2>
            <InputField items={products} fieldName="Select Item"/>
            
            <input type="number" placeholder="Enter quantity" />
            

            <div className="popup-actions">
              <button>Next Item</button>
              <button>Finish</button>
            </div>
          </div>
        </div>
      )}
    
 