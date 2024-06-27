import React from 'react';
import Select from 'react-select';

const SelectBox = ({ options, selectedOption, onChange, label, className = '', name }) => {
  const handleChange = (selectedItem) => {
    onChange(selectedItem.value, name);
  };

  const selectedValue = options.find(option => option.value === selectedOption);

  return (
    <div className={className}>
      {label && <label className="block text-left mb-2">{label}</label>}
      <Select
        options={options}
        value={selectedValue}
        onChange={handleChange}
        isClearable
        className="text-left" // Căn lề trái cho Select
      />
    </div>
  );
};

export default SelectBox;
