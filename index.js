function changeRoutes(routeName) {
  history.pushState({}, '', routeName);
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  return pages[routeName]();
}

function renderCats() {
  const button = document.createElement('button');
  button.innerText = 'Go Home';
  button.addEventListener('click', () => changeRoutes(''));
  document.body.appendChild(button);
}

function renderHome() {
  const header = document.createElement('h1');
  header.innerText = "Hello World!";
  document.body.appendChild(header);
  const button = document.createElement('button');
  button.innerText = "go to cats";
  button.addEventListener('click', () => changeRoutes('cats'));
  document.body.appendChild(button);
}

const pages = {
  cats: renderCats,
  '': renderHome,
}

window.addEventListener('load', () => renderHome());
