
class Shop {
    constructor(title, price, imageSrc){
        this.title = title
        this.price = price
        this.imageSrc = imageSrc
    }
}

class UI {
    addShopToList(shop){
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        // var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        var cartRowContents = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${shop.imageSrc}" width="100" height="100">
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
}

class Store {
    static getshops(){
        let shops
        if(localStorage.getItem('shops') === null){
            shops = []
        }else {
            shops = JSON.parse(localStorage.getItem('shops'))
        }
        return shops
    }

    static displayShops(){
        const shops = Store.getBooks()
        console.log(shops)
        shops.forEach(function(shop){
            const ui = new UI
            // Add book to UI
            ui.addBookToList(shop)
        })
    }


}



