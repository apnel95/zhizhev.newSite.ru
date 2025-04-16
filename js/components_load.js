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
  load("#nav-placeholder", "zhizhev.newSite.ru/components/nav.html");
  load("#sidebar-placeholder", "zhizhev.newSite.ru/components/sidebar.html");
  load("#footer-placeholder", "zhizhev.newSite.ru/components/footer.html");
  load("#nav-buttons-placeholder", "zhizhev.newSite.ru/components/navigation-buttons.html");
});
