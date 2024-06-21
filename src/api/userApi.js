function fetchUserData(userData) {
  return fetch("https://63d7c5c75dbd7232442ca9e5.mockapi.io/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userData),
  }).then((res) => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  });
}

export default fetchUserData;
