document.getElementById('btnAll').addEventListener('click', getAllProduts)
getAllProduts()
document.getElementById('btnJeans').addEventListener('click', getJeans)
document.getElementById('btnShirts').addEventListener('click', getShirts)
document.getElementById('btnTrousers').addEventListener('click', getTrousers)

// GET Trousers
function getTrousers() {
    fetch('data/trousers.json')
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            let output = ''
            data.forEach(function (product) { 
                output += productTemplate(product)
            })
            document.getElementById('output').innerHTML = output
        })
        .catch(function (err) {
            console.log(err)
        })      
}


// GET Shirts
function getShirts() {
    fetch('data/shirts.json')
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            let output = ''
            data.forEach(function (product) { 
                output += productTemplate(product)
            })
            document.getElementById('output').innerHTML = output
        })
        .catch(function (err) {
            console.log(err)
        })      
}


// GET Jeans
function getJeans() {
    fetch('data/jeans.json')
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            let output = ''
            data.forEach(function (product) { 
                output += productTemplate(product)
            })
            document.getElementById('output').innerHTML = output
        })
        .catch(function (err) {
            console.log(err)
        })      
}

// GET All
function getAllProduts() {
    fetch('data/products.json')
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            let output = ''
            data.forEach(function (product) { 
                output += productTemplate(product)
            })
            document.getElementById('output').innerHTML = output
        })
        .catch(function (err) {
            console.log(err)
        })      
}

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
                            <button type="button" class="btn btn-link shop-item-button">
                                <i class="fa fa-cart-plus"></i>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-link">
                                <i class="fa fa-facebook"></i>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="btn btn-link">
                                <i class="fa fa-twitter"></i>
                            </button>

                        </li>
                        <li>
                            <button type="button" class="btn btn-link">
                                <i class="fa fa-instagram"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}
