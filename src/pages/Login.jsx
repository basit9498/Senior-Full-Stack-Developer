import React, { useEffect } from "react";
import Logo from "../assets/images/logo.png";

import Cookies from "js-cookie";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useUserContext();
  const navigation = useNavigate();

  const handleLogin = async (response) => {
    setUser({ id: "1", name: "Abdul Basit", email: "test.ab@ab.com" });
    Cookies.set("token", "my-dumy-token", {
      expires: response.expiresIn / 86400,
      sameSite: "strict",
    });
  };
  // check if user login
  useEffect(() => {
    if (user) {
      navigation("/app");
    }
  }, [user]);

  return (
    <>
      <main className="login_section">
        <section className="section_right linear-gradient">
          <div>
            <img src={Logo} alt="Logo1" className="logo-img" />
          </div>
          <h1>Welcome XGrid software</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </section>
        <section className="section_left">
          <div className="login_from_section">
            <h2>LOGIN</h2>
            <form onSubmit={handleLogin}>
              <div className="form_input_field">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form_input_field">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <p>Forgot password?</p>
              <button className="button linear-gradient login_button">
                Login
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
