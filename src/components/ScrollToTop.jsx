import { useEffect } from "react";
// const scrollRef = document.getElementById("earth");
// const btnRef = document.getElementById("scroll-btn");
// console.log(scrollRef);
// const scrollBtn = scrollRef.offsetTop;

function ScrollToTop() {
  // if (window.scrollY >= scrollBtn) {
  //   btnRef.classList.add("scroll-btn-visible");
  // } else {
  //   btnRef.classList.remove("scroll-btn-visible");
  // }
  useEffect(() => {
    const scrollRef = document.getElementById("earth");
    // const btnRef = document.getElementById("scroll-btn");
    console.log(scrollRef);
  });
  return (
    <button
      id="scroll-btn"
      type="button"
      className="scroll-btn bottom-10 right-[2%] w-10 lg:w-12 h-14 lg:h-16 z-20 bg-scrollBtn bg-transparent bg-no-repeat bg-contain bg-center"
      aria-label="Scroll to top button"
    ></button>
  );
}

export default ScrollToTop;
