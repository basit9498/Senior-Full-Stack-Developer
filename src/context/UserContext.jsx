import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkLogin = async () => {
    try {
      const userCookie = Cookies.get("token");
      if (userCookie) {
        // user me api
        // setUser(response.user);
        setUser({ id: "1", name: "Abdul Basit", email: "test.ab@ab.com" });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  const shareValue = {
    user,
    setUser,

    isLoading,

    logout,
  };

  //
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <UserContext.Provider value={shareValue}>{children}</UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
