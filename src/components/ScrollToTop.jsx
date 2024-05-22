import { useEffect, useRef } from "react";

function ScrollToTop() {
  const scrollBtnRef = useRef();
  const sectionOffsetValue = useRef(0);

  useEffect(() => {
    const sectionRef = document.getElementById("earth");
    sectionOffsetValue.current = sectionRef.offsetTop;
  }, []);

  window.onscroll = () => {
    if (window.scrollY >= sectionOffsetValue.current) {
      scrollBtnRef.current.classList.add("scroll-btn-visible");
    } else {
      scrollBtnRef.current.classList.remove("scroll-btn-visible");
    }
  };

  return (
    <button
      ref={scrollBtnRef}
      type="button"
      className="scroll-btn bottom-12 right-[2%] w-10 lg:w-12 h-14 lg:h-16 z-20 bg-scrollBtn bg-transparent bg-no-repeat bg-contain bg-center hidden"
      aria-label="Scroll to top button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    ></button>
  );
}

export default ScrollToTop;
