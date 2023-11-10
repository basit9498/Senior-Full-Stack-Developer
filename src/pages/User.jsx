import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useUserContext } from "../context/UserContext";

const User = () => {
  const { user } = useUserContext();

  return (
    <>
      <Layout>
        <section className="user_card_section">
          <img src={user?.picture?.data?.url} alt="user-avatar" />
          <div className="user_info_section">
            <div>
              <p>Name</p>
              <h1>{user?.name}</h1>
            </div>
            <div>
              <p>Email</p>
              <h1>{user?.email}</h1>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default User;
