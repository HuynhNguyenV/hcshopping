ready()

function Shop(id, title, price, imageSrc, link) {
    this.id = id
    this.title = title
    this.price = price
    this.imageSrc = imageSrc
    this.link = link
}

function ready() {
    var addToCartButtons = document.querySelectorAll('.shop-item-button')
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', addToCarClicked)
    })

    updateCount()
}

// Update Count
function updateCount(){
    const shops = getShops()
    document.getElementsByClassName('badge-light')[0].textContent = shops.length
}

// Get shop
function getShops() {
    let shops
    if (localStorage.getItem('listsData') === null) {
        shops = []
    } else {
        shops = JSON.parse(localStorage.getItem('listsData'))
    }
    return shops
}

// Add Cart
function addToCarClicked(event) {
    // Get card-header-a
    let cartHeader = event.target.parentElement.parentElement.parentElement
        .parentElement.previousElementSibling.previousElementSibling
    // Get card-body-a
    let cartBody = event.target.parentElement.parentElement.parentElement
        .parentElement.previousElementSibling
    // Get img-box
    let imgBox = event.target.parentElement.parentElement.parentElement
        .parentElement.parentElement.parentElement.previousElementSibling
    // Get ID
    let id = cartHeader.children[0].children[0].textContent
    // Get NAME
    let name = cartHeader.children[0].children[1].textContent
    // Get PRICE
    let price = cartBody.children[0].children[0].textContent
    let finalPrice = price.slice(1).trim()
    // Get LINK
    let link = cartBody.children[1].href

    // GET IMAGE
    let imageSrc = imgBox.children[0].src
    let pos = imageSrc.indexOf('images') 
    let pathImage = imageSrc.slice(pos)

    const shop = new Shop(id, name, finalPrice, pathImage, link)
    // Add Cart In LocalStorage
    addCartInLocalStorage(shop)

    // Update count
    updateCount()
}

// save local storage
function addCartInLocalStorage(shop) {
    let listsData
    if (localStorage.getItem('listsData') === null) {
        listsData = []
    } else {
        listsData = JSON.parse(localStorage.getItem('listsData'))
    }

    listsData.push(shop)
    localStorage.setItem('listsData', JSON.stringify(listsData))
    console.log('save ok')
}


