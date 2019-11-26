window.addEventListener("load", popup, true);

function popup() {
    let popup1 = document.getElementById("popup-one");
    let popup2 = document.getElementById("popup-two");
    let popup3 = document.getElementById("popup-three");
    let popup4 = document.getElementById("popup-four");
    let popup5 = document.getElementById("popup-five");
    let popupBlock = document.getElementById("popup-block");
    let popupBlock1 = document.getElementById("popup-block1");
    let popupBlock2 = document.getElementById("popup-block2");
    let popupBlock3 = document.getElementById("popup-block3");
    let popupBlock4 = document.getElementById("popup-block4");

    let body = document.getElementsByTagName("body");
    body[0].addEventListener("click", hide, true);

    function hide(e) {
        popupBlock.style.display = "none";
        popupBlock1.style.display = "none";
        popupBlock2.style.display = "none";
        popupBlock3.style.display = "none";
        popupBlock4.style.display = "none";

    }

    popup4.addEventListener("click", display, true);
    popup1.addEventListener("click", display1, true);
    popup2.addEventListener("click", display2, true);
    popup3.addEventListener("click", display3, true);
    popup5.addEventListener("click", display4, true);
    popupBlock.onclick = function () {
        popupBlock.style.display = "block";
        popupBlock1.style.display = "block";
        popupBlock2.style.display = "block";
        popupBlock3.style.display = "block";
        popupBlock4.style.display = "block";
    };

    function resetPopup() {
        popup1.style.border = "4px solid #4DD0E1";
        popup2.style.border = "4px solid #4DD0E1";
        popup3.style.border = "4px solid #4DD0E1";
        popup4.style.border = "4px solid #4DD0E1";
        popup5.style.border = "4px solid #4DD0E1";
    }

    function display() {
        popupBlock.style.display = "block";
        resetPopup();
    }
    function display1() {
        popupBlock1.style.display = "block";
        resetPopup();
    }
    function display2() {
        popupBlock2.style.display = "block";
        resetPopup();
    }
    function display3() {
        popupBlock3.style.display = "block";
        resetPopup();
    }
    function display4() {
        popupBlock4.style.display = "block";
        resetPopup();
    }
}
