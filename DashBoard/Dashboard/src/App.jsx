import React, { useState } from 'react';
import './index.css';
import { useEffect } from 'react';
import Box from './component/Box';
import User from './User';
import {Routes, Route, Link} from "react-router";
import AddUserPage from './AddUserPage';

const App = () => {
  const [usersData, setUsersData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [allUsers, setAllUsers] = useState([]);



  const fetchUsersData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://myfakeapi.com/api/users/');
      const data = await response.json();

      // console.log('Fetched data:', data);

      const users=Array.isArray(data)? data : data.Users || [];

      setAllUsers(users)
      
      // console.log(users)
      
      const uniqueDepartments = [...new Set(users.map(user => user.department))];
      setDepartments(uniqueDepartments);

      setUsersData ([
       { label:"totalUsers",
        count:users.length},
        {label:"verifiedEmails",
          count:users.filter((user)=>user.email_verified).length},
       { label:"unverifiedEmails",
        count:users.filter((user)=>!user.email_verified).length},
        {label:"subscribed",
          count:users.filter((user)=>user.subscribed).length},
        {label:"notSubscribed",
          count:users.filter((user)=>!user.subscribed).length}
      ]);
    }catch(error){
      console.error('Error fetching data:', error);
      setUsersData(null)
    }finally{
      setLoading(false)
    }
  }
   const addUser = (newUser) => {
    setAllUsers((prevUsers) => [...prevUsers, newUser]);
  };
  useEffect(()=>{
    fetchUsersData()

  },[])

  // console.log(allUsers,"stored data");
  
  return (
    
      <div className='flex h-screen bg-gray-100"'>
        
        {/* Sidebar */}
          <div className='w-64 bg-gray-800 text-white p-6'>
          {/* <h1 className=''>Sidebar</h1> */}
          <Link to="/">
      <button className='text-4xl text-white cursor-pointer bg-blue-600 hover:bg-blue-800 text-white rounded mb-10 '>Dashboard</button>
      </Link>
          <Link to="/users">
            <button className='bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600'>Users</button>
          </Link>
          <br/>
          <Link to="/add-user">
            <button className='bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600'>Add User</button>
          </Link>

          
                    <button onClick={fetchUsersData} className='bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-600'>Refresh Data</button>

          
        </div>

        {/* Main Content */}
          <div className='flex w-full p-5 bg-slate-200'>
          
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1 className='text-3xl font-bold mb-6'>Users-Data</h1>
                  {loading ? (
                    <p className='text-lg text-gray-700'>Loading...</p>
                  ) : (
                    <div className='grid grid-cols-3 gap-6 '>
                      {usersData?.map((ele, idx) => (
                        <Box key={idx} heading={ele.label} data={ele.count} />
                      ))}
                    </div>
                  )}
                </div>
              }
            />
            <Route path="/users" element={<User allUsers={allUsers} departments={departments} />} />
             <Route
              path="/add-user"
              element={<AddUserPage addUser={addUser} />}
            />

          </Routes>
        </div>
      </div>
    
  );
};

export default App;




















