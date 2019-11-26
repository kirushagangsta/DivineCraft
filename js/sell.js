window.addEventListener("load", sell1, true);

function sell1() {
    let flags = [false, false, false, false, false, false];
    let sell1 = document.getElementById("sell1");
    let sell2 = document.getElementById("sell2");
    let sell3 = document.getElementById("sell3");
    let sell4 = document.getElementById("sell4");
    let sell5 = document.getElementById("sell5");
    let sell6 = document.getElementById("sell6");

    function reset(flagNumber) {
        for (let i = 0; i < flags.length; i++) {
            flags[i] = false;
        }
        flags[flagNumber] = true;
        sell1.style.color = "#FFFFFF";
        sell1.style.borderBottom = "0";
        sell2.style.color = "#FFFFFF";
        sell2.style.borderBottom = "0";
        sell3.style.color = "#FFFFFF";
        sell3.style.borderBottom = "0";
        sell4.style.color = "#FFFFFF";
        sell4.style.borderBottom = "0";
        sell5.style.color = "#FFFFFF";
        sell5.style.borderBottom = "0";
        sell6.style.color = "#FFFFFF";
        sell6.style.borderBottom = "0";
    }
    sell1.addEventListener("click",firstSell,false);
    function firstSell() {
        if (!flags[0]) {
            reset(0);
            sell1.style.borderBottom = "4px solid #4DD0E1";
            sell1.style.color = "#4DD0E1";
        }
    }
    sell2.onclick = function () {
        if (!flags[1]) {
            reset(1);
            sell2.style.borderBottom = "4px solid #4DD0E1";
            sell2.style.color = "#4DD0E1";
        }
    };
    sell3.onclick = function () {
        if (!flags[2]) {
            reset(2);
            sell3.style.borderBottom = "4px solid #4DD0E1";
            sell3.style.color = "#4DD0E1";
        }
    };
    sell4.onclick = function () {
        if (!flags[3]) {
            reset(3);
            sell4.style.borderBottom = "4px solid #4DD0E1";
            sell4.style.color = "#4DD0E1";
        }
    };
    sell5.onclick = function () {
        if (!flags[4]) {
            reset(4);
            sell5.style.borderBottom = "4px solid #4DD0E1";
            sell5.style.color = "#4DD0E1";
        }
    };
    sell6.onclick = function () {
        if (!flags[5]) {
            reset(5);
            sell6.style.borderBottom = "4px solid #4DD0E1";
            sell6.style.color = "#4DD0E1";
        }
    };
    firstSell();
}