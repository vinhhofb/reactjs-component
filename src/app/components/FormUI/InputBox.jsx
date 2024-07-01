import React from 'react';

const TextInput = ({ value, onChange, placeholder, className = '', name, label, error }) => {
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
      {error[name] && <div className="text-red-500 mt-1 text-sm">{error[name]}</div>}
    </div>
  );
};

export default TextInput;