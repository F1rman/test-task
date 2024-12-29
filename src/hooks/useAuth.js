import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  userData: null,
});

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!userData && storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
