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
  load("#nav-placeholder", "/components/nav.html");
  load("#sidebar-placeholder", "/components/sidebar.html");
  load("#footer-placeholder", "/components/footer.html");
  load("#nav-buttons-placeholder", "/components/navigation-buttons.html");
});
