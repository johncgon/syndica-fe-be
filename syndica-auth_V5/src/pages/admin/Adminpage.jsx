import React, { useState, useEffect } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import Dashboard from "../../components/admin/dashboard/AdminDashboard";
import Accounts from "../../components/admin/Accounts/Accounts";
import Routing from "../../components/admin/routing/Routing";
import Auditlogs from "../../components/admin/auditlog/Auditlog";
import Userprofile from "../../components/user-profile/Userprofile";
import "../../css/admin/dashboard/adminpage.css";
import "../../css/admin/dashboard/admin-responsive.css";

const PAGES = {
  DASHBOARD: "Dashboard",
  ACCOUNTS: "Accounts",
  ROUTING: "Routing",
  AUDIT_LOGS: "Auditlogs",
  USER_PROFILE: "User Profile", // Added this constant for consistency
};

const AdminPage = () => {
  // usertype will come from the data that will be fetched from the database
  const [userType, setUserType] = useState("admin");

  const [currentPage, setCurrentPage] = useState(() => {
    return localStorage.getItem("currentPage") || PAGES.DASHBOARD;
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case PAGES.DASHBOARD:
        return <Dashboard />;
      case PAGES.ACCOUNTS:
        return <Accounts />;
      case PAGES.ROUTING:
        return <Routing />;
      case PAGES.AUDIT_LOGS:
        return <Auditlogs />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="adminpage w-screen h-screen flex">
      {currentPage === PAGES.USER_PROFILE ? (
        <>
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <Userprofile userType={userType} />
        </>
      ) : (
        <>
          <Sidebar setCurrentPage={setCurrentPage} />
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <div className="adminpage__content w-full overflow-hidden p-6">
            {renderContent()}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPage;
