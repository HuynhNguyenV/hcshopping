const shirts = [
    {
        "name": "product 3",
        "price": "4.000",
        "photo": "images/product-3.jpg",
        "link": "http://127.0.0.1:5500/product-details-3.html"
    },
    {
        "name": "product 4",
        "price": "8.000",
        "photo": "images/product-4.jpg",
        "link": "http://127.0.0.1:5500/product-details-4.html"
    }
]

function productTemplate(product) {
    return `
    <div class="col-md-4">
    <div class="card-box-a card-shadow">
        <div class="img-box-a">
            <img src="${product.photo}" alt="" class="img-a img-fluid">
        </div>
        <div class="card-overlay">
            <div class="card-overlay-a-content">
                <div class="card-header-a">
                    <h2 class="card-title-a">
                        <span class="cart-item-title">${product.name}</span>
                    </h2>
                </div>
                <div class="card-body-a">
                    <div class="price-box d-flex py-3">
                        <span class="price-a">$${product.price}</span>
                    </div>

                    <a href="${product.link}" class="link-a">Click here to view
                        <span class="ion-ios-arrow-forward"></span>
                    </a>
                </div>
                <div class="card-footer-a">
                    <ul class="card-info d-flex justify-content-around">
                        <li>
                            <button type="button" class="btn btn-link shop-item-button"><i
                                    class="fa fa-cart-plus"></i></button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-link"><i
                                    class="fa fa-facebook"></i></button>

                        </li>
                        <li>
                            <button type="button" class="btn btn-link"><i
                                    class="fa fa-twitter"></i></button>

                        </li>
                        <li>
                            <button type="button" class="btn btn-link"><i
                                    class="fa fa-instagram"></i></button>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}

document.getElementById("shirtsdata").innerHTML = `
        ${shirts.map(productTemplate).join(' ')}
        `



