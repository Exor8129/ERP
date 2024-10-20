import React, { useState } from 'react';
import './InputField.css';

interface InputFieldProps {
  fieldName: string | null;
  items: string[];
}

const InputField: React.FC<InputFieldProps> = ({ fieldName, items }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      const filtered = items.filter(item => 
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  };

  const handleSelect = (item: string) => {
    setInputValue(item);
    setFilteredItems([]);
  };

  return (
    <div className="input-box">
      <input
        type="text"
        required
        value={inputValue}
        onChange={handleChange}
      />
      <span>{fieldName}</span>
      {filteredItems.length > 0 && (
        <div className="dropdown-container">
          <ul className="dropdown">
            {filteredItems.map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputField;
