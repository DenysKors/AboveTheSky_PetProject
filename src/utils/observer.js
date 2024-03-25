const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.75,
};

const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("text-fadeIn");
    } else {
      entry.target.classList.remove("text-fadeIn");
    }
  });
};

export const observer = new IntersectionObserver(onEntry, options);
