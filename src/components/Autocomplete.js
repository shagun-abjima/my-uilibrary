import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';

const AutocompleteComponent = ({
  options = [],
  onInputChange = () => {},
  onOptionSelected = () => {},
  getOptionLabel = (option) => option.label,
  label = 'Autocomplete',
  fullWidth = true
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    onInputChange(newInputValue);
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={getOptionLabel}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onChange={(event, newValue) => onOptionSelected(newValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          fullWidth={fullWidth}
          
        />
      )}
      
    />
  );
};

export default AutocompleteComponent;
