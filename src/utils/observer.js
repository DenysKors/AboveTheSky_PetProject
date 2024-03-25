const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const onEntry = (entries, observer) => {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? console.log("text in view")
      : console.log("not in view");
  });
};

export const observer = new IntersectionObserver(onEntry, options);
