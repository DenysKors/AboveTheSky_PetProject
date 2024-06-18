import { useState } from "react";

import { UserContext } from "../hooks/useContext";
import { STATUS } from "../constants/statusConstants";

function UserProvider({ children }) {
  const [visitStatus, setVisitStatus] = useState(STATUS.standby);
  const [nickname, setNickname] = useState(null);
  const [userScore, setUserScore] = useState(null);

  const userVisitStatus = (status) => setVisitStatus(status);
  const addNickname = (nicknameValue) => setNickname(nicknameValue);
  const addScore = (scoreSummary) => setUserScore(scoreSummary);

  return (
    <UserContext.Provider
      value={{
        visitStatus,
        nickname,
        userScore,
        userVisitStatus,
        addNickname,
        addScore,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
