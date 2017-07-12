/**
 * Created by huaha on 2017/7/6.
 */

$(function () {
    $('.btn').click(function () {
        var userName = $('.userName').val(),
            pwd = $('.pwd').val(),
            rePwd = $('.rePwd').val();
            if(!userName){alert('请输入用户名.');return;}
            if(!rePwd || !pwd){alert("请输入密码.");return;}
            if(pwd!=rePwd){alert("两次密码不一致.");return;}
            $.ajax({
                type:"post",
                url:'/api/user/register',
                data:{userName:userName,password:pwd},
                dataType:"json",
            }).then(function(rs){   //成功
                console.log(rs);
                //注册成功
                if(rs.code==1){
                    $("fieldset").hide();
                    $(".register-success").fadeIn();
                }else{
                    alert(rs.message);
                }
            },function(rs){
                alert("系统异常");
            });
    });
});