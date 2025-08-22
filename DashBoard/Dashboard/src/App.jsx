import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Box from './component/Box';

const App = () => {
  const [usersData, setUsersData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsersData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://myfakeapi.com/api/users/');
      const data = await response.json();

      console.log('Fetched data:', data);

      const users=Array.isArray(data)? data : data.Users || [];
      console.log(users)

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
  useEffect(()=>{
    fetchUsersData()

  },[])

  console.log(usersData,"stored data");


  
  
 return (
    <div className="app h-[100vh] flex">

      {/* left side */}
      <div className='sidebar bg-slate-100 basis-64'>
        <h1>Sidebar</h1>
        <h1 className='bg-blue-500' flex  >Dashboard</h1>
  
    <div className='side-links'>
      <button onClick={fetchUsersData}>Add Users</button>
    </div>
      </div>


      {/* right side */}

            <div className='main bg-blue-100 basis-full pl-2'>
     <h1>Main menu</h1>
     {loading ?(
      <p>Loading...</p>
    ) : (
      <div className='flex gap-2 '>
      {usersData?.map((ele,idx) => {
        console.log(ele,"ekeeeee");
        
        return(
          <Box keys={idx} heading={ele.label} data={ele.count} />
        )
      })}
        </div>
          
    )}
      </div>
    </div>
  );
};

export default App; 










     
            
          
          
     

      
