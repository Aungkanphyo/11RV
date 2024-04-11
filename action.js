let output = document.getElementById("output");
const getTodos = (callbacking) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4 && request.status == 200) {
      callbacking(undefined, request.responseText);
    } else if (request.readyState == 4) {
      callbacking("something wrong", undefined);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};
getTodos((error, data) => {
  if (data) {
    const result = JSON.parse(data);
    let html = result.map((todoss) => {
      return `<span>${todoss.title}</span><br>`;
    });
    output.innerHTML = html;
  } else if (error) {
    console.log(error);
  }
});
