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
// 倒计时活动时间
var shijian = document.getElementById("shijian");
var shijian1 = document.getElementById("shijian1");
		//结束日期
		var endDate = new Date("2020/11/30 10:53:40");
		//当前时间
		var nowDate = new Date();
		//时间差
		var s = parseInt(getDifTime(nowDate,endDate));
		
		//初始化页面内容。
		init(s);
		
		function init(s){
			if(s <= 0){
        shijian.innerHTML = "活动时间已结束";
        shijian1.innerHTML = "活动时间已结束";
				return;
			}
			//根据时间差的秒数来计算天，时，分，秒
			var hours = s / 60 / 60;
			//console.log(d);
			//hours/24:1.9791626041666666
			var d = parseInt(hours/24);
			var h = parseInt((hours/24 - d) * 24);
			var f = parseInt(((hours/24 - d) * 24 - h) * 60);
			var m = parseInt((((hours/24 - d) * 24 - h) * 60 - f) * 60);
			
      shijian.innerHTML = d+"天"+h+"时"+f+"分"+m+"秒";
      shijian1.innerHTML = d+"天"+h+"时"+f+"分"+m+"秒";
		}
		
		
		//定时器控制秒
		
		var timer = setInterval(function(){
			s--;
			console.log(s);
			if(s <= 0){
        shijian.innerHTML = "活动已结束";
        shijian1.innerHTML = "活动已结束";
				//清除定时器
				clearInterval(timer);
				return;
			}
			init(s);
    },1000);

// 