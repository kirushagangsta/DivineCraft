window.addEventListener("load", change, true);

function change() {

    // let change = new Vue({
    //     el: "#change",
    //     data: {
    //         flag: true  ,
    //     },
    //     methods: {
    //         rulesChange: function () {
    //             change.$data.flag = true;
    //         },
    //         privilegyChange: function () {
    //             change.$data.flag=false;
    //         },
    //         redirect:function () {
    //             window.location.href="https://vk.com/micronovax";
    //         }
    //     }
    // })
    let rules = document.getElementById("rules");
    let flag = false;
    let privilegy = document.getElementById("privilegys");
    let rulesClick = document.getElementById("rules-click");
    let privilegyClick = document.getElementById("privilegy-click");

    function rulesFirst() {
        if (!flag) {
            privilegy.style.display = "none";
            rules.style.display = "block";
            flag = true;
            rulesClick.style.borderBottom = "4px #4DD0E1 solid";
            rulesClick.style.color = "#4DD0E1";
            privilegyClick.style.borderBottom = "0";
            privilegyClick.style.color = "rgba(255, 255, 255, 0.5)";
        }
    }

    rulesClick.addEventListener("click",rulesFirst,false);
    privilegyClick.onclick = function () {
        if (flag) {
            privilegy.style.display = "block";
            rules.style.display = "none";
            flag = false;
            rulesClick.style.borderBottom = "0";
            rulesClick.style.color = "rgba(255, 255, 255, 0.5)";
            privilegyClick.style.borderBottom = "4px #4DD0E1 solid";
            privilegyClick.style.color = "#4DD0E1";
        }
    };
    rulesFirst();
}