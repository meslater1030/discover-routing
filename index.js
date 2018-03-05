function changeRoutes(routeName) {
  window.location.assign(routeName);
}

window.addEventListener('load', () => {
  const header = document.createElement('h1');
  header.innerText = "Hello World!";
  document.body.appendChild(header);
  const button = document.createElement('button');
  button.innerText = "go to cats";
  button.addEventListener('click', () => changeRoutes('cats'));
  document.body.appendChild(button);
});
