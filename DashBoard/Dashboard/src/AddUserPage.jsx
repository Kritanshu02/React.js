import React, { useState } from "react";
function AddUserPage({ addUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !gender || !department) {
      setError("All fields are required");
      return;
    }

    const newUser = {
      "first_name":firstName,
      "last_name":lastName,
      "email":email,
      "gender":gender,
      "department":department,
    };

addUser(newUser)
    
    setFirstName("");
    setLastName("");
    setEmail("");
    setGender("");
    setDepartment("");
    setError("");

    alert("User Added Successfully!");
    console.log(newUser)
  };
  return (
    <div className="p-8 bg-white shadow-md rounded-md w-full max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New User</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="m-1">
        <div>
          <label className="block ">First Name:

          <input
            type="text" placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 ml-5 w-125 border border-gray-300 rounded"
            required
          />
          </label>
        </div>

        <div>
          <label className="block mt-5">Last Name:
          <input
            type="text" placeholder="Enter your last name"
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 ml-5 w-125 border border-gray-300 rounded"
            required
          />
          </label>
        </div>

        <div>
          <label className="block mt-5">Email:
          <input
            type="email" placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 ml-14 w-125 border border-gray-300 rounded"
            required
          />
          </label>
        </div>

        <div>
          <label className="block mt-5">Gender:
          <select
            value={gender} 
            onChange={(e) => setGender(e.target.value)}
            className="p-2 ml-10.5 w-125 border border-gray-300 rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          </label>
        </div>

        <div>
          <label className="block mt-5">Department:
          <input
            type="text" placeholder="Enter your department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="p-2 ml-2 w-125 border border-gray-300 rounded"
            required
          />
          </label>
        </div>

        <div>
          <button type="submit" className="mt-10 ml-60 cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUserPage;
