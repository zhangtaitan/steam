// 登陆
var lu = $1('.lu')
var ma = $1('.ma')
var niu = $1('.niu')

niu.onclick=function(){
    var us = lu.value
    var ps = ma.value

    if (!us || !ps) {
        alert('账号或密码不能为空')
        return
      } 

      ajax({
        url: '../data/user2.php',
        type: 'post',
        data: {
          user: us,
          pass: ps,
          type: 'login',
        },
        dataType: 'json',
        success: function (json){
          alert(json.msg)
        },
        error:function (code){
          alert(code)
        }
      })
}
// 