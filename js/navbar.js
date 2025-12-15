    const hamburger = document.querySelector('#hamburger');
    const navList = document.querySelector('#navbar-list');
    const listItems = document.querySelectorAll('.list');

    hamburger.addEventListener('click', () => {
      navList.classList.toggle('active');
      hamburger.classList.toggle('active');
    });