import React from 'react';
import Select from 'react-select';

const MultiSelectBox = ({ options, selectedOptions, onChange, label, className = '', name }) => {
  const handleChange = (selectedItems) => {
    const selectedValues = selectedItems.map(item => item.value);
    onChange(selectedValues, name);
  };

  const selectedItems = selectedOptions.map(value => options.find(option => option.value === value)).filter(Boolean);
  console.log(selectedItems);

  return (
    <div className={className}>
      {label && <label className="block text-left mb-2">{label}</label>}
      <Select
        options={options}
        value={selectedItems}
        onChange={handleChange}
        isMulti
        closeMenuOnSelect={false}
        className="text-left"
      />
    </div>
  );
};

export default MultiSelectBox;
