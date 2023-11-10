import React from "react";
import Logo from "../../assets/images/logo.png";
import UserIcon from "../../assets/images/user.svg";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <>
      <aside className="aside_section ">
        <div className="logo_section">
          <img src={Logo} alt="Logo" />
        </div>
        <section className="menu_item_section">
          <div className="menu_item " style={{ marginTop: "12px" }}>
            <Link to="/app" className="menu_item">
              <img src={UserIcon} alt="user-icon" />
              <span>User</span>
            </Link>
          </div>
        </section>
      </aside>
    </>
  );
};

export default Aside;
