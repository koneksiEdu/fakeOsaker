const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
  const button = dropdown.querySelector('.tg-btn');

  button.addEventListener('click', function(event) {
    dropdown.classList.toggle('show');
    event.stopPropagation();
  });
});

window.addEventListener('click', function(event) {
  dropdowns.forEach(function(dropdown) {
    if (dropdown.classList.contains('show') && !event.target.closest('.dropdown')) {
      dropdown.classList.remove('show');
    }
  });
});

//sticky nav stuff
window.onscroll = function(){
    stickyNavbar()
};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//update year at footer

const footer = document.getElementById('footer');
const currentYearSpan = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;