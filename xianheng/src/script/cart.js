define([], function () {
    return {
        init: function () {
            let arrsid = [];
            let arrnum = [];
            const cartcontent = $('.cart-content');
            if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                arrsid = $.cookie('cookiesid').split(',');
                arrnum = $.cookie('cookienum').split(',');
                $.each(arrsid, function (index, value) {
                    $.ajax({
                        url: 'http://localhost/First-repository/xianheng/php/getsid.php',
                        data: {
                            movesid: value
                        },
                        dataType: 'json'
                    })
                        .done(function (data) {
                            function xuanran(data) {
                                let str = `<ul class='cart-ul' datasid='${data.sid}'>`
                                str += `
                    <li class="span01">
                    <input type="checkbox" class="cbox_all" checked="checked">
                    </li>
                    <li class="span02">
                        <img src="${data.url}" alt="">
                    </li>
                    <li class="span03" >${data.title}</li>
                    <li class="span04">产品规格:200mm</li>
                    <li class="span05">CA090310</li>
                    <li class="span06" >${data.price}</li>
                    <li class="span07">把</li>
                    <li class="span08 shuliang">
                        <p class="jia">+</p>
                        <input type="text" id="count" value="${arrnum[index]}" >
                        <p class="jians">-</p>
                    </li>
                    <li class="span09">${parseFloat(data.price * arrnum[index]).toFixed(2)}</li>
                    <li class="span10">
                        <a class="del">删除</a>
                        <a href="">收藏</a>
                        `
                                str += `</ul>`
                                return str
                            }
                            cartcontent.append(xuanran(data));
                            //计算总价
                            const $priceall = $('.cart-content .cart-ul .span09');
                            let $allprice = 0;
                            $.each($priceall, function (index, value) {
                                $allprice += +$(this).html()
                                $('.bottom-left .all b').html('￥' + parseFloat($allprice).toFixed(2));
                            })
                            //封装一个函数，得到cookie中的值
                            function getcookie() {
                                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                                    arrsid = $.cookie('cookiesid').split(',');
                                    arrnum = $.cookie('cookienum').split(',');
                                }
                            }
                            //价格变化
                            $(".cart-ul .span08 input").change(function () {
                                $(this).parents('.cart-ul').find('.span09').html($(this).parents('.cart-ul').find('.span06').html() * $(this).val())
                                let $allprice = 0;
                                $.each($priceall, function (index, value) {
                                    $allprice += +$(this).html()
                                    $('.bottom-left .all b').html('￥' + parseFloat($allprice).toFixed(2));
                                })
                                getcookie();
                                let what = $.inArray($(this).parents('.cart-ul').attr('datasid'), arrsid);
                                let number = $(this).val();
                                arrnum[what] = number;
                                $.cookie('cookienum', arrnum, { expires: 7 });
                            });

                            //删除
                            const $del = $('.cart-ul .del');
                            $del.on('click',function(){
                                getcookie();
                                let what = $.inArray($(this).parents('.cart-ul').attr('datasid'), arrsid);
                                arrsid.splice(what,1);
                                arrnum.splice(what,1);
                                $.cookie('cookiesid', arrsid, { expires: 7 });
                                $.cookie('cookienum', arrnum, { expires: 7 });
                                $(this).parents('.cart-ul').remove();
                            })

                        })
                })
            }
            //数量增减

            cartcontent.on('click', '.jia', function () {
                let $numzheng = parseInt($(this).parents('.shuliang').find('input').val())
                $numzheng++
                $(this).parents('.shuliang').find('input').val($numzheng);
                $(".cart-ul .span08 input").change()
            })
            cartcontent.on('click', '.jians', function () {
                let $numfu = parseInt($(this).parents('.shuliang').find('input').val())
                $numfu--
                $(this).parents('.shuliang').find('input').val($numfu);
                $(".cart-ul .span08 input").change()
            })



        }
    }
})