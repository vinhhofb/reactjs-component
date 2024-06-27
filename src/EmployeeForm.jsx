import React, { useState } from 'react';
import MultiSelectBox from './app/components/FormUI/MultiSelectBox';
import SelectBox from './app/components/FormUI/SelectBox';
import CheckBox from './app/components/FormUI/CheckBox';
import RadioBox from './app/components/FormUI/RadioBox';
import DatePickerBox from './app/components/FormUI/DatePickerBox';
import InputBox from './app/components/FormUI/InputBox';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    tags: [],
    category: '',
    types: [],
    grant: '',
    date: '',
    name: ''
  });
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ];

  const handleChange = (selectedValues, name) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: selectedValues
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <h2 className="mt-3">FORM</h2>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4 mb-3">
          <MultiSelectBox
            options={options}
            selectedOptions={formData.tags}
            onChange={handleChange}
            label="Options"
            name="tags"
          />
          <SelectBox
            options={options}
            selectedOption={formData.category}
            onChange={handleChange}
            label="Options"
            name="category"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-3">
          <CheckBox
            options={options}
            selectedOptions={formData.types}
            onChange={handleChange}
            label="Select Options"
            className="border p-4 rounded-md"
            name="types"
          />
          <RadioBox
            options={options}
            selectedOption={formData.grant}
            onChange={handleChange}
            label="Select Options"
            className="border p-4 rounded-md"
            name="grant"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-3">
          <DatePickerBox
            selectedDate={formData.date}
            onChange={handleChange}
            label="Date"
            name="date"
          />
          <InputBox
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter text here"
            label="name"
            name="name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
        </div>
      </div>
      <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
    </div>
  );
};
export default EmployeeForm;
