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

document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.querySelector('.pf-v6-c-button.pf-m-primary');
  const backButton = document.querySelector('.pf-v6-c-button.pf-m-secondary');

  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1);

  const pages = ['index.html', 'page1.html', 'page2.html', 'page3.html', 'page4.html', 'page5.html', 'page6.html', 'page7.html'];
  const currentIndex = pages.indexOf(filename);

  if (currentIndex === -1) {
    console.warn('Неизвестная страница: ' + filename);
    return;
  }

  if (currentIndex < pages.length - 1) {
    nextButton.addEventListener('click', () => {
      window.location.href = pages[currentIndex + 1];
    });
  } else {
    nextButton.style.display = 'none';
  }

  if (currentIndex > 0) {
    backButton.addEventListener('click', () => {
      window.location.href = pages[currentIndex - 1];
    });
  } else {
    backButton.style.display = 'none';
  }
});
