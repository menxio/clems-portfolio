// RUBIATO, JOHN CLEMENT R.

document.addEventListener('scroll', () => {
  const navigation = document.getElementById('navigation');
  const selected = document.getElementById('selected');

  if (window.scrollY > 0) {
      selected.classList.remove('active');
      navigation.classList.add('navbar-colored');
      selected.classList.add('active-2');
  } else {
      selected.classList.remove('active-2');
      navigation.classList.remove('navbar-colored');
      selected.classList.add('active');
  }
});

// Toggle Navbar Collapse
const toggleButton = document.querySelector('.navbar-toggle');
const navbarCollapse = document.querySelector('.navbar-collapse');

toggleButton.addEventListener('click', () => {
  navbarCollapse.classList.toggle('open');
});
