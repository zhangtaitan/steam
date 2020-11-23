//搜索框
var ipt = document.querySelector('.ipt')
var list = document.querySelector('.list')

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


//广告
var mySwiper = new Swiper ('.swiper-container', {
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
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
  //自动循环
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  }
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