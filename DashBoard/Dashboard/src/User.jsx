import React, { useState } from 'react';
import { Link } from 'react-router';

function Users({ allUsers, departments }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  const filteredUsers = allUsers
    .filter(user => {
      return (
        user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .filter(user => {
      if (!selectedDepartment) return true;
      return user.department === selectedDepartment;
    }).sort((a, b) => {
      const nameA = a.first_name + ' ' + a.last_name;
      const nameB = b.first_name + ' ' + b.last_name;
      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB); 
      } else {
        return nameB.localeCompare(nameA); 
      }
    });
    // console.log("first",filteredUsers)
    // console.log("second",allUsers)
    

  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h1 className='text-3xl font-semibold mb-8'>Users</h1>
      
      <input
        className="mb-4 p-3 border border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Search By Name"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* Department Dropdown */}
      <select
        className="mb-4 ml-2 p-3  border border-gray-900 rounded-lg  focus:ring-2 focus:ring-blue-500"
        value={selectedDepartment}
        onChange={handleDepartmentChange}
      >
        <option value="">All Departments</option>
        {departments.map((department, index) => (
          <option key={index} value={department}>
            {department}
          </option>
        ))}
      </select>

      {/* Sort Buttons */}
      <div className='mb-4 '>
        <button onClick={() => handleSortChange("asc")} className='bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600 cursor-pointer'>Sort by Name (Asc)</button>
        <button onClick={() => handleSortChange("desc")}className='bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600 cursor-pointer'>Sort by Name (Desc)</button>
      </div>

      <div className=' bg-white shadow-lg max-h-[69%] overflow-auto'>
        <table className='border-1 text-center'>
          <thead className='bg-gray-100 text-gray-700'>
            <tr className='px-4 py-2 border-b'>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className=' border-b'>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      
    </div>
  );
}

export default Users;
