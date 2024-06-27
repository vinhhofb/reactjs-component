import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Để import CSS của react-datepicker

const DatePickerBox = ({ selectedDate, onChange, label, className = '', name }) => {
  // Hàm này sẽ được gọi khi có sự thay đổi ngày
  const handleDateChange = (date) => {
    onChange(date, name); // Gọi hàm callback onChange và truyền giá trị ngày mới
  };

  return (
    <div>
      {label && <label className="block text-left mb-2">{label}</label>}
      <div className={`${className} border border-gray-300 p-2 rounded-md`}>
        <DatePicker
            selected={selectedDate} // Giá trị ngày được chọn
            onChange={handleDateChange} // Hàm callback khi có sự thay đổi ngày
            dateFormat="dd/MM/yyyy" // Định dạng ngày tháng
            className="form-control w-full text-left border-none outline-none" // Class CSS cho DatePicker (tuỳ chọn)
        />
      </div>
    </div>
  );
};

export default DatePickerBox;
