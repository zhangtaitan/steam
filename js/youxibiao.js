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

    $('.main1').on('click','.goods div',function (){
        // 获取当前点击商品的编号
        var code = $(this).attr('code')

        if (localStorage.getItem('goods')) {
            var goodsArr = JSON.parse( localStorage.getItem('goods') )
          } else {
            var goodsArr = []
          }

          var hasGoods = false

          if (goodsArr.length > 0) {
            // 判断当前选中商品是否在购物车中
            $.each(goodsArr,function (index,item){
              console.log(index)
              console.log(item)
              if (item.code === code) {// 商品存在购物车中，数量+1
                item.num++
                hasGoods = true
                return false
              }
            })
          }
      
          // 如果购物车没有当前选中的商品，添加一条数据
          if (!hasGoods) {
            // var objStr = JSON.stringify({code:code,num:1})
            goodsArr.push({code:code,num:1})
          }
      
          // 更新本地存储的数据
          localStorage.setItem('goods',JSON.stringify(goodsArr))
      
          alert('添加购物车成功')
      
    })
})