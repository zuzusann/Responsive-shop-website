export function getProduct(productId){
  let matchingProduct;

  products.forEach((product) => {
    if(product.id === productId){
      matchingProduct = product;
    }
  })

  return matchingProduct;
}

export const  products = [{
    id: 1,
    image: 'image/fruite-item-1.jpg',
    name: 'Oranges',
    priceCents: 10
  }, {
    id: 2,
    image: 'image/fruite-item-2.jpg',
    name: 'Redberry',
    priceCents: 20
  }, {
    id: 3,
    image: 'image/fruite-item-3.jpg',
    name: 'Banana',
    priceCents: 21
  },{
    id: 4,
    image: 'image/fruite-item-4.jpg',
    name: 'Kiwi',
    priceCents: 11
  },{
    id: 5,
    image: 'image/fruite-item-5.jpg',
    name: 'Grapes',
    priceCents: 21
  },{
    id: 6,
    image: 'image/fruite-item-6.jpg',
    name: 'Apple',
    priceCents: 13
  },{
    id: 7,
    image: 'image/fruite-item-1.jpg',
    name: 'Oranges G',
    priceCents: 13
  },{
    id: 8,
    image: 'image/fruite-item-2.jpg',
    name: 'Redberry G',
    priceCents: 12
  },{
    id: 9,
    image: 'image/vegetable-item-5.jpg',
    name: 'Potato',
    priceCents: 12
  },{
    id: 10,
    image: 'image/vegetable-item-4.jpg',
    name: 'Red Chilli',
    priceCents: 11
  },{
    id: 11,
    image: 'image/vegetable-item-6.jpg',
    name: 'Parsely',
    priceCents: 14
  },{
    id:12,
    image: 'image/vegetable-item-5.jpg',
    name: 'PatatoG',
    priceCents: 15
  }]