//





//搜索框
var ipt = document.querySelector('.ipt')
var list = document.querySelector('.list')
var li1 = document.querySelectorAll('.list li')

ipt.onkeyup = function (){

  jsonp({
    url: 'http://suggestion.baidu.com/su',
    data: 'wd='+ipt.value,
    jsonp: 'cb',
    jsonpCallback: 'hehe',//自定义函数名
    success: function mycb(json){
      var domStr = ''
      json.s.forEach(function (item){
        domStr += '<li>'+item+'</li>'
      })
      list.innerHTML = domStr
    }
  })

}

document.onclick= function(e){
   console.log(e.target.className)
   if(e.target.className === "ipt"){
     list.style.display = "block";
   }
   else{
     list.style.display = "none";
   }
}
//广告
var mySwiper1 = new Swiper ('.swiper-container1', {
  direction: 'horizontal', // 垂直切换选项
  loop: true, // 循环模式选项
  
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
  
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // 如果需要滚动条
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  
  //自动循环
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  }
}) 
//免费游戏
var mySwiper2 = new Swiper ('.swiper-container2', {
  effect : 'coverflow',
  slidesPerView: 1,
  centeredSlides: true,
  slideToClickedSlide: true,
  coverflowEffect: {
       rotate: 30,
       stretch: 10,
       depth: 60,
       modifier: 2,
       slideShadows : true
  },

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
},

navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

loop : true,
loopAdditionalSlides : 3,
})  

//视频播放
var player = new Aliplayer({
  "id": "player-con",
  "source": "../img/飙狼.mp4",
  "width": "600px",
  "height": "400px",
  "autoplay": true,
  "isLive": false,
  "rePlay": true,
  "playsinline": true,
  "preload": true,
  "controlBarVisibility": "hover",
  "useH5Prism": true
}, function (player) {
    player._switchLevel = 0;
    console.log("播放器创建了。");
  }
);
var player = new Aliplayer({
  "id": "player-con1",
  "source": "../img/飙狼.mp4",
  "width": "600px",
  "height": "400px",
  "autoplay": true,
  "isLive": false,
  "rePlay": true,
  "playsinline": true,
  "preload": true,
  "controlBarVisibility": "hover",
  "useH5Prism": true
}, function (player) {
    player._switchLevel = 0;
    console.log("播放器创建了。");
  }
);
var player = new Aliplayer({
  "id": "player-con2",
  "source": "../img/飙狼.mp4",
  "width": "600px",
  "height": "400px",
  "autoplay": true,
  "isLive": false,
  "rePlay": true,
  "playsinline": true,
  "preload": true,
  "controlBarVisibility": "hover",
  "useH5Prism": true
}, function (player) {
    player._switchLevel = 0;
    console.log("播放器创建了。");
  }
);
var player = new Aliplayer({
  "id": "player-con3",
  "source": "../img/飙狼.mp4",
  "width": "600px",
  "height": "400px",
  "autoplay": true,
  "isLive": false,
  "rePlay": true,
  "playsinline": true,
  "preload": true,
  "controlBarVisibility": "hover",
  "useH5Prism": true
}, function (player) {
    player._switchLevel = 0;
    console.log("播放器创建了。");
  }
);