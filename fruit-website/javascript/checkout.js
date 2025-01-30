
import { renderOrderSummary, renderPaymentSummary } from "./checkout/orderSummary.js";

const cartNumber = document.querySelector('.js-cart-quantity');
if(localStorage.getItem('cart') != null) {
  const currentCart = JSON.parse(localStorage.getItem('cart'));
  const totalQuantity = currentCart.reduce((acc, item) => acc + item.quantity, 0);
  cartNumber.textContent = totalQuantity;
}


renderOrderSummary();
renderPaymentSummary();
