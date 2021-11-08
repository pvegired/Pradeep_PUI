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

             disableButton();
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

            disableButton1();

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

            disableButton2();
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
            disableButton3();
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
