let trousersjson = new Request("./data/trousers.json")

function productTemplate(product) {
    return `
    <div class=" col-md-4">
    <div class="card-box-a card-shadow">
        <div class="img-box-a">
            <img src="${product.photo}" alt="" class="img-a img-fluid">
        </div>
        <div class="card-overlay">
            <div class="card-overlay-a-content">
                <div class="card-header-a">
                    <h2 class="card-title-a">
                        <a href="${product.link}">${product.name}</a>
                    </h2>
                </div>
                <div class="card-body-a">
                    <div class="price-box d-flex py-3">
                        <a href="#"><span class="price-a">Buy | $ ${product.price}</span></a>
                    </div>
                    <a href="${product.link}" class="link-a">Click here to view
                        <span class="ion-ios-arrow-forward"></span>
                    </a>
                </div>
                <div class="card-footer-a">
                    <ul class="card-info d-flex justify-content-around">
                        <li>
                            <i class="fas fa-thumbs-up"></i>
                        </li>
                        <li>
                            <i class="fa fa-facebook"></i>
                        </li>
                        <li>
                            <i class="fa fa-twitter"></i>
                        </li>
                        <li>
                            <i class="fa fa-instagram"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}

fetch(trousersjson)
    .then(function (resp) {
        return resp.json();
    })
    .then(function (productsData) {
        document.getElementById("trousersdata").innerHTML = `
        ${productsData.map(productTemplate).join(' ')}
        `
    })



