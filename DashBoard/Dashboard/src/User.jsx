import React, { useState } from "react";

function Users({ allUsers, departments }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editUser, setEditUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

  const handleEditClick = (user) => {
    console.log(user)
    setEditUser({ ...user });
    
    setIsEditModalOpen(true);
  };

  const handleEditChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEditUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSaveEdit = () => {
    const updatedUsers=allUsers.map((user)=>
    user.id=== editUser.id? editUser : user);
    allUsers.length = 0;
    allUsers.push(...updatedUsers);
    setIsEditModalOpen(false);
  };
  const handleDelete=(id)=>{
    const updatedUsers=allUsers.filter((user)=>user.id !== id);
    console.log("first",updatedUsers.length)
    allUsers.length = 0;
    allUsers.push(...updatedUsers);
  }

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


       {/* Sort Dropdown */}
  <select
    onChange={(e) => handleSortChange(e.target.value)}
    className="mb-4 ml-2 p-3  border border-gray-900 rounded-lg  focus:ring-2 focus:ring-blue-500"
  >
    <option value="">Filter By Names</option>
    <option value="asc">A to Z</option>
    <option value="desc">Z to A</option>
  </select>
      {/* Table */}
      <div className="bg-white shadow-lg h-[330px] overflow-auto mt-10">
        <table className="w-full text-center table-fixed border-collapse">
          <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
            <tr className="border-b">
              <th className="p-3 w-[50px]">ID</th>
              <th className="p-3 w-[120px]">First Name</th>
              <th className="p-3 w-[120px]">Last Name</th>
              <th className="p-3 w-[250px]">Email</th>
              <th className="p-3 w-[100px]">Gender</th>
              <th className="p-3 w-[150px]">Department</th>
              <th className="p-3 w-[150px]">Actions</th>
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
                {/* <td className="p-3" >
                    <img src={user.avatar} 
                     alt="User image is not available" 
                     className="w-8 h-8 rounded-full"></img> </td> */}
                <td className="p-3">{user.first_name}</td>
                <td className="p-3">{user.last_name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.gender}</td>
                <td className="p-3">{user.department}</td>
        {/* edit/del */}
        <td>
                <button
                  onClick={() => handleEditClick(user)}
                  className="cursor-pointer mt-2.5 bg-green-500 text-white px-3 py-1 mb-2 rounded hover:bg-green-600"
                >
                  Edit
                </button>
                <button
                onClick={()=> handleDelete(user.id)}
                // onClick={()=>console.log("first")}
                className="cursor-pointer bg-red-500 ml-1 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      {/* {isModalOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">

          <div className="h-[400px] overflow-auto bg-white p-3 rounded-lg shadow-lg w-[90%] max-w-md relative"
          >

            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            >
            &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">User Details</h2>
            <table className="min-w-full table-auto ">
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold"></td>
                  <td className="px-4 py-2 border-b" >
                    <img src={selectedUser.avatar} 
                     alt="User image is not available" 
                     className="w-26 h-26 rounded-full"></img> </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">ID</td>
                  <td className="px-4 py-2 border-b" >{selectedUser.id}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">First Name</td>
                  <td className="px-4 py-2 border-b" >{selectedUser.first_name}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Last Name</td>
                  <td className="px-4 py-2 border-b" >{selectedUser.last_name}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Contact</td>
                  <td className="px-4 py-2 border-b" >{selectedUser.phone}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Email</td>
                  <td className="px-4 py-2 border-b" >{selectedUser.email}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Gender</td>
                  <td className="px-4 py-2 border-b" >{selectedUser.gender}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">BirthDate</td>
                  <td className="px-4 py-2 border-b" >{selectedUser.birthdate}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Department</td>
                  <td className="px-4 py-2 border-b" >{selectedUser.department}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Company</td>
                  <td className="px-4 py-2 border-b" >{selectedUser.company_name}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Job-Tittle</td>
                  <td className="px-4 py-2 border-b" >{selectedUser.job_title}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b font-semibold">Address</td>
                  <td className="px-4 py-2 border-b" >{selectedUser.address[0].street}</td>
                </tr>
            </tbody>
            </table>
          </div>
        </div>
      )} */}
      {/* Edit Modal */}
      {isEditModalOpen && editUser && (
        <div className="main fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="sub main bg-white p-6 rounded-2xl shadow-xl w-[95%] max-w-lg">
            {/* <button onClick={() => setIsEditModalOpen(false)} className="  right-100 text-gray-600 hover:text-gray-900 text-3xl">
              &times;</button> */}
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
              Edit User Details
            </h2>
            <div className="flex flex-col gap-4 h-[300px] overflow-auto">
              <div>
                <label className="block text-gray-700 text-sm mb-1">First Name</label>
                <input
                  name="first_name"
                  value={editUser.first_name}
                  onChange={handleEditChange}
                  className="border border-gray-300 p-3 w-110  outline-none"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Last Name </label>
                <input
                  name="last_name"
                  value={editUser.last_name}
                  onChange={handleEditChange}
                  className="border border-gray-300 p-3 w-110  outline-none"
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={editUser.email}
                  onChange={handleEditChange}
                  className="border border-gray-300 p-3 w-110  outline-none"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Gender</label>
                <input
                  name="gender"
                  value={editUser.gender}
                  onChange={handleEditChange}
                  className="border border-gray-300 p-3 w-110  outline-none"
                  placeholder="Enter gender"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-1">Department</label>
                <input
                  name="department"
                  value={editUser.department}
                  onChange={handleEditChange}
                  className="border border-gray-300 p-3 w-110  outline-none"
                  placeholder="Enter department"
                />
              </div>
            </div>
            {/* action button */}
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setIsEditModalOpen(false)} 
              className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 cursor-pointer">
                Cancel
              </button>

              <button onClick={handleSaveEdit} 
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 cursor-pointer">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;




