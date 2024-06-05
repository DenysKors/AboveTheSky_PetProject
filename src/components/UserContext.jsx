import { useState } from "react";

import { UserContext } from "../hooks/useContext";
import { STATUS } from "../constants/statusConstants";

function UserProvider({ children }) {
  const [visitStatus, setVisitStatus] = useState(STATUS.standby);

  const userVisitStatus = (status) => setVisitStatus(status);

  return (
    <UserContext.Provider value={{ visitStatus, userVisitStatus }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
