window.addEventListener("load",donateButton,false);
function donateButton() {
    let donateButton=document.getElementById("donate-button");
    let price=document.getElementById("price").innerText;
    let privilegyName=document.getElementById("privilegyName").innerText;
    let donateButton1=document.getElementById("donate-button1");
    let price1=document.getElementById("price1").innerText;
    let privilegyName1=document.getElementById("privilegyName1").innerText;
    let donateButton2=document.getElementById("donate-button2");
    let price2=document.getElementById("price2").innerText;
    let privilegyName2=document.getElementById("privilegyName2").innerText;
    let donateButton3=document.getElementById("donate-button3");
    let price3=document.getElementById("price3").innerText;
    let privilegyName3=document.getElementById("privilegyName3").innerText;
    let donateButton4=document.getElementById("donate-button4");
    let price4=document.getElementById("price4").innerText;
    let privilegyName4=document.getElementById("privilegyName4").innerText;
    price=price.split(" ")[0];
    price1=price1.split(" ")[0];
    price2=price2.split(" ")[0];
    price3=price3.split(" ")[0];
    price4=price4.split(" ")[0];
    donateButton.onclick=function () {
        $.ajax({
            url:"https://donate.divinecode.org/prepare?user=nick&sum=123&product="+privilegyName,
            method:"GET",
            error:function (data) {
                return true;
            }
        });
        let nickName=document.getElementById("input-popup").value;
        window.location.href="https://unitpay.ru/pay/$166361-03b8c?sum="+price+"&account="+nickName;
    };
    donateButton1.onclick=function () {
        $.ajax({
            url:"https://donate.divinecode.org/prepare?user=nick&sum=123&product="+privilegyName1,
            method:"GET",
            error:function (data) {
                return true;
            }
        });
        let nickName1=document.getElementById("input-popup1").value;
        window.location.href="https://unitpay.ru/pay/$166361-03b8c?sum="+price1+"&account="+nickName1;
    };
    donateButton2.onclick=function () {
        $.ajax({
            url:"https://donate.divinecode.org/prepare?user=nick&sum=123&product="+privilegyName2,
            method:"GET",
            error:function (data) {
                return true;
            }
        });
        let nickName2=document.getElementById("input-popup2").value;
        window.location.href="https://unitpay.ru/pay/$166361-03b8c?sum="+price2+"&account="+nickName2;
    };
    donateButton3.onclick=function () {
        $.ajax({
            url:"https://donate.divinecode.org/prepare?user=nick&sum=123&product="+privilegyName3,
            method:"GET",
            error:function (data) {
                return true;
            }
        });
        let nickName3=document.getElementById("input-popup3").value;
        window.location.href="https://unitpay.ru/pay/$166361-03b8c?sum="+price3+"&account="+nickName3;
    };
    donateButton4.onclick=function () {
        $.ajax({
            url:"https://donate.divinecode.org/prepare?user=nick&sum=123&product="+privilegyName4,
            method:"GET",
            error:function (data) {
                return true;
            }
        });
        let nickName4=document.getElementById("input-popup4").value;
        window.location.href="https://unitpay.ru/pay/$166361-03b8c?sum="+price4+"&account="+nickName4;
    };
}