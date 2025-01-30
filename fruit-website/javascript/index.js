import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/product.js";

const cartNumber = document.querySelector('.js-cart-quantity');
if(localStorage.getItem('cart') != null) {
  const currentCart = JSON.parse(localStorage.getItem('cart'));
  const totalQuantity = currentCart.reduce((acc, item) => acc + item.quantity, 0);
  cartNumber.textContent = totalQuantity;
}


  
  let productsHTML = '';

  
  products.forEach((products) => {


    productsHTML += `
      <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="rounded position-relative fruite-item">
          <div class="fruite-img">
              <img src="${products.image}" class="img-fluid w-100 rounded-top" alt="">
          </div>
          <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">Fruits</div>
          <div class="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>${products.name}</h4>
            
              <div class="text-center">
                  <p class="text-dark fs-7 mb-3">$${(products.priceCents/100).toFixed(2)} / kg</p>
                  <a href="#" class="btn js-add-to-cart border border-secondary bg-secondary rounded-pill px-3 text-white"
                  data-product-id="${products.id}">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
  `;
  })
  

  
  document.querySelector('.js-products-grid').innerHTML = productsHTML;
  


  function updateCartQuantity(){
    
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    });


    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

  }




  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = +button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();
      });
    });


      