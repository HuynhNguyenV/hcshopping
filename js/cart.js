ready()

function Shop(id, title, price, imageSrc, link) {
    this.id = id
    this.title = title
    this.price = price
    this.imageSrc = imageSrc
    this.link
}

function ready() {
    var addToCartButtons = document.querySelectorAll('.shop-item-button')
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', addToCarClicked)
    })
}

function addToCarClicked(event) {
    // card-header-a
    let cartHeader = event.target.parentElement.parentElement.parentElement
        .parentElement.previousElementSibling.previousElementSibling
    // card-body-a
    let cartBody = event.target.parentElement.parentElement.parentElement
        .parentElement.previousElementSibling
    // img-box
    let imgBox = event.target.parentElement.parentElement.parentElement
        .parentElement.parentElement.parentElement.previousElementSibling
    // GET ID
    let id = cartHeader.children[0].children[0].textContent
    // GET NAME
    let name = cartHeader.children[0].children[1].textContent
    // GET PRICE
    let price = cartBody.children[0].children[0].textContent
    let finalPrice = price.slice(1).trim()
    // GET LINK
    let link = cartBody.children[1].href
    // console.log(id, name, finalPrice,, im link)
    // GET IMAGE
    let imageSrc = imgBox.children[0].src
    let pos = imageSrc.indexOf('images') 
    let pathImage = imageSrc.slice(pos)

    const shop = new Shop(id, name, finalPrice, pathImage, link)
    // addCartInLocalStorage
    addCartInLocalStorage(shop)
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


