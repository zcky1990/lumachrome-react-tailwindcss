import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-row">
      {/* SideBar */}
      <div className="main flex flex-col w-full">
        {/* NavBar */}
        <div className="a">b</div>
        {/* navbar */}
        { children }
      </div>
    </div>
  );
};

export default DashboardLayout;
