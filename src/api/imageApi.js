async function fetchImageData() {
  return fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${
      import.meta.env.VITE_NASA_API_KEY
    }`
  ).then((res) => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  });
}

export default fetchImageData;
