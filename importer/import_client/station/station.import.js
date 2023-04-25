const importUrl = "http://localhost:<YOUR_PORT_HERE>/api/v1/import/stations";

window.onload = function (e) {
  const tbody = document.getElementById("tbody");
  fetch(importUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log("data.items.length: ", data.items.length);
    })
    .catch((e) => console.log(e));
};
const addCsv = (e) => {
  e.preventDefault();
  const input = document.getElementById("fileinput");
  console.log(input.files[0]);
  const formData = new FormData();
  formData.append("file", input.files[0]);
  fetch(importUrl, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      alert("CSV uploaded successfully");
      window.location.reload();
    })
    .catch((e) => console.log(e));
};

document.getElementById("upload_form").addEventListener("submit", addCsv);
