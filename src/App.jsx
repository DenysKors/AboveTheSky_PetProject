import { useEffect } from "react";
import { observer } from "./utils/observer";

import LandingPage from "./pages/LandingPage";

window.onload = () => {
  const sectionText = document
    .querySelectorAll(".section-text")
    .forEach((text) => observer.observe(text));
  console.log(sectionText);
};

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
