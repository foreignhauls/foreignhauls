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

// Product Search
const searchInput = document.querySelector('.search-bar');
if(searchInput){
  searchInput.addEventListener('keyup', () => {
    let filter = searchInput.value.toLowerCase();
    document.querySelectorAll('.product').forEach(product => {
      let name = product.querySelector('h3').innerText.toLowerCase();
      product.style.display = name.includes(filter) ? 'block' : 'none';
    });
  });
}
