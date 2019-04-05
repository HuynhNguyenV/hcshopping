
function Shop(id, title, price, imageSrc, link) {
    this.id = id
    this.title = title
    this.price = price
    this.imageSrc = imageSrc
    this.link
}

loadShop()

function loadShop() {
    displayShops()
    updateCartTotal()
    updateCount()
    // quantityInputs
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }


    // remove cart
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}
// update count
function updateCount(){
    const shops = getShops()
    document.getElementsByClassName('badge-light')[0].textContent = shops.length
}

// Check error input quantity
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function displayShops() {
    const shops = getShops()
    shops.forEach(function (shop) {
        addShopToList(shop)
    })
}

function getShops() {
    let shops
    if (localStorage.getItem('listsData') === null) {
        shops = []
    } else {
        shops = JSON.parse(localStorage.getItem('listsData'))
    }
    return shops
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    var id = buttonClicked.parentElement.previousElementSibling.previousElementSibling.children[1].textContent
    removeTaskFromLocalStorage(id)
    updateCartTotal()
    updateCount()
}

// Remove from LS
function removeTaskFromLocalStorage(idshop) {
    let listsData;
    if (localStorage.getItem('listsData') === null) {
        listsData = []
    } else {
        listsData = JSON.parse(localStorage.getItem('listsData'))
    }
    listsData.forEach(function (id, index) {
        if (idshop === id.id) {
            listsData.splice(index, 1)

        }
    })
    localStorage.setItem('listsData', JSON.stringify(listsData))
}

function addShopToList(shop) {
    var cartRow = document.createElement('div')
    // Add class
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    // var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    var cartRowContents = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${shop.imageSrc}" width="100" height="100">
                <span class="cart-id d-none">${shop.id}</span>
                <span class="cart-item-title">${shop.title}</span>
            </div>
            <span class="cart-price cart-column">${shop.price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
}

// update cart total
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}



