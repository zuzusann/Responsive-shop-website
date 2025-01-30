export let cart;

loadFromStorage();

const cartNumber = document.querySelector('.js-cart-quantity');
if(localStorage.getItem('cart') != null) {
  const currentCart = JSON.parse(localStorage.getItem('cart'));
  const totalQuantity = currentCart.reduce((acc, item) => acc + item.quantity, 0);
  cartNumber.textContent = totalQuantity;
}

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));

  if(!cart){
    cart = [{
      productId: 1,
      image: 'image/fruite-item-1.jpg',
      name: 'Oranges',
      priceCents: 1090,
      quantity: 0,
   }]
  }
  console.log(cart);
}


function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  if(matchingItem){
    matchingItem.quantity += 1;
  }else{
    cart.push({
      productId: productId,
      quantity: 1
    });
  }

  saveToStorage();
}




