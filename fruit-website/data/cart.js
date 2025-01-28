export const cart = [{
   productId: '1',
   image: 'image/fruite-item-1.jpg',
   name: 'Oranges',
   priceCents: 1090,
   quantity: 2,
}];

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
}