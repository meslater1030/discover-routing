function changeRoutes(routeName) {
  history.pushState({}, '', routeName);
  window.dispatchEvent(new Event('popstate'));
}

function createElement(tagName, options) {
  const elm = document.createElement(tagName);
  Object.keys(options).forEach((option) => {
    elm[option] = options[option];
  });
  return elm;
}

function renderCats() {
  const button = createElement('button', {
    innerText: 'Go Home',
    onclick: () => changeRoutes('/'),
  });
  document.body.appendChild(button);
}

function renderHome() {
  const button = createElement('button', {
    innerText: 'go to cats',
    onclick: () => changeRoutes('/cats'),
  });
  document.body.appendChild(button);
}

const pages = {
  '/cats': renderCats,
  '/': renderHome,
}

window.addEventListener('load', () => renderHome());
window.onpopstate = (e) => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  return pages[e.currentTarget.location.pathname]();
}
