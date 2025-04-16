function load(selector, url) {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Ошибка загрузки: ${url}`);
      }
      return res.text();
    })
    .then(data => {
      const element = document.querySelector(selector);
      if (element) {
        element.innerHTML = data;
      }
    })
    .catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", () => {
  load("#nav-placeholder", "/components/nav.html").then(highlightActiveNav);
  load("#sidebar-placeholder", "/components/sidebar.html");
  load("#footer-placeholder", "/components/footer.html");
  
  load("#nav-buttons-placeholder", "/components/navigation-buttons.html")
    .then(initNavigationButtons);
});

function highlightActiveNav() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  const navLinks = document.querySelectorAll('.pf-v6-c-nav__link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const normalizedHref = href === '/' ? 'index.html' : href;

    if (normalizedHref === filename) {
      link.classList.add('pf-m-current');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('pf-m-current');
      link.removeAttribute('aria-current');
    }
  });
}

function initNavigationButtons() {
  const nextButton = document.querySelector('.pf-v6-c-button.pf-m-primary');
  const backButton = document.querySelector('.pf-v6-c-button.pf-m-secondary');

  if (!nextButton || !backButton) {
    console.warn('Кнопки навигации не найдены');
    return;
  }

  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  const pages = [
    'index.html', 'page1.html', 'page2.html', 'page3.html',
    'page4.html', 'page5.html', 'page6.html', 'page7.html', 'page8.html'
  ];
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
}
