import { useState } from "react";

import { UserContext } from "../hooks/useContext";

function UserProvider({ children }) {
  const [visitedValue, setVisitedValue] = useState(0);

  const userVisited = (value) => setVisitedValue(visitedValue + value);

  return (
    <UserContext.Provider value={{ visitedValue, userVisited }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
