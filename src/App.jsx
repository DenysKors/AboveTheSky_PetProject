import { observer } from "./utils/observer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
