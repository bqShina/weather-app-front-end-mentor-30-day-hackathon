import React from "react";

const Header = () => {
  return (
    <div className="header flex justify-between items-center p-6">
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <button className="bg-neutral-800 text-neutral-200 font-dm text-body flex items-center gap-2 px-4 py-2 rounded">
        <img src="/images/icon-units.svg" alt="setting icon" />
        <span>Units</span>
        <img src="/images/icon-dropdown.svg" alt="dropdown icon" />
      </button>
    </div>
  );
};

export default Header;
