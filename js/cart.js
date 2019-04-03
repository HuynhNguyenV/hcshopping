if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function Shop(title, price, imageSrc){
    this.title = title
    this.price = price
    this.imageSrc = imageSrc
}

function ready(){
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for(var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCarClicked)
    }

}

function addToCarClicked(event){
    var button = event
    var shopItem = button.path[7]
    var title = shopItem.getElementsByClassName('cart-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('price-a')[0].innerText.replace('$','')
    
    var imageSrc = shopItem.getElementsByClassName('img-a')[0].src
    // console.log(title, price, imageSrc)
    
    // Add item cart
    // addItemCart(title, price, imageSrc)

    const shop = new Shop(title, price, imageSrc)

    // addCartInLocalStorage
    addCartInLocalStorage(shop)
    

}

// save local storage
function addCartInLocalStorage(shop){
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


