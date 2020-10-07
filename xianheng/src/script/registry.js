define([], function () {
    return {
        init: function () {
            const $name = $('.username input');
            const $pass = $('.password input');
            const $validation = $('.validation input');
            const $email = $('.email input');
            const $phone = $('.phone input');
            const $form = $('#registry form')
            const $xieyi = $('.xieyi input');
            const $liji = $('.liji');


            let userflag = true;
            let telflag = true;
            let validaflag = true;
            let emailflag = true;
            let passflag = true;

            //用户名
            $name.on('blur', function () {
                if ($name.val()) {
                    let strlen = $name.val().length;
                    let reg = /^[a-zA-Z\u4e00-\u9fa5\d\_]+$/
                    if (strlen >= 4 && strlen <= 20) {
                        if (reg.test($name.val())) {
                            //放置符号
                            userflag = true
                            $('.username span').html('');
                        } else {
                            $('.username span').html('请输入正确用户名');
                            userflag = false
                        }
                    } else {
                        $('.username span').html('请输入4-20个字长');
                        userflag = false
                    }

                } else {
                    $('.username span').html('请输入用户名');
                    userflag = false
                }
            })
            //密码
            $pass.on('blur', function () {
                if ($pass.val()) {
                    let strlen = $pass.val().length;
                    if (strlen >= 6 && strlen <= 20) {
                        //控制字符种类
                        let reg1 = /\d+/; //数字
                        let reg2 = /[a-z]+/;
                        let reg3 = /[A-Z]+/;
                        let reg4 = /[\W\_]+/; //特殊字符
                        let count = 0; //统计字符的种类。
                        if (reg1.test(this.value)) {
                            count++;
                        }
                        if (reg2.test(this.value)) {
                            count++;
                        }
                        if (reg3.test(this.value)) {
                            count++;
                        }
                        if (reg4.test(this.value)) {
                            count++;
                        }

                        switch (count) {
                            case 1:
                                $('.security .ruo').css({
                                    backgroundColor: 'red'
                                })
                                passflag = true;
                                $('.password span').html('');
                                break;
                            case 2:
                                $('.security .ruo').css({
                                    backgroundColor: 'orange'
                                })
                                $('.security .zhong').css({
                                    backgroundColor: 'orange'
                                })
                                passflag = true;
                                $('.password span').html('');
                                break;
                            case 3:
                            case 4:
                                $('.security .ruo').css({
                                    backgroundColor: 'green'
                                })
                                $('.security .zhong').css({
                                    backgroundColor: 'green'
                                })
                                $('.security .qiang').css({
                                    backgroundColor: 'green'
                                })
                                passflag = true;
                                $('.password span').html('');
                                break;
                        }
                    } else {
                        $('.password span').html('请输入6-20个字长');
                        passflag = false
                    }
                } else {
                    $('.password span').html('请输入密码');
                    passflag = false
                }
            })
            //验证密码
            $validation.on('blur', function () {
                if ($validation.val()) {
                    if ($validation.val() === $pass.val()) {
                        //放置符号
                        $('.validation span').html('');
                        validaflag = true;
                    } else {
                        $('.validation span').html('与密码输入不一致');
                        validaflag = false;
                    }
                } else {
                    $('.validation span').html('请输入确认密码');
                    validaflag = false;
                }
            })
            //邮箱地址
            $email.on('blur', function () {
                if ($email.val()) {
                    let reg = /^(\w+([-+.]\w+)*)@(\w+([-.]\w+)*)\.(\w+([-.]\w+)*)$/;
                    if (reg.test($email.val())) {
                        //fuhao
                        emailflag = true
                        $('.email span').html('')
                    } else {
                        alert(2)
                        $('.email span').html('请输入正确的邮箱地址')
                        emailflag = false
                    }
                } else {
                    alert(1)
                    $('.email span').html('请输入邮箱地址')
                    emailflag = false
                }
            })
            //手机号吗
            $phone.on('blur', function () {
                if ($phone.val()) {
                    let reg = /^1[345789]\d{9}$/;
                    if (reg.test(this.value)) {
                        //符号
                        telflag = true
                        $('.phone span').html('')
                    } else {
                        $('.phone span').html('请输入正确的手机号码')
                        telflag = false
                    }
                } else {
                    $('.phone span').html('请输入手机号码')
                    telflag = false
                }
            })
            //注册
            $form.on('submit', function () {
                if (!$name.val()) {
                    $('.username span').html('请输入用户名');
                    userflag = false
                }
                if (!$pass.val()) {
                    $('.password span').html('请输入密码');
                    passflag = false
                }
                if (!$validation.val()) {
                    $('.validation span').html('请输入确认密码');
                    validaflag = false
                }
                if (!$email.val()) {
                    $('.email span').html('请输入邮箱地址')
                    emailflag = false
                }
                if (!$phone.val()) {
                    $('.phone span').html('请输入手机号码')
                    telflag = false
                }
                if (!$('#prov').find('option:selected').attr('index')) {
                    $('.prov span').html('请选择所属省份')
                    return false;
                }
                if (!$('#city').find('option:selected').attr('index')) {
                    $('.city span').html('请选择所属城市')
                    return false;
                }
                console.log(userflag,telflag,validaflag,emailflag,passflag);
                if (!userflag || !telflag || !validaflag || !emailflag || !passflag) {
                    return false;
                }
            })



            const $prov = $('#prov');//获取省份；
            const $city = $('#city');//获取城市；
            //设置储存的数组
            //获取data
            $.ajax({
                url: 'http://localhost/First-repository/xianheng/src/script/city.json',
                dataType: 'json'
            })
                .done((data) => {
                    console.log(data);
                    //渲染省份
                    $.each(data, function (index, value) {
                        let $provlist = `<option index = ${index}>${value.name}</option>`
                        $prov.append($provlist);
                    })
                    //渲染城市
                    $prov.on('change', function () {
                        //得到数组下面的值
                        let $provindex = $(this).find('option:selected').attr('index')
                        let $citiname = data[$provindex].city
                        //进行option渲染
                        if ($citiname) {//进行值的判断
                            $city.find('option').first().nextAll().remove()//移除已有的城市
                            $.each($citiname, function (index, value) {
                                let $citylist = `<option index = ${index}>${value.name}</option>`
                                $city.append($citylist);
                            })
                        }

                    })
                })
        }
    }
})