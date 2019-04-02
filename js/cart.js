if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
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
    var price = shopItem.getElementsByClassName('price-a')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('img-a')[0].src
    console.log(title, price, imageSrc)
    
    event.preventDefault()    
}

