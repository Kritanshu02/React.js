import React, { use, useState } from "react";

function SearchByBirthdate({ users }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const [year, month, day] = selectedDate.split("-");

  function handleFilter() {
    if (!day || !month) return;

    const filtered = users.filter((user) => {
      if (!user.birthdate) return false;
      // const date = new Date(user.birthdate);
      // return date.getDate() === parseInt(day) && date.getMonth() + 1 === parseInt(month);
      const uDOB = user.birthdate.split("/");
      const uDate = uDOB[0];
      const uMonth = uDOB[1];
      const uYear = uDOB[2];
      return (
        +uDate === parseInt(day) &&
        +uMonth === parseInt(month));
    });

    // setFilteredUsers(filtered);
    setFilteredResults(filtered);
  }
  console.log(filteredResults);

  return (
    <div className="p-8 bg-white shadow-md rounded-md w-full max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Search By Birthday
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div>
          <div>
            <label className="block text-l font-medium text-gray-700 mb-1">
              Select Date:
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="ml-4 px-3 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>
        </div>

        <div>
          <button
            onClick={handleFilter}
            className="ml-4 mt-1 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Filter
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Filtered Users:
        </h2>
        {filteredResults.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {filteredResults.map((user, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-medium">
                  {user.first_name} {user.last_name}
                </span>{" "}
                — {user.birthdate}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchByBirthdate;
