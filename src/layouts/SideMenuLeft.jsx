import React from "react";
import logo from "../assets/images/logo.png";

function SideMenuLeft() {
  return (
    <aside>
      <div className="top">
        <div className="logo">
          <img src={logo} />
          <h2>
            SHO <span className="danger">U</span>RAV
          </h2>
        </div>
        <div className="close" id="close-btn">
          <span class="material-icons-sharp">close</span>
        </div>
      </div>

      <div className="sidebar">
        <a href="#">
          <span class="material-icons-sharp">grid_view</span>
          <h3>Dashboard</h3>
        </a>
        <a href="#" className="active">
          <span class="material-icons-sharp">person</span>
          <h3>Customers</h3>
        </a>
        <a href="#">
          <span class="material-icons-sharp">receipt_long</span>
          <h3>Orders</h3>
        </a>
        <a href="#">
          <span class="material-icons-sharp">insights</span>
          <h3>Alalytics</h3>
        </a>
        <a href="#">
          <span class="material-icons-sharp">mail_outline</span>
          <h3>Messages</h3>
          <span className="message-count">26</span>
        </a>
        <a href="#">
          <span class="material-icons-sharp">inventory</span>
          <h3>Products</h3>
        </a>
        <a href="#">
          <span class="material-icons-sharp">report_gmailerrorred</span>
          <h3>Reports</h3>
        </a>
        <a href="#">
          <span class="material-icons-sharp">settings</span>
          <h3>Settings</h3>
        </a>
        <a href="#">
          <span class="material-icons-sharp">add</span>
          <h3>Add Product</h3>
        </a>

        <a href="#">
          <span class="material-icons-sharp">logout</span>
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  );
}
export default SideMenuLeft;
