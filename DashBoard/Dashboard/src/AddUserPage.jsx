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
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Add New User</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block">Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block">Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block">Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUserPage;
