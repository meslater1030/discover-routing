function transitionTo(routeName) {
  history.pushState({}, '', routeName);
  window.dispatchEvent(new Event('popstate'));
}

function renderElement(parentElement, tagName, options) {
  const elm = document.createElement(tagName);
  Object.keys(options).forEach((option) => {
    elm[option] = options[option];
  });
  parentElement.appendChild(elm);
}

function renderCats() {
  const button = renderElement(document.body, 'button', {
    innerText: 'Go Home',
    onclick: () => transitionTo('/'),
  });
}

function renderHome() {
  const button = renderElement(document.body, 'button', {
    innerText: 'go to cats',
    onclick: () => transitionTo('/cats'),
  });
}

const pages = {
  '/cats': renderCats,
  '/': renderHome,
}

window.addEventListener('load', () => window.dispatchEvent(new Event('popstate')));
window.onpopstate = (e) => {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
  return pages[e.currentTarget.location.pathname]();
}
