import React, { useEffect } from 'react';
import TopBar from '../components/TopBar';
import ItemScreen from '../components/ItemScreen';



const Dashboard = () => {
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     const decodedToken = jwt.decode(token);
  //     if (decodedToken && typeof decodedToken === 'object') {
  //       const { exp } = decodedToken;
  //       const currentTime = Date.now() / 1000;
  //       if (exp < currentTime) {
  //         localStorage.removeItem('token');
  //         window.location.href = '/signin';
  //       }
  //     }
  //   } else {
  //     window.location.href = '/signin';
  //   }
  // }, []);


  return (
    <main className="dashboard-container flex-1 flex-col  w-screen h-screen overflow-hidden">



        <div className="items-container h-25 bg-blue-100   md:w-full">
          <TopBar/>
        </div>

        <div className="  md:w-full bg-blue-600  ">
          <ItemScreen/>
        </div>

      </main>
  );
};

export default Dashboard;