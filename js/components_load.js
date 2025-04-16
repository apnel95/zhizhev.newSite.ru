function load(selector, url) {
  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Ошибка: ${url}`);
      }
      return res.text();
    })
    .then(data => {
      const element = document.querySelector(selector);
      if (element) element.innerHTML = data;
    })
    .catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("#nav-placeholder", "/components/nav.html");
  loadComponent("#sidebar-placeholder", "/components/sidebar.html");
  loadComponent("#footer-placeholder", "/components/footer.html");
  loadComponent("#nav-buttons-placeholder", "/components/navigation-buttons.html");
});
