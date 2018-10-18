var bannerBox = document.getElementById('banner-box');
var bannerLi = document.getElementById('banner-li');
var liTop = 0;
var add = -77;
setInterval(function(){
    liTop += add;
    bannerLi.style.top = liTop + 'px';
    if (liTop == -231) {
        add = 77;
    }
    if (liTop == 0){
        add = -77
    }
},3000)