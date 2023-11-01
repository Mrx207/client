import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";

const DashboardContext = createContext();

const DashBoardLayout = () => {
  // temp
  const user = { name: "john" };
  const { showSidebar, setShowSidebar } = useState(false);
  const { isDarkTheme, setDarkTheme } = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle");
  };

  const toggleShowSidebar = () => {
    console.log(showsidebar);
  };

  const logoutUser = async () => {
    console.log(logout);
  };
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleShowSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashBoardLayout;
