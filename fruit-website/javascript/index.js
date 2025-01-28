// const  products = [{
//     image: 'image/fruite-item-1.jpg',
//     name: '',
//     priceCents: 1090
//   }, {
//     image: 'image/fruite-item-2.jpg',
//     name: 'Oranges',
//     priceCents: 1090
//   }, {
//     image: 'image/fruite-item-3.jpg',
//     name: 'Oranges',
//     priceCents: 1090
//   },{
//     image: 'image/fruite-item-4.jpg',
//     name: 'Oranges',
//     priceCents: 1090
//   },{
//     image: 'image/fruite-item-5.jpg',
//     name: 'Oranges',
//     priceCents: 1090
//   },{
//     image: 'image/fruite-item-6.jpg',
//     name: 'Oranges',
//     priceCents: 1090
//   },{
//     image: 'image/fruite-item-1.jpg',
//     name: 'Oranges',
//     priceCents: 1090
//   },{
//     image: 'image/fruite-item-2.jpg',
//     name: 'Oranges',
//     priceCents: 1090
//   },{
//     image: 'image/vegetable-item-5.jpg',
//     name: 'Oranges',
//     priceCents: 1090
//   },{
//     image: 'image/vegetable-item-4.jpg',
//     name: 'Oranges',
//     priceCents: 1090
//   },{
//     image: 'image/vegetable-item-6.jpg',
//     name: 'Oranges',
//     priceCents: 1090
//   },{
//     image: 'image/vegetable-item-5.jpg',
//     name: 'Oranges',
//     priceCents: 1090
//   }]
  
  let productsHTML = '';
  
  
  products.forEach((products) => {
    productsHTML += `
      <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="rounded position-relative fruite-item">
          <div class="fruite-img">
              <img src="${products.image}" class="img-fluid w-100 rounded-top" alt="">
          </div>
          <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">Fruits</div>
          <div class="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>${products.name}</h4>
            
              <div class="text-center">
                  <p class="text-dark fs-7 mb-2">$${(products.priceCents/100).toFixed(2)} / kg</p>
                  <a href="#" class="btn js-add-to-cart border border-secondary rounded-pill px-3 text-primary"
                  data-product-id="${products.id}">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
  `;
  })
  

  
  document.querySelector('.js-products-grid').innerHTML = productsHTML;
  
  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        let matchingItem;

        cart.forEach((item) => {
          if(productId === item.productId){
            matchingItem = item;
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
        console.log(cart);
      });
    });
      