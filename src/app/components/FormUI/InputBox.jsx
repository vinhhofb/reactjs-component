// TextInput.js
import React from 'react';

const TextInput = ({ value, onChange, placeholder, className = '', name, label }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value, name);
  };

  return (
    <div>
      {label && <label className="block text-left mb-2">{label}</label>}
        <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={className}
        />
    </div>
  );
};

export default TextInput;
