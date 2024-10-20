// import React from 'react';
// import { TextField, Autocomplete } from '@mui/material';

// // Define the props interface
// interface SearchableDropdownProps {
//   placeholder:string[];
//   items: string[]; // Array of string items
//   onSelect: (value: string | null) => void; // Function to handle selection
// }

// const SearchableDropdown: React.FC<SearchableDropdownProps> = ({placeholder, items, onSelect }) => {
//   return (
//     <Autocomplete className="textfield"
//       options={items}
//       onChange={(event, value) => onSelect(value)} // Pass selected value to parent
//       renderInput={(params) => (
//         <TextField {...params} label={placeholder} variant="outlined" />
//       )}
//       getOptionLabel={(option) => option}
//       filterOptions={(options, { inputValue }) =>
//         options.filter((option) =>
//           option.toLowerCase().includes(inputValue.toLowerCase())
//         )
//       }
//     />
//   );
// };

// export default SearchableDropdown;
