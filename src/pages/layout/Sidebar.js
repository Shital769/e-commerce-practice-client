import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-menu ">
      <div className="mt-5">
        <div className="text-center fe-bolder">Admin Menu</div>
      </div>
      <hr />
      <ul>
        <li>
          <Link to="/dashboard">
            <i className="fa-solid fa-gauge"></i> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/category">
            <i className="fa-sharp fa-solid fa-sitemap"></i> Category
          </Link>
        </li>
        <li>
          <Link to="/products">
            <i className="fa-solid fa-box"></i> Products
          </Link>
        </li>
        <li>
          <Link to="/payment-method">
            <i className="fa-solid fa-credit-card"></i> Payment Methods
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <i className="fa-solid fa-truck"></i> Orders
          </Link>
        </li>
        <li>
          <Link to="/customers">
            <i className="fa-solid fa-users"></i> Customers
          </Link>
        </li>
        <li>
          <Link to="/setting">
            <i className="fa-solid fa-gear"></i> Setting
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
