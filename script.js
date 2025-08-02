// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav');

if(menuToggle){
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// Product Filter
function filterProducts(category) {
  let products = document.querySelectorAll('.product');
  products.forEach(product => {
    if(category === 'all' || product.classList.contains(category)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
