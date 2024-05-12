import React from 'react';
import LeftSideBar from '../components/LeftSidebar';
import ItemScreen from '../components/ItemScreen';


const Dashboard = () => {
  return (
    <main className="dashboard-container flex-1 flex-row  w-screen h-screen overflow-hidden">

        <div className="items-container  bg-blue-100   md:w-full">
          <LeftSideBar/>
        </div>

        <div className="cards-container    md:w-full bg-blue-600  ">
          <ItemScreen/>
        </div>

      </main>
  );
};

export default Dashboard;