define([],function(){
    return{
        init:function (){
        const $mulu = $('#inner .mulu');
        const $innerleft = $('.inner-left .title');
        const $innerleftli = $('.inner-left .title li');
        const $classify = $('.inner-left .classify');
        const $classifyli = $('.inner-left .classify div');
        let index = 0 ;
        $mulu.hover(function(){
            $innerleft.show();
        },function(){
            $innerleft.hide();
        })
        $innerleft.hover(function(){
            $innerleft.show();
            $classify.show();
        },function(){
            $innerleft.hide();
            $classify.hide();
        })
        $innerleftli.hover(function(){
            $(this).css({
                backgroundColor:'white'
            })
            $classifyli.eq($(this).index()).show();
            index = $(this).index()
        },function(){
            $(this).css({
                backgroundColor:'#eee'
            })
            $classifyli.eq($(this).index()).hide();
        })
        $classify.hover(function(){
            $innerleft.show()
            $classify.show();
            $innerleftli.eq(index).css({
                backgroundColor:'white'
            })
            $classifyli.eq(index).show();
        },function(){
            $innerleft.hide()
            $classify.hide();
            $innerleftli.eq(index).css({
                backgroundColor:'#eee'
            })
            $classifyli.eq(index).hide();
        })
        }
    }  
})