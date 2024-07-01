import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const EmployeeTable = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNzZkODNiMDY2MDMwNzlhZjEyNGU5YjI4M2I2NDM4N2NhZjYwZTRmNGRkZWJiZGQ0ODI3OTA1YzUyNGQ1ZTE2YmUxZWNhYzNlNTE4NDFkNWEiLCJpYXQiOjE3MTkxOTg2ODcuMTQzNDE3LCJuYmYiOjE3MTkxOTg2ODcuMTQzNDE5LCJleHAiOjE3NTA3MzQ2ODcuMTM5NzA3LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.GYsO0AXCIDxftndD8NCGNBL_-IvR0jDHZBa1ureGiFN8bkn6vvIS_vqrzfvxwRqsb95VvHi3t51x37k0NSBlEZ1L35BVU2gNzPoTmypBbXvi_l87vRiN6NsgckKA5c-GrnJ8-ipES69Vkr_rgpufQmCMUenwmN58M4LpW4sLWh5ZQ9-Fo69wLyn_LCb6aQik9xJQtWRa7Qoy4GRswJNGsg6KkEYbErmDcso572dSPw-EvFrca-SCuWeyst4EBGLSgZlKJOSF3b0o8d1hk1j93Ll26tzvhssyyYwzWLVzA8rixkJCjrNOktI9VmxvAZhMKaGdh0iz2kA5-m5f9rwt9MzNlWOlHXCfYMn1Ogv0MzMXvaeJTLzOF9AkZVxPKFmISvSz3bYm79GOF15uJdyrnnbNfjip1kDloLYEHpQXG0kcYiXVDDgXNGeaDAD6Ya_2pV7mY7P5D3YiUD9-HvWAF_69bmZAVoxQDLDxmF_GWt2Tnw10Jh-xp2GZi48PVIEn5ZJNodPHnW91DVUzbcbpF9uWyX2RN6FEPtlQwarBaPYo_1ypKRpZbQMOKLjVfrJxoauC72hE5txSsEpUcnit3V5jop5Bv9lzULieEx3h49gDNgyZqDiKGB2Cp8E5dOe1adiwyewJWX55ZhgZfYp4-q62C9wuNdYW7Wtx3VdjrTk';
    useEffect(() => {
        fetchData(currentPage + 1); // API pages are usually 1-indexed
    }, [currentPage]);

    const fetchData = async (page) => {
      try {
          const response = await axios.get(`http://127.0.0.1:8000/api/v1/admin/employees?page=${page}`, {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          });
          console.log(response.data.data.data)
          setData(response.data.data.data);
          setTotalPages(response.data.data.pagination.total_page);
          console.log(response);
          console.log(totalPages);
      } catch (error) {
          console.error("Error fetching data", error);
      }
  };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
      <div className="container mx-auto px-4 py-8">
      <table className="min-w-full bg-white shadow-md rounded my-6">
          <thead>
              <tr className="border-b">
                  <th className="text-left p-3 px-5">ID</th>
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">Phone Number</th>
                  <th className="text-left p-3 px-5">Projects Count</th>
                  <th className="text-left p-3 px-5">Logo</th>
              </tr>
          </thead>
          <tbody>
              {data.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-orange-100">
                      <td className="p-3 px-5">{item.id}</td>
                      <td className="p-3 px-5">{item.name}</td>
                      <td className="p-3 px-5">{item.email}</td>
                      <td className="p-3 px-5">{item.phone_number}</td>
                      <td className="p-3 px-5">{item.projects_count}</td>
                      <td className="p-3 px-5">
                          {item.logo ? (
                              <img src={item.logo} alt={item.name} className="w-10 h-10 rounded-full" />
                          ) : (
                              "No Logo"
                          )}
                      </td>
                  </tr>
              ))}
          </tbody>
      </table>
      <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination flex justify-center'}
          activeClassName={'active'}
      />
  </div>
    );
};

export default EmployeeTable;
