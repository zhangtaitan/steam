//游戏清单表
$(function (){

    // 获取商品列表数据
    $.ajax({
      url: '../data/youxibiao.json',
      type: 'get',
      dataType: 'json',
      success: function (json){
      //console.log(json)
      var goodsStr = ''
      $.each(json,function (index,item){
        goodsStr += `<div class="goods">
          <img src="${item.imgurl}" alt="">
          <p>${item.price}</p>
          <h3>${item.title}</h3>
          <div code="${item.code}">加入购物车</div>
        </div>`
      })
      $('.main1').html(goodsStr)
      }
    })

    

})