import React, { useState } from 'react';
import MultiSelectBox from '../../components/FormUI/MultiSelectBox';
import SelectBox from '../../components/FormUI/SelectBox';
import CheckBox from '../../components/FormUI/CheckBox';
import RadioBox from '../../components/FormUI/RadioBox';
import DatePickerBox from '../../components/FormUI/DatePickerBox';
import Button from '../../components/Button/Button';
import EmployeeTable from '../../../EmployeeTable';
import InputBox from '../../components/FormUI/InputBox';
import * as yup from 'yup';

const EmployeeCreate = () => {
  const [formData, setFormData] = useState({
    tags: [],
    category: '',
    types: [],
    grant: '',
    date: '',
    name: ''
  });
  const [errors, setErrors] = useState({});
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

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const handleSubmit = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      console.log('Form data:', formData);
      // Handle form submission logic here (e.g., API call)
    } catch (error) {
      if (error.name === 'ValidationError') {
        const validationErrors = {};
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        console.error('Validation errors:', validationErrors);
        setErrors(validationErrors);
      }
    }
  };

  const schema = yup.object().shape({
    tags: yup.array().min(1, 'Options are required'),
    category: yup.string().required('Category is required'),
    types: yup.array().min(1, 'Select Options are required'),
    grant: yup.string().required('Select Options is required'),
    date: yup.date().required('Date is required'),
    name: yup.string().required('Name is required'),
  });
  console.log(errors);
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
            error={errors}
          />
          <SelectBox
            options={options}
            selectedOption={formData.category}
            onChange={handleChange}search
            label="Options"
            name="category"
            error={errors}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-3">
          <CheckBox
            options={options}
            selectedOptions={formData.types}
            onChange={handleChange}
            label="Select Options1"
            className="border p-4 rounded-md"
            name="types"
            error={errors}
          />
          <RadioBox
            options={options}
            selectedOption={formData.grant}
            onChange={handleChange}
            label="Select Options"
            className="border p-4 rounded-md"
            name="grant"
            error={errors}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-3">
          <DatePickerBox
            selectedDate={formData.date}
            onChange={handleChange}
            label="Date"
            name="date"
            error={errors}
          />
          <InputBox
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter text here"
            label="name"
            name="name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
            error={errors}
          />
        </div>
      </div>
        <Button buttonName="Create" color="bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-blue-800" onClick={handleSubmit}/>
    </div>
  );
};
export default EmployeeCreate;
