import { useEffect } from "react";

import LandingPage from "./pages/LandingPage";

window.onload = () => {
  const element = document.getElementById("venus");
  console.log(element);
};

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
