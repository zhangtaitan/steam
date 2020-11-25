// 注册判断
var kuang = document.querySelector('.kuang')
var zhu = document.querySelector('.zhu')

zhu.onclick = function(){
    if(kuang.checked === true){
       alert("注册成功")
    }
    else{
        alert("请同意协议");
        return false;
    }
}