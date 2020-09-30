define([],function(){
    return {
        init:function(){
            let arrsid = [];
            let arrnum = [];
            const cartcontent = $('.cart-content')
            if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                arrsid = $.cookie('cookiesid').split(',');
                arrnum = $.cookie('cookienum').split(',');
            }
            console.log(arrsid)
            $.each(arrsid,function(index,value){
                $.ajax({
                    url:'http://localhost/First-repository/xianheng/php/getsid.php',
                    data: {
                        movesid: value
                    },
                    dataType:'json'
                })
                .done(function(data){
                    console.log(data)
                    let str = `<ul class='cart-ul'>`
                        str+=`
                    <li class="span01">
                    <input type="checkbox" class="cbox_all" checked="checked">
                    </li>
                    <li class="span02">
                        <img src="${data.url}" alt="">
                    </li>
                    <li class="span03">${data.title}</li>
                    <li class="span04">产品规格:200mm</li>
                    <li class="span05">CA090310</li>
                    <li class="span06">${data.price}</li>
                    <li class="span07">把</li>
                    <li class="span08 shuliang">
                        <p>+</p>
                        <input type="text" value="1" id="count" value='${arrnum[index]}'>
                        <p>-</p>
                    </li>
                    <li class="span09">${data.price*arrnum[index]}</li>
                    <li class="span10">
                        <a href="">删除</a>
                        <a href="">收藏</a>
                        `
                    str+=`</ul>`
                    cartcontent.append(str);
                })
            })

        }
    }
})