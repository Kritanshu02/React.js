import React, { useState } from "react";

function Users({ allUsers, departments }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
 
  const[selectedUser, setSelectedUser]=useState(null)
  const[isModalOpen, setIsModalOpen]=useState(false)



  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

    const handleRowClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const filteredUsers = allUsers
    .filter((user) => {
      return (
        user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .filter((user) => {
      if (!selectedDepartment) return true;
      return user.department === selectedDepartment;
    })
    .sort((a, b) => {
      const nameA = a.first_name + " " + a.last_name;
      const nameB = b.first_name + " " + b.last_name;
      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  // console.log("first",filteredUsers)
  // console.log("second",allUsers)

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Users</h1>

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
      <div className="mb-4 ">
        <button
          onClick={() => handleSortChange("asc")}
          className="bg-blue-500  text-white py-2 ml-150 px-4 rounded mr-2 hover:bg-blue-600 cursor-pointer"
        >
          Sort by Name (Asc)
        </button>
        <button
          onClick={() => handleSortChange("desc")}
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600 cursor-pointer"
        >
          Sort by Name (Desc)
        </button>
      </div>



     {/* Table */}
      <div className="bg-white shadow-lg h-[340px] overflow-auto">
        <table className="w-full text-center table-fixed border-collapse">
          <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
            <tr className="border-b">
              <th className="p-3 w-[50px]">ID</th>
              <th className="p-3 w-[120px]">First Name</th>
              <th className="p-3 w-[120px]">Last Name</th>
              <th className="p-3 w-[250px]">Email</th>
              <th className="p-3 w-[100px]">Gender</th>
              <th className="p-3 w-[150px]">Department</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                onClick={() => handleRowClick(user)}
                className="border-b hover:bg-gray-100 cursor-pointer"
              >
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.first_name}</td>
                <td className="p-3">{user.last_name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.gender}</td>
                <td className="p-3">{user.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-3 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            >
            &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">User Details</h2>
            <ul className="space-y-2">
              <li><strong>ID:</strong> {selectedUser.id}</li>
              <li><strong>First Name:</strong> {selectedUser.first_name}</li>
              <li><strong>Last Name:</strong> {selectedUser.last_name}</li>
              <li><strong>Email:</strong> {selectedUser.email}</li>
              <li><strong>Gender:</strong> {selectedUser.gender}</li>
              <li><strong>Department:</strong> {selectedUser.department}</li>
            </ul>
          </div>
        </div>
      )}

    </div>
  );
}

export default Users;
