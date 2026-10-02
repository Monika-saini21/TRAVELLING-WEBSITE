import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const login = (loggedInUser) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "currentUser",
      JSON.stringify(loggedInUser)
    );

    setIsLoggedIn(true);
    setUser(loggedInUser);
  };

  const adminLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("isAdmin", "true");

    setIsLoggedIn(true);
    setIsAdmin(true);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("currentUser");

    setIsLoggedIn(false);
    setIsAdmin(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isAdmin,
        user,
        login,
        adminLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}