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
            sideimage5.src = "images/grey3.jpg";;
        }

        
        // button.addEventListener('click', updateButton);
        function updateButton () {
            const button = document.getElementById("addtocart");
            var navcartitems = document.getElementById("navcartitems");
            const paragraph = navcartitems.p;

            if (button.value === 'Add to Cart') {
                button.value = 'Remove from Cart';
                paragraph.textContent = '1';
            }
            else {
                console.log("entered loop");
                button.value = 'Add to Cart';
            }
        }


        // /* Set rates + misc */
        //     var taxRate = 0.05;
        //     var shippingRate = 15.00;
        //     var fadeTime = 300;


        //     /* Assign actions */
        //     document.getElementById('.product-quantity input').change(function () {
        //         updateQuantity(this);
        //     });

        //     document.getElementById('.product-removal button').click(function () {
        //         removeItem(this);
        //     });


        //     /* Recalculate cart */
        //     function recalculateCart() {
        //         var subtotal = 0;

        //         /* Sum up row totals */
        //         document.getElementById('.product').each(function () {
        //             subtotal += parseFloat(document.getElementById(this).children('.product-line-price').text());
        //         });

        //         /* Calculate totals */
        //         var tax = subtotal * taxRate;
        //         var shipping = (subtotal > 0 ? shippingRate : 0);
        //         var total = subtotal + tax + shipping;

        //         /* Update totals display */
        //         document.getElementById('.totals-value').fadeOut(fadeTime, function () {
        //             document.getElementById('#cart-subtotal').html(subtotal.toFixed(2));
        //             document.getElementById('#cart-tax').html(tax.toFixed(2));
        //             document.getElementById('#cart-shipping').html(shipping.toFixed(2));
        //             document.getElementById('#cart-total').html(total.toFixed(2));
        //             if (total == 0) {
        //                 document.getElementById('.checkout').fadeOut(fadeTime);
        //             } else {
        //                 document.getElementById('.checkout').fadeIn(fadeTime);
        //             }
        //             document.getElementById('.totals-value').fadeIn(fadeTime);
        //         });
        //     }


        //     /* Update quantity */
        //     function updateQuantity(quantityInput) {
        //         /* Calculate line price */
        //         var productRow = document.getElementById(quantityInput).parent().parent();
        //         var price = parseFloat(productRow.children('.product-price').text());
        //         var quantity = document.getElementById(quantityInput).val();
        //         var linePrice = price * quantity;

        //         /* Update line price display and recalc cart totals */
        //         productRow.children('.product-line-price').each(function () {
        //             document.getElementById(this).fadeOut(fadeTime, function () {
        //                 document.getElementById(this).text(linePrice.toFixed(2));
        //                 recalculateCart();
        //                 document.getElementById(this).fadeIn(fadeTime);
        //             });
        //         });
        //     }


        //     /* Remove item from cart */
        //     function removeItem(removeButton) {
        //         /* Remove row from DOM and recalc cart total */
        //         var productRow = document.getElementById(removeButton).parent().parent();
        //         productRow.slideUp(fadeTime, function () {
        //             productRow.remove();
        //             recalculateCart();
        //         });
        //     }