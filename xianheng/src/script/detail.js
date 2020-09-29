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
        }
    }
})