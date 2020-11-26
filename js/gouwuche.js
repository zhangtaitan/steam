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
			// console.log(s);
			if(s <= 0){
        shijian.innerHTML = "活动已结束";
        shijian1.innerHTML = "活动已结束";
				//清除定时器
				clearInterval(timer);
				return;
			}
			init(s);
    },1000);
//购物车数据
$(function (){
	// 判断本地存储是否有购物车数据
	if (localStorage.getItem('goods')) {// 有数据
	  //获取本地存储中购物车的数据
	  var goodsArr = JSON.parse( localStorage.getItem('goods') )
      
	  // 获取数据
	  $.ajax({
		url: '../data/youxibiao.json',
		type: 'get',
		dataType: 'json',
		success: function (json){
		console.log(json);
		  var domStr = ''
		  $.each(goodsArr,function (index,item){
			$.each(json,function (ind,obj){
			  if ( item.code === obj.code ) {
				domStr += `
				<li>
				  <img src="${obj.imgurl}" alt="">
				  <h3>${obj.title}</h3>
				  <p>${obj.price}</p>
				  <em code="${obj.code}">删除</em>
				</li>
				`
			  }
			})
		  })
		  $('.list1').html(domStr)
		}
	  })
  
	  // 商品移出购物车
	  $('.list1').on('click','li em',function (){
		// 删除该商品对应的li
		$(this).parent().remove()
  
		// 更新本地存储中的数据
		var code = $(this).attr('code') // 要删除商品的编号
		// 删除数组元素：pop()  unshift()  splice(index,1)
		$.each(goodsArr,function (index,item){
		  if (item.code === code) {
			goodsArr.splice(index,1)
			return false
		  }
		})
  
		// 判断购物车是否还有数据
		if (goodsArr.length > 0) {
		  // 更新本地数据
		  localStorage.setItem('goods',JSON.stringify(goodsArr))
		} else {
		  // 清除本地数据
		  localStorage.removeItem('goods')
		  var nodata = '<li style="line-height: 70px; text-align: center; color:white;">购物车暂无数据！</li>'
		  $('.list1').html(nodata)
		}
  
		alert('商品移出购物车成功！')
  
	  })
  
	} else {// 没数据
	  var nodata = '<li style="line-height: 70px; text-align: center; color:white;">购物车暂无数据！</li>'
	  $('.list1').html(nodata)
	}
  
  })