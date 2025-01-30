import { cart} from "../../data/cart.js";
import {getProduct, products } from "../../data/product.js";



export function renderOrderSummary(){

    let cartSummaryHTML = '';

    cart.forEach((cartItem) => {
        const productId = cartItem.productId;

        const matchingProduct = getProduct(productId);


        console.log(matchingProduct);
        

        
        cartSummaryHTML +=
        `
            <tr>
                <th scope="row">
                    <div class="d-flex align-items-center">
                        <img src="${matchingProduct.image}" class="img-fluid me-5 rounded-circle" style="width: 80px; height: 80px;" alt="">
                    </div>
                </th>
                <td>
                    <p class="mb-0 mt-4" style="color:#747d88">${matchingProduct.name}</p>
                </td>
                <td>
                    <p class="mb-0 mt-4" style="color:#747d88">$${+matchingProduct.priceCents}</p>
                </td>
                <td>
                    <p class="mb-0 mt-4" style="color:#747d88">${cartItem.quantity}</p>
                </td>
                <td>
                    <p class="mb-0 mt-4" style="color:#747d88">$${+matchingProduct.priceCents * +cartItem.quantity}</p>
                </td>
                <td>
                    <button type="button" class="btn btn-danger mb-0 mt-4 js-delete-link js-delete-link-${matchingProduct.id} js-cart-item-container-${matchingProduct.id}" data-product-id="${matchingProduct.id}">Delete</button>
                </td>
            </tr>       
        `;
    })


    document.querySelector('.js-order-summery').innerHTML = cartSummaryHTML;

}


export function renderPaymentSummary(){
    let productPriceCents = 0;
    
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;
    });

    let cartTotalSummaryHTML = '';

    cartTotalSummaryHTML += 
      `
        <div class="row g-4 mt-5 justify-content-center js-order-total-summery">
                <div class="col-sm-5 col-md-6 col-lg-7 col-xl-7">
                    <div class="bg-light rounded">
                        <div class="p-4">
                            <h1 class="display-6 mb-4">Cart Total</h1>
                            <div class="d-flex justify-content-between mb-4">
                                <h5 class="mb-0 me-4">Subtotal:</h5>
                                <p class="mb-0">$${productPriceCents}</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h5 class="mb-0 me-4">Shipping</h5>
                                <div class="">
                                    <p class="mb-0">Flat rate: $1</p>
                                </div>
                            </div>
                            <p class="mb-0 text-end">Shipping to Order</p>
                        </div>
                        <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                            <h5 class="mb-0 ps-4 me-4">Total</h5>
                            <p class="mb-0 pe-4">$${productPriceCents+1}</p>
                        </div>
                        <div class="d-flex justify-content-center pb-4">
                            <a href="checkout.html">
                            <button class="btn border-secondary rounded-pill px-4 py-3 text-uppercase text-white bg-secondary" type="button">Proceed Checkout</button>
                             </a>
                        </div>
                        
                    </div>
                </div>
            </div>
      `;
   
    document.querySelector('.js-order-total-summery').innerHTML = cartTotalSummaryHTML;

}