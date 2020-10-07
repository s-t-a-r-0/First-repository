define([], function () {
    return {
        init: function () {
            const $denglu = $('.denglu');
            const $user = $('.user input');
            const $pass = $('.pass input');
            const $span1 = $('.span1');
            const $span2 = $('.span2');
            $user.on('blur', function () {
                if (!$user.val()) {
                    $span1.html('请输入正确的用户名');
                }else{
                    $span1.html('');
                }
                console.log($user.val())
            })
            $pass.on('blur', function () {
                if (!$pass.val()) {
                    $span2.html('请输入正确的用户名');
                }else{
                    $span1.html('');
                }
            })
            $denglu.on('click',function(){
                $.ajax({
                    url:'http://localhost/First-repository/xianheng/php/login.php',
                    data:{
                        user:$user.val(),
                        pass:$pass.val()
                    }
                })
                .done(function(data){
                    if(data){
                        location.href='http://localhost/First-repository/xianheng/src/index1.html'
                    }
                })
            })
        }
    }
})