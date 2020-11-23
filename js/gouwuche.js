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