import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [log, setLog] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get("/profile", {}).then(({ data }) => {
        if (data) {
          setUser(data.data);
          setLog(true);
        } else {
          setUser(null);
          setLog(false);
        }
      });
    }
  }, [setLog]);
  return (
    <UserContext.Provider value={{ user, setUser, log, setLog }}>
      {children}
    </UserContext.Provider>
  );
}
