define([], function () {
    return {
        init() {
            goods: !function () {
                const $blockall = $('#blockall');
                console.log(12345);
                $.ajax({
                    url: 'http://192.168.13.68/First-repository/xianheng/php/block.php',
                    dataType: 'json'
                })
                    .done(function (data) {
                        let $blockarr = [];
                        $.each(data, function (index, value) {
                            $blockarr.push(value.url);
                        })
                        console.log($blockarr[6]);
                        console.log(1);
                        let $str = '';
                        $str = `
                        <section id="block-one" class="one-of-block">
                        <div class="block-headline">
                        <h2>1F &nbsp;应急装备</h2>
                        <p>更多商品<span class="iconfont icon-zyojiantou"></p>
                        </div>
                        <div class="block-content">
                        <div class="con-list">
                        <ul>
                        <li><a>隼系列</a></li>
                        <li><a>微型消防车</a></li>
                        <li><a>MAVIC御系列</a></li>
                        </ul>
                        </div>
                        <div class="con-piece">
                        <div>
                        <img data-original="${$blockarr[1]}"
                            alt="" class="border-top">
                        <aside style="top: 10px;left: 232px;"><span class="iconfont icon-zyojiantou"></aside>
                        </div>

                        <div>
                        <img data-original="${$blockarr[2]}"
                            alt="" class="border-top">
                        <aside style="top: 10px;left: 492px;"><span class="iconfont icon-zyojiantou"></span></aside>
                        </div>
                        <div>
                        <img data-original="${$blockarr[3]}"
                            alt="" class="border-top">
                        <aside style="top: 10px;left: 752px;"><span class="iconfont icon-zyojiantou"></span></aside>
                        </div>
                        <div>
                        <img data-original="${$blockarr[4]}"
                            alt="">
                        <aside style="top: 239px;left: 232px;"><span class="iconfont icon-zyojiantou"></span></aside>
                        </div>
                        <div>
                        <img data-original="${$blockarr[5]}"
                            alt="">
                        <aside style="top: 239px;left: 492px;"><span class="iconfont icon-zyojiantou"></span></aside>
                        </div>
                        <div>
                        <img data-original="${$blockarr[6]}"
                            alt="">
                        <aside style="top: 239px;left: 752px;"><span class="iconfont icon-zyojiantou"></span></aside>
                        </div>
                        </div>
                        </div>
                        </section>
                        <div id="scrollimg">
            <img data-original="${$blockarr[6]}" alt="">
            <img data-original="${$blockarr[7]}" alt="">
            <img data-original="${$blockarr[8]}" alt="">
            <img data-original="${$blockarr[9]}" alt="">
            <img data-original="${$blockarr[10]}" alt="">
            <img data-original="${$blockarr[11]}" alt="">
            <img data-original="${$blockarr[12]}" alt="">
            <img data-original="${$blockarr[13]}" alt="">
            <img data-original="${$blockarr[14]}" alt="">
            <img data-original="${$blockarr[15]}" alt="">
            <img data-original="${$blockarr[16]}" alt="">
            <img data-original="${$blockarr[17]}" alt="">
            </div>
                        `
                        for (let i = 0; i < 12; i++) {
                            $blockall.append($str);
                        }
                        $('img').lazyload({
                            effect : "fadeIn"
                            });
                    })
            }();
            menu: !function () {
                const $muneli = $('.inner-left .title li');
                const $bf = $('.classify');
                const $bfdiv = $('.classify div');
                //二级菜单事件
                for (let $i = 0; $i < $muneli.size(); $i++) {
                    let $num = '';
                    $muneli.eq($i).on('mouseover', function () {
                        $(this).css({
                            backgroundColor: '#fff'
                        })
                        $bf.show();
                        $bfdiv.eq($(this).index()).show();
                        num = $(this).index()
                    })
                    $muneli.eq($i).on('mouseout', function () {
                        $(this).css({
                            backgroundColor: '#eee'
                        })
                        $bf.hide();
                        $bfdiv.eq($(this).index()).hide();
                    })
                    $bf.on('mouseover', function () {
                        $bf.show();
                        $bfdiv.eq(num).show();
                    })
                    $bf.on('mouseout', function () {
                        $bf.hide();
                        $bfdiv.eq(num).hide();
                    })
                }
            }();
            lunbo: !function () {
                //轮播图
                const $alllist = $('.imglist');
                const $littli = $('.little li');
                const $imglist = $('.imglist-cen')
                const $img = $('.imglist-cen img');
                let $imgwid = $img.eq(0).width();
                let $index = 0;
                console.log($img.eq(0).width())
                $littli.on('click', function () {
                    $(this).addClass('little-act').siblings('li').removeClass('little-act');
                    $imglist.stop().animate({ left: -$imgwid * $(this).index() + 'px' }, 500);
                    $index = $(this).index();
                })
                //定时器有毒
                let $timer = setInterval(function () {
                    $index++;
                    if ($index > 8) {
                        $imglist.stop().animate({ left: '0px' }, 0);
                        $index = 1;
                        $littli.eq($index).addClass('little-act').siblings('li').removeClass('little-act');
                    } else if ($index == 8) {
                        $littli.eq(0).addClass('little-act').siblings('li').removeClass('little-act');
                    } else {
                        $littli.eq($index).addClass('little-act').siblings('li').removeClass('little-act');
                    }
                    $imglist.stop().animate({ left: - $imgwid * $index + 'px' }, 500);
                    console.log(1);
                }, 5000);
                $alllist.on('mouseover', function () {
                    clearInterval($timer)
                })
                $alllist.on('mouseout', function () {
                    $timer = setInterval(function () {
                        $index++;
                        if ($index > 8) {
                            $imglist.stop().animate({ left: '0px' }, 0);
                            $index = 1;
                            $littli.eq($index).addClass('little-act').siblings('li').removeClass('little-act');
                        } else if ($index == 8) {
                            $littli.eq(0).addClass('little-act').siblings('li').removeClass('little-act');
                        } else {
                            $littli.eq($index).addClass('little-act').siblings('li').removeClass('little-act');
                        }
                        $imglist.stop().animate({ left: - $imgwid * $index + 'px' }, 500);
                        console.log(1);
                    }, 5000);
                })
            }();
            stairway: !function () {
                const $stairway = $('#stairway');
                const $stairli = $('#stairway li');
                if (document.documentElement.scrollTop >= 660) {
                    $stairway.show()
                } else {
                    $stairway.hide()
                }
                window.onscroll = function () {
                    if (document.documentElement.scrollTop >= 660) {
                        $stairway.show()
                    } else {
                        $stairway.hide()
                    }
                    $num = parseInt((document.documentElement.scrollTop - 580) / 642)
                    $stairli.eq($num).css({
                        backgroundColor: 'red'
                    }).siblings('li').css("backgroundColor", '#eee');
                }
                $stairli.on('click', function () {
                    document.documentElement.scrollTop = $(this).index() * 642 + 580
                    $(this).css({
                        backgroundColor: 'red'
                    }).siblings('li').css("backgroundColor", '#eee');
                })
                $stairli.eq($stairli.size() - 1).on('click', function () {
                    document.documentElement.scrollTop = 0
                })
            }()
        }
    }
})