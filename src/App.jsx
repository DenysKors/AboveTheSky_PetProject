import { observer } from "./utils/observer";

import LandingPage from "./pages/LandingPage";

window.onload = () =>
  document
    .querySelectorAll(".section-text")
    .forEach((el) => observer.observe(el));

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
