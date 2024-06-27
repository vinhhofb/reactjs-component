// ParentComponent.jsx

import React from 'react';
import Table from './app/components/Table/Table';
import Button from './app/components/Button/Button'; // Thay thế bằng component nút edit thực tế của bạn
import { toast } from 'react-toastify';


const EmployeeTable = () => {
  const headers = ['Name', 'Age', 'Location', 'Actions'];
  const data = [
    { name: 'John Doe', age: 28, location: 'New York' },
    { name: 'Jane Smith', age: 32, location: 'Los Angeles' },
    { name: 'Tom Brown', age: 25, location: 'Chicago' },
  ];

  const handleEdit = (index) => {
    toast.success('Employee created successfully!');
    console.log(`Edit row ${index}`);
    // Xử lý logic chỉnh sửa ở đây
  };

  const handleDelete = (index) => {
    console.log(`Delete row ${index}`);
    // Xử lý logic xóa ở đây
  };

  return (
    <div className="container mx-auto mt-4">
      <Table headers={headers} data={data}>
        {(rowIndex) => (
          <>
            <Button buttonName="Edit" color="bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-blue-800" onClick={() => handleEdit(rowIndex)} />
            <Button buttonName="Delete" color="bg-red-700 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hover:bg-red-800" onClick={() => handleDelete(rowIndex)} />
          </>
        )}
      </Table>
    </div>
  );
};

export default EmployeeTable;
