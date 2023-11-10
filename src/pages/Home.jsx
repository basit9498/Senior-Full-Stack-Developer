import React, { useEffect } from "react";
import Logo from "../assets/images/logo.png";

const Home = () => {
  // check if user login
  useEffect(() => {
    console.log("Home Page Calling");
  }, []);
  return (
    <>
      <main className="login_section">
        <section className="section_right linear-gradient">
          <div>
            <img src={Logo} alt="Logo" className="logo-img" />
          </div>
          <h1>Welcome XGrid software</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
