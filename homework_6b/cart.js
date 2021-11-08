if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready ()
}

function ready (){
    var removeProduct = document.getElementsByClassName('remove-product');
    for (var i=0; i < removeProduct.length; i++) {
        var button = removeProduct[i]
        button.addEventListener('click', removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName("product-quantity1")
    for (var i=0; i<quantityInputs.length ; i++){
        var input = quantityInputs[i]
        console.log(input)
        input.addEventListener('change', quantityChanged)
    }
    }

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal()

}

function removeCartItem(event) {
    var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateTotal()
}


function updateTotal() {
    var cart = document.getElementsByClassName('cart')[0]
    var cartItem = cart.getElementsByClassName('cartitem')
    var total = 0
    var taxRate = 0.05;
    var shippingRate = 15.00;
    var fadeTime = 300;
    for (var i=0; i< cartItem.length; i++) {
        var cartLine = cartItem[i]
        var price = cartLine.getElementsByClassName('cartitemprice')[0]
        var quantity = cartLine.getElementsByClassName('product-quantity1')[0]
        console.log(price,quantity)
        var priceNumber = parseFloat(price.innerText.replace('$', ''))
        var quantityNumber = quantity.value
        total = total + (priceNumber * quantityNumber)
        console.log(priceNumber * quantityNumber)
    }
    document.getElementById('cart-subtotal').innerText = '$' + total
    document.getElementById('cart-shipping').innerText = '$' + shippingRate
    document.getElementById('cart-tax').innerText = '$' + Math.round((total * taxRate) * 100)/100
    document.getElementById('cart-total').innerText = '$' + (total + shippingRate + (total * taxRate))
}

