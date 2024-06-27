import React, { useState } from 'react';
import MultiSelectBox from '../../components/FormUI/MultiSelectBox';
import SelectBox from '../../components/FormUI/SelectBox';
import CheckBox from '../../components/FormUI/CheckBox';
import RadioBox from '../../components/FormUI/RadioBox';
import DatePickerBox from '../../components/FormUI/DatePickerBox';
import Button from '../../components/Button/Button';
import EmployeeTable from '../../../EmployeeTable';
import InputBox from '../../components/FormUI/InputBox';

const EmployeeCreate = () => {
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
    <div className="App">
      <h2 className="my-3">FORM</h2>
      <div className="container mx-auto">
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
            onChange={handleChange}search
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
        <Button buttonName="Create" color="bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-blue-800" onClick={handleSubmit}/>
    </div>
  );
};
export default EmployeeCreate;
