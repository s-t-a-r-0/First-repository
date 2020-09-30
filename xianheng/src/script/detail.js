define([], function () {
    return {
        init: function () {
            const $mulu = $('#inner .mulu');
            const $innerleft = $('.inner-left .title');
            const $innerleftli = $('.inner-left .title li');
            const $classify = $('.inner-left .classify');
            const $classifyli = $('.inner-left .classify div');
            let index = 0;
            $mulu.hover(function () {
                $innerleft.show();
            }, function () {
                $innerleft.hide();
            })
            $innerleft.hover(function () {
                $innerleft.show();
                $classify.show();
            }, function () {
                $innerleft.hide();
                $classify.hide();
            })
            $innerleftli.hover(function () {
                $(this).css({
                    backgroundColor: 'white'
                })
                $classifyli.eq($(this).index()).show();
                index = $(this).index()
            }, function () {
                $(this).css({
                    backgroundColor: '#eee'
                })
                $classifyli.eq($(this).index()).hide();
            })
            $classify.hover(function () {
                $innerleft.show()
                $classify.show();
                $innerleftli.eq(index).css({
                    backgroundColor: 'white'
                })
                $classifyli.eq(index).show();
            }, function () {
                $innerleft.hide()
                $classify.hide();
                $innerleftli.eq(index).css({
                    backgroundColor: '#eee'
                })
                $classifyli.eq(index).hide();
            })
            //放大镜效果
            const $spic = $('.goods-img .spic');
            const $bf = $('.bf');
            const $bpic = $('.bf img')
            const $sf = $('.sf');
            $spic.on('mouseover', function () {
                $sf.show();
                $bf.show();

                $spic.on('mouseout', function () {
                    $sf.hide();
                    $bf.hide();
                })
                $spic.on('mousemove', function (e) {
                    let $l = e.pageX - $spic.offset().left - $sf.width() / 2;
                    let $h = e.pageY - $spic.offset().top - $sf.height() / 2;
                    if ($l <= 0) {
                        $l = 0
                    } else if ($l >= $spic.width() - $sf.width()) {
                        $l = $spic.width() - $sf.width()
                    }
                    if ($h <= 0) {
                        $h = 0
                    } else if ($h >= $spic.height() - $sf.height()) {
                        $h = $spic.height() - $sf.height()
                    }

                    $sf.css({
                        left: $l,
                        top: $h
                    })
                    let num = $bpic.width() / $spic.width()
                    $bpic.css({
                        left: -$l * num,
                        top: -$h * num
                    })
                })
            })
            let $datasid = location.search.substring(5);
            if (!$datasid) {
                $datasid = 2
            }
            const $spicimg = $('.goods-img .spic img')
            $.ajax({
                url: 'http://localhost/First-repository/xianheng/php/getsid.php',
                data: {
                    movesid: $datasid
                },
                dataType: 'json'
            }).done(function (data) {
                console.log(data);
                $spicimg.attr({ src: data.url });
                $bpic.attr({ src: data.url });
                $('.imfor-name>p').html(data.title);
                $('.trueprice').html(data.price);
                let $newdata = data.piclisturl.split(',');
                console.log($newdata);
                let $str = '';
                $.each($newdata, function (index, value) {
                    $str += `
                <li><img src='${value}'></li>
                `
                    console.log(value);
                })
                $('.imgbox2').html($str);
            })
            //设置两个数组储存物品sid与物品个数
            let arrsid = [];
            let arrnum = [];
            //封装一个函数，得到cookie中的值
            function getcookie() {
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    arrsid = $.cookie('cookiesid').split(',');
                    arrnum = $.cookie('cookienum').split(',');
                }
            }
            const $join = $('.buycar');
            //当加入购物车被点击的时候
            $join.on('click', function () {
                getcookie();
                if ($.inArray($datasid, arrsid) === -1) {
                    arrsid.push($datasid);
                    arrnum.push($('#count').val());
                    $.cookie('cookiesid', arrsid, { expires: 7 });
                    $.cookie('cookienum', arrnum, { expires: 7 });
                } else {
                    let what = $.inArray($datasid, arrsid);
                    let number = parseInt($('#count').val()) + parseInt(arrnum[what])
                    arrnum[what] = number;
                    $.cookie('cookienum', arrnum, { expires: 7 });
                }
                console.log('按钮已经点击了');
            })
        }
    }
})