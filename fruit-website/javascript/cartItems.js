import { cart } from "../data/cart.js";
import { products } from "../data/product.js";

let cartSummaryHTML = '';


cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
        if(product.id = productId){
            matchingProduct = product;
        }
    });


   
    cartSummaryHTML +=
    `
        <div class="container py-5">
            <div class="table-responsive">
                <table class="table js-order-summery">
                    <thead>
                      <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <div class="d-flex align-items-center">
                                    <img src="${matchingProduct.image}" class="img-fluid me-5 rounded-circle" style="width: 80px; height: 80px;" alt="">
                                </div>
                            </th>
                            <td>
                                <p class="mb-0 mt-4">${matchingProduct.name}</p>
                            </td>
                            <td>
                                <p class="mb-0 mt-4">$${(matchingProduct.priceCents)/100}</p>
                            </td>
                            <td>
                                <p class="mb-0 mt-4">${cartItem.quantity}</p>
                            </td>
                            <td>
                                <p class="mb-0 mt-4">$${((matchingProduct.priceCents/100) * cartItem.quantity)}</p>
                            </td>
                        </tr>          
                     </tbody>
                </table>
            </div>
            <div class="mt-5">
                <input type="text" class="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code">
                <button class="btn border-secondary rounded-pill px-4 py-3 text-white bg-secondary" type="button">Apply Coupon</button>
            </div>
            <div class="row g-4 mt-5 justify-content-center">
                <div class="col-sm-5 col-md-6 col-lg-7 col-xl-7">
                    <div class="bg-light rounded">
                        <div class="p-4">
                            <h1 class="display-6 mb-4">Cart Total</h1>
                            <div class="d-flex justify-content-between mb-4">
                                <h5 class="mb-0 me-4">Subtotal:</h5>
                                <p class="mb-0">$96.00</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h5 class="mb-0 me-4">Shipping</h5>
                                <div class="">
                                    <p class="mb-0">Flat rate: $3.00</p>
                                </div>
                            </div>
                            <p class="mb-0 text-end">Shipping to Ukraine.</p>
                        </div>
                        <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                            <h5 class="mb-0 ps-4 me-4">Total</h5>
                            <p class="mb-0 pe-4">$99.00</p>
                        </div>
                        <div class="d-flex justify-content-center pb-4">
                            <a href="checkout.html">
                            <button class="btn border-secondary rounded-pill px-4 py-3 text-uppercase text-white bg-secondary" type="button">Proceed Checkout</button>
                             </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        
    `;
});

document.querySelector('.js-order-summery').innerHTML = cartSummaryHTML;




