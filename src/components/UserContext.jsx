import { useState } from "react";

import { UserContext } from "../hooks/useContext";
import { STATUS } from "../constants/statusConstants";

function UserProvider({ children }) {
  const [visitStatus, setVisitStatus] = useState(STATUS.standby);
  const [nickname, setNickname] = useState(null);

  const userVisitStatus = (status) => setVisitStatus(status);
  const userNickname = (nicknameValue) => setNickname(nicknameValue);

  return (
    <UserContext.Provider
      value={{ visitStatus, nickname, userVisitStatus, userNickname }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
