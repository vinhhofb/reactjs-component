import React from 'react';

const RadioBox = ({ options, selectedOption, onChange, label, className = '', name }) => {
  const handleRadioChange = (optionValue) => {
    onChange(optionValue, name);
  };

  return (
    <div className={className}>
      {label && <label className="block text-left mb-2">{label}</label>}
      {options.map((option) => (
        <div key={option.value} className="flex items-center mb-2">
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => handleRadioChange(option.value)}
            className="mr-2"
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioBox;
