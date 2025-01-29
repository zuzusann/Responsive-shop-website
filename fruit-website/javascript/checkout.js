import { cart } from "../data/cart.js";
import { products } from "../data/product.js";

let cartSummaryCheckOutHTML = '';


cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
        if(product.id = productId){
            matchingProduct = product;
        }
    });


   
    cartSummaryCheckOutHTML +=
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
                                <p class="mb-0 mt-4" style="color:#747d88">${matchingProduct.name}</p>
                            </td>
                            <td>
                                <p class="mb-0 mt-4" style="color:#747d88">$${(matchingProduct.priceCents)/100}</p>
                            </td>
                            <td>
                                <p class="mb-0 mt-4" style="color:#747d88">${cartItem.quantity}</p>
                            </td>
                            <td>
                                <p class="mb-0 mt-4" style="color:#747d88">$${((matchingProduct.priceCents/100) * cartItem.quantity)}</p>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                            </th>
                            <td></td>
                            <td></td>
                            <td>
                                <p class="mb-0 mt-4">Subtotal</p>
                            </td>
                            <td>
                                <p class="mb-0 mt-4" style="color:#747d88">$${((matchingProduct.priceCents/100) * cartItem.quantity)}</p>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                            </th>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                                <p class="mb-0 mt-4 text-dark">Total</p>
                            </td>
                            <td>
                                <p class="mb-0 mt-4" style="color:#747d88">$${(((matchingProduct.priceCents/100) * cartItem.quantity))+1}</p>
                            </td>
                        </tr>          
                     </tbody>
                </table>
            </div>
        </div>
    `;
});

document.querySelector('.js-order-summery-checkout').innerHTML = cartSummaryCheckOutHTML;




