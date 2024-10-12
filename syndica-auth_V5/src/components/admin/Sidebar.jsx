import React from 'react';
import sidebarLogo from '../../assets/res/admin/logo-bjmp.png';
import fadedLogo from '../../assets/res/admin/logo-image.png';
import '../../css/admin/dashboard/sidebar.css';

const Sidebar = ({ setCurrentPage }) => {
  return (
    <div className="sidebar w-56 h-screen p-4 fixed overflow-hidden">
      <div className="sidebar__header flex justify-evenly w-full">
        <img className="sidebar__logo w-16" src={sidebarLogo} alt="Logo" />
        <div className="sidebar__logo-info flex flex-col justify-center items-start px-2">
          <h3 className="sidebar__region">BJMPROIII</h3>
          <h4 className="sidebar__usertype text-sm font-medium">Admin</h4>
        </div>
      </div>

      <hr className="sidebar__divider w-full my-4" />

      <div className="sidebar__menu flex flex-col w-full h-full gap-2">
        <div className="sidebar__item flex items-center w-full h-12 gap-4 p-4 rounded-md" onClick={() => setCurrentPage('Dashboard')}>
          <svg width="20" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="sidebar__icon" d="M20 9.999V17C20 17.5523 19.5523 18 19 18H11V9.999H20ZM9 9.999V18H1C0.44772 18 0 17.5523 0 17V9.999H9ZM9 0V7.999H0V1C0 0.44772 0.44772 0 1 0H9ZM19 0C19.5523 0 20 0.44772 20 1V7.999H11V0H19Z"/>
          </svg>
          <p className="sidebar__item-text">Dashboard</p>
        </div>

        <div className="sidebar__item flex items-center w-full h-12 gap-4 p-4 rounded-md" onClick={() => setCurrentPage('Accounts')}>
          <svg width="20" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="sidebar__icon" d="M9.50065 7.91634C11.2495 7.91634 12.6673 6.49858 12.6673 4.74967C12.6673 3.00077 11.2495 1.58301 9.50065 1.58301C7.75175 1.58301 6.33398 3.00077 6.33398 4.74967C6.33398 6.49858 7.75175 7.91634 9.50065 7.91634ZM4.35482 10.2913C5.44788 10.2913 6.33398 9.40523 6.33398 8.31217C6.33398 7.21911 5.44788 6.33301 4.35482 6.33301C3.26176 6.33301 2.37565 7.21911 2.37565 8.31217C2.37565 9.40523 3.26176 10.2913 4.35482 10.2913ZM16.6257 8.31217C16.6257 9.40523 15.7395 10.2913 14.6465 10.2913C13.5534 10.2913 12.6673 9.40523 12.6673 8.31217C12.6673 7.21911 13.5534 6.33301 14.6465 6.33301C15.7395 6.33301 16.6257 7.21911 16.6257 8.31217ZM9.50065 8.70801C11.6868 8.70801 13.459 10.4802 13.459 12.6663V17.4163H5.54232V12.6663C5.54232 10.4802 7.31453 8.70801 9.50065 8.70801ZM3.95898 12.6663C3.95898 12.1177 4.03868 11.5878 4.18713 11.0874L4.05291 11.0992C2.66463 11.2496 1.58398 12.4255 1.58398 13.8538V17.4163H3.95898V12.6663ZM17.4173 17.4163V13.8538C17.4173 12.3796 16.2662 11.1743 14.8142 11.0874C14.9626 11.5878 15.0423 12.1177 15.0423 12.6663V17.4163H17.4173Z"/>
          </svg>
          <p className="sidebar__item-text">Accounts</p>
        </div>

        <div className="sidebar__item flex items-center w-full h-12 gap-4 p-4 rounded-md" onClick={() => setCurrentPage('Routing')}>
          <svg width="20" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="sidebar__icon" d="M3.16602 11.875V6.72917C3.16602 4.76165 4.761 3.16667 6.72852 3.16667C8.69605 3.16667 10.291 4.76165 10.291 6.72917V12.2708C10.291 13.3639 11.1771 14.25 12.2702 14.25C13.3632 14.25 14.2493 13.3639 14.2493 12.2708V6.98985C13.3269 6.66382 12.666 5.78409 12.666 4.75C12.666 3.43833 13.7293 2.375 15.041 2.375C16.3527 2.375 17.416 3.43833 17.416 4.75C17.416 5.78409 16.7551 6.66382 15.8327 6.98985V12.2708C15.8327 14.2384 14.2377 15.8333 12.2702 15.8333C10.3027 15.8333 8.70768 14.2384 8.70768 12.2708V6.72917C8.70768 5.6361 7.82158 4.75 6.72852 4.75C5.63545 4.75 4.74935 5.6361 4.74935 6.72917V11.875H7.12435L3.95768 15.8333L0.791016 11.875H3.16602Z"/>
          </svg>
          <p className="sidebar__item-text">Routing</p>
        </div>

        <div className="sidebar__item flex items-center w-full h-12 gap-4 p-4 rounded-md" onClick={() => setCurrentPage('Auditlogs')}>
          <svg width="20" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="sidebar__icon" d="M15.8333 17.4163H3.16667C2.72945 17.4163 2.375 17.0619 2.375 16.6247V2.37467C2.375 1.93745 2.72945 1.58301 3.16667 1.58301H15.8333C16.2706 1.58301 16.625 1.93745 16.625 2.37467V16.6247C16.625 17.0619 16.2706 17.4163 15.8333 17.4163ZM5.54167 4.74967V7.91634H8.70833V4.74967H5.54167ZM5.54167 9.49967V11.083H13.4583V9.49967H5.54167ZM5.54167 12.6663V14.2497H13.4583V12.6663H5.54167ZM10.2917 4.74967V7.91634H13.4583V4.74967H10.2917Z"/>
          </svg>
          <p className="sidebar__item-text">Audit Logs</p>
        </div>

        <div className="sidebar__item flex items-center w-full h-12 gap-4 p-4 rounded-md" onClick={() => setCurrentPage('Ticket')}>
          <svg width="20" height="20" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="sidebar__icon" d="M16.6296 2.375C17.0668 2.375 17.4212 2.72945 17.4212 3.16667V7.52083C16.3282 7.52083 15.4421 8.40698 15.4421 9.50003C15.4421 10.5931 16.3282 11.4792 17.4212 11.4792V15.8334C17.4212 16.2705 17.0668 16.625 16.6296 16.625H2.37956C1.94234 16.625 1.58789 16.2705 1.58789 15.8334V11.4792C2.68095 11.4792 3.56706 10.5931 3.56706 9.50003C3.56706 8.40698 2.68095 7.52083 1.58789 7.52083V3.16667C1.58789 2.72945 1.94234 2.375 2.37956 2.375H16.6296Z"/>
          </svg>
          <p className="sidebar__item-text">Ticket</p>
        </div>
      </div>

      <img className="sidebar__footer-logo w-24 mx-auto mt-6" src={fadedLogo} alt="BJMPROIII Logo" />
    </div>
  );
};

export default Sidebar;
