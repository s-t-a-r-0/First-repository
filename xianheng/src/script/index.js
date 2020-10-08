define([], function () {
    return {
        init() {
            goods: !function () {
                const $blockall = $('#blockall');
                console.log(12345);
                $.ajax({
                    url: 'http://localhost/First-repository/xianheng/php/block.php',
                    dataType: 'json'
                })
                    .done(function (data) {
                        let $blockarr = [];
                        $.each(data, function (index, value) {
                            $blockarr.push(value.url);
                        })
                        console.log($blockarr[6]);
                        console.log(1);
                        //渲染首页
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
                            effect: "fadeIn"
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
            }();
            //右侧边栏
            rightstair: !function () {
                const $rightli = $('#right-way li');
                const $rightspan = $('#right-way li span')
                $rightli.on('mouseover', function () {
                    $rightspan.eq($(this).index()).hide()
                    $(this).css({
                        backgroundColor: '#e50112',
                        transitionDuration: '0.2s',
                        color: 'white'
                    })
                })
                $rightli.on('mouseout', function () {
                    $rightspan.eq($(this).index()).show()
                    $(this).css({
                        backgroundColor: '#999',
                        color: '#666'
                    })
                    $rightli.eq(0).css({
                        backgroundColor:'#e50112'
                    })
                })
                //qq图标动作
                function chu(ss) {
                    ss.css("flex-direction", 'row');
                    ss.css({
                        width: '124px',
                        fontSize: '14px'
                    });
                    ss.children("b").show();
                    ss.stop().animate({
                        left: '-70px',
                    }, 100)
                }
                function ru(rr) {
                    rr.css("flex-direction", 'column');
                    rr.children("b").hide();
                    rr.stop().animate({
                        width: '54px',
                        left: '0px',
                        fontSize: '12px'
                    }, 100);
                }
                $rightli.eq(2).on('mouseover', function () {
                    chu($(this));
                });
                $rightli.eq(2).on('mouseout', function () {
                    ru($(this));
                })
                $rightli.eq(3).on('mouseover', function () {
                    chu($(this));
                });
                $rightli.eq(3).on('mouseout', function () {
                    ru($(this));
                })
                $rightli.eq(5).on('click',function(){
                    $('html,body').animate({scrollTop:0})
                })
                //微信图标动作
                $rightli.eq(4).on('mouseover',function(){
                    $('.thisimg').stop().animate({
                        left:'-160px'
                    })
                })
                $rightli.eq(4).on('mouseout',function(){
                    $('.thisimg').stop().animate({
                        left:'54px'
                    })
                })
                //判断右侧边栏的位置
                if (document.documentElement.scrollTop >= 20) {
                    $rightli.eq(5).show()
                 }
                window.onscroll = function () {
                    if (document.documentElement.scrollTop >= 20) {
                       $rightli.eq(5).show()
                    }else{
                        $rightli.eq(5).hide()
                    }
                }

                $('.more01').hover(function(){$('.morething').show()},function(){$('.morething').hide()})
                $('.more02').hover(function(){$('.morething02').show()},function(){$('.morething02').hide()})
                $('.more03').hover(function(){$('.morething03').show()},function(){$('.morething03').hide()})
                $('.more04').hover(function(){$('.morething04').show()},function(){$('.morething04').hide()})
            }()

        }
    }
})