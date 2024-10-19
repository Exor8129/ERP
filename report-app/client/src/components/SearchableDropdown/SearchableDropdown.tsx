import React, { useState } from 'react';
import './searchableDropdown.css';

interface SearchableDropdownProps {
  items: string[]; // Array of strings as items
  onSelect: (item: string) => void; // Callback for selecting an item
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({ items, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>(''); // Define the type for state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (item: string) => {
    onSelect(item); // Trigger the onSelect callback
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="dropdown-container">
      <input
        type="text"
        className="dropdown-input"
        placeholder="Search Party..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsOpen(true)} // Open dropdown when input is focused
      />
      {isOpen && (
        <ul className="dropdown-list">
          {filteredItems.map((item, index) => (
            <li key={index} className="dropdown-item" onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
          {filteredItems.length === 0 && <li className="no-results">No results found</li>}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
