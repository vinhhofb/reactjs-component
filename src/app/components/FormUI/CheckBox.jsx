import React from 'react';

const CheckBox = ({ options = [], selectedOptions, onChange, label, className = '', name }) => {
  const handleCheckboxChange = (optionValue) => {
    const selectedIndex = selectedOptions.indexOf(optionValue);
    if (selectedIndex === -1) {
      // Option was not selected, add it
      onChange([...selectedOptions, optionValue], name);
    } else {
      // Option was already selected, remove it
      const updatedSelection = [
        ...selectedOptions.slice(0, selectedIndex),
        ...selectedOptions.slice(selectedIndex + 1)
      ];
      onChange(updatedSelection, name);
    }
  };

  return (
    <div className={className}>
      {label && <label className="block text-left mb-2">{label}</label>}
      {options && options.length > 0 ? (
        options.map((option) => (
          <div key={option.value} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={option.value}
              name={option.value}
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className="mr-2"
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))
      ) : (
        <p>No options available</p>
      )}
    </div>
  );
};

export default CheckBox;
