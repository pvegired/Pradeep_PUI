        if (document.readyState == 'loading') {
            document.addEventListener('DOMContentLoaded', ready)
        } else {
            ready ()
        }


function afterschoolspecial() {
            var mainimage = document.getElementById('mainimage');
            var sideimage1 = document.getElementById('sideimage1');
            var sideimage2 = document.getElementById('sideimage2');
            var sideimage3 = document.getElementById('sideimage3');
            var sideimage4 = document.getElementById('sideimage4');
            var sideimage5 = document.getElementById('sideimage5');
            

            mainimage.src = "images/blueimage.jpg";
            sideimage1.src = "images/blueimage2.jpg";
            sideimage2.src = "images/blueimage3.jpg";
            sideimage3.src = "images/blueimage.jpg";
            sideimage4.src = "images/blueimage2.jpg";
            sideimage5.src = "images/blueimage3.jpg";

            //  disableButton();
        }

function disableButton() {
    let button = document.getElementById('button_example');
    button.disabled = true;
    window.setTimeout(function() {
        button.disabled = false;
    }, 2000);
}

function disableButton1() {
    let button1 = document.getElementById('button_example1');
    button1.disabled = true;
    window.setTimeout(function() {
        button1.disabled = false;
    }, 2000);
}

function disableButton2() {
    let button2 = document.getElementById('button_example2');
    button2.disabled = true;
    window.setTimeout(function() {
        button2.disabled = false;
    }, 2000);
}

function disableButton3() {
    let button3 = document.getElementById('button_example3');
    button3.disabled = true;
    window.setTimeout(function() {
        button3.disabled = false;
    }, 2000);
}

    function morninghaze() {
        console.log("enetered morning haze");
            var mainimage = document.getElementById('mainimage');
            var sideimage1 = document.getElementById('sideimage1');
            var sideimage2 = document.getElementById('sideimage2');
            var sideimage3 = document.getElementById('sideimage3');
            var sideimage4 = document.getElementById('sideimage4');
            var sideimage5 = document.getElementById('sideimage5');

            mainimage.src = "images/grey.jpg";
            sideimage1.src = "images/grey2.jpg";
            sideimage2.src = "images/grey3.jpg";
            sideimage3.src = "images/grey.jpg";
            sideimage4.src = "images/grey2.jpg";
            sideimage5.src = "images/grey3.jpg";

            // disableButton1();

        }

    function cozydenim() {
            var mainimage = document.getElementById('mainimage');
            var sideimage1 = document.getElementById('sideimage1');
            var sideimage2 = document.getElementById('sideimage2');
            var sideimage3 = document.getElementById('sideimage3');
            var sideimage4 = document.getElementById('sideimage4');
            var sideimage5 = document.getElementById('sideimage5');
            mainimage.src = "images/blueimage.jpg";
            sideimage1.src = "images/blueimage2.jpg";
            sideimage2.src = "images/blueimage3.jpg";
            sideimage3.src = "images/blueimage.jpg";
            sideimage4.src = "images/blueimage2.jpg";
            sideimage5.src = "images/blueimage3.jpg";

            // disableButton2();
        }
    
    function rainyday() {
            var mainimage = document.getElementById('mainimage');
            var sideimage1 = document.getElementById('sideimage1');
            var sideimage2 = document.getElementById('sideimage2');
            var sideimage3 = document.getElementById('sideimage3');
            var sideimage4 = document.getElementById('sideimage4');
            var sideimage5 = document.getElementById('sideimage5');

            mainimage.src = "images/grey.jpg";
            sideimage1.src = "images/grey2.jpg";
            sideimage2.src = "images/grey3.jpg";
            sideimage3.src = "images/grey.jpg";
            sideimage4.src = "images/grey2.jpg";
            sideimage5.src = "images/grey3.jpg";
            // disableButton3();
        }

        
        // button.addEventListener('click', updateButton);
        function updateButton () {
            const button = document.getElementById("addtocart");
            let navcartitems = document.getElementById("navcartitems");

            if (button.value === 'Add to Cart') {
                button.value = 'Remove from Cart';
                navcartitems.textContent = '1';
            }
            else {
                button.value = 'Add to Cart';
                navcartitems.textContent = null;
            }
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
        input.addEventListener('change', quantityChanged)
    }
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i=0; i<addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        
        
        // localStorage.setItem("title", title);
        // localStorage.setItem("price", price);
        // localStorage.setItem("imgSrc", imgSrc);
        // localStorage.setItem("foamOption", foamOption);
        // localStorage.setItem("colorOption", colorOption);
        button.addEventListener('click', addToCartClick)
    }
    }

function addToCartClick(event) {
    var button = event.target
    var shopItem = button.parentElement
        var title =  shopItem.getElementsByClassName('shop-item-title')[0].innerText
        var price =  shopItem.getElementsByClassName('shop-item-price')[0].innerText
        var imgSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
        var foamOption = "Duck Down"
        var colorOption = "After School Special"
        addCartItem(title, price, imgSrc, colorOption, foamOption)
        updateTotal()

}

function addCartItem(title, price, imgSrc, colorOption, foamOption) {
    var cartitem = document.createElement('div')
    cartitem.classList.add('cartitem')
    
    var cartItems = document.getElementsByClassName('cart')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i=0; i<cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("This Item is already added to the cart")
            return
        }
    }
    var cartItemContent = `
    <div class="cartitemimage">
                        <img src="${imgSrc}"
                            id="image1" width="200" height="200">
                    </div>
                    <div class="cartitemdetails">
                        <div class="product-title">${title}</div>
                        <p class="product-description">Yarn Color:<br> ${colorOption}; Foam:<br> ${foamOption}</p>
                    </div>
                    <div class="cartitemprice">
                        ${price}
                    </div>
                    <div class="product-quantity">
                        <input type="number" value="1" min="1" class="product-quantity1">
                    </div>
                    <div class="cartitemremove">
                        <button class="remove-product" type="button">
                            Delete
                        </button>
                    </div>
    `
    

    cartitem.innerHTML = cartItemContent;
    cartItems.append(cartitem)
    cartitem.getElementsByClassName('remove-product')[0].addEventListener('click', removeCartItem)
    cartitem.getElementsByClassName('product-quantity1')[0].addEventListener('change', quantityChanged)

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
    localStorage.setItem("cart", cart)
    var cartItem = cart.getElementsByClassName('cartitem')
    var total = 0
    var taxRate = 0.05;
    var shippingRate = 15.00;
    var fadeTime = 300;
    for (var i=0; i< cartItem.length; i++) {
        var cartLine = cartItem[i]
        var price = cartLine.getElementsByClassName('cartitemprice')[0]
        var quantity = cartLine.getElementsByClassName('product-quantity1')[0]
        var priceNumber = parseFloat(price.innerText.replace('$', ''))
        var quantityNumber = quantity.value
        total = total + (priceNumber * quantityNumber)
    }
    document.getElementById('cart-subtotal').innerText = '$' + total
    
    document.getElementById('cart-shipping').innerText = '$' + shippingRate
    document.getElementById('cart-tax').innerText = '$' + Math.round((total * taxRate) * 100)/100
    document.getElementById('cart-total').innerText = '$' + (total + shippingRate + (total * taxRate)) 
}