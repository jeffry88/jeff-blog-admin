//创建新用户
function create_user() {
    var user_html = '';
    user_html +=
        '<div class="create-user">' +
        '    <form class="layui-form" action="" lay-filter="add_user_form">' +
        '        <div class="layui-form-item">' +
        '            <label class="layui-form-label">用户名</label>' +
        '            <div class="layui-input-block">' +
        '                <input type="text" name="name" required  lay-verify="required" placeholder="请输入用户名" autocomplete="off" class="layui-input">' +
        '            </div>' +
        '        </div>' +
        '        <div class="layui-form-item">' +
        '            <label class="layui-form-label">密码</label>' +
        '            <div class="layui-input-inline">' +
        '                <input type="password" name="password" required lay-verify="required" placeholder="请输入用户密码" autocomplete="off" class="layui-input">' +
        '            </div>' +
        '        </div>' +
        '        <div class="layui-form-item layui-form-text">' +
        '            <label class="layui-form-label">用户简介</label>' +
        '            <div class="layui-input-block">' +
        '                <textarea name="desc" placeholder="请输入用户简介" class="layui-textarea"></textarea>' +
        '            </div>' +
        '        </div>' +
        '        <div class="layui-form-item">' +
        '            <label class="layui-form-label">性别</label>' +
        '            <div class="layui-input-block">' +
        '                <input type="radio" name="sex" value="男" title="男">' +
        '                <input type="radio" name="sex" value="女" title="女" checked>' +
        '            </div>' +
        '        </div>' +
        '        <div class="layui-form-item">' +
        '            <label class="layui-form-label">用户角色</label>' +
        '            <div class="layui-input-block">' +
        '                <select name="role" lay-verify="required">' +
        '                    <option value=""></option>' +
        '                    <option value="0">管理员</option>' +
        '                    <option value="1">VIP用户</option>' +
        '                    <option value="2">普通用户</option>' +
        '                    <option value="3">游客</option>' +
        '                </select>' +
        '            </div>' +
        '        </div>' +
        '        <div class="layui-form-item">' +
        '            <label class="layui-form-label">个人博客</label>' +
        '            <div class="layui-input-block">' +
        '                <input type="text" name="blog" required  lay-verify="required" placeholder="请输入用户个人博客地址" autocomplete="off" class="layui-input">' +
        '            </div>' +
        '        </div>' +
        '        <div class="layui-form-item">' +
        '            <label class="layui-form-label">微信</label>' +
        '            <div class="layui-input-block">' +
        '                <input type="text" name="wechat" required  lay-verify="required" placeholder="请输入微信号" autocomplete="off" class="layui-input">' +
        '            </div>' +
        '        </div>' +
        '        <div class="layui-form-item">' +
        '            <label class="layui-form-label">email</label>' +
        '            <div class="layui-input-block">' +
        '                <input type="text" name="email" required  lay-verify="required" placeholder="请输入用户email" autocomplete="off" class="layui-input">' +
        '            </div>' +
        '        </div>' +
        '        <div class="layui-form-item">' +
        '            <div class="layui-input-block operator-btn-div">' +
        '                <button class="layui-btn" lay-submit lay-filter="create_user">创建</button>' +
        '                <button type="reset" class="layui-btn layui-btn-primary">取消</button>' +
        '            </div>' +
        '        </div>' +
        '    </form>' +
        '</div>';
    $("#content_body").html(user_html);
    layui.use('form', function () {
        var form = layui.form;
        form.render(null, 'add_user_form');
        //监听表单提交
        form.on('submit(create_user)', function(data){
            $.ajax({
                type: 'POST',
                url: "",
                contentType: 'application/json',
                data: JSON.stringify(data.field),
                dataType: 'json',
                beforeSend: function (xhr) {

                },
                complete: function (xhr) {

                },
                success: function (obj) {

                    console.log(obj);
                },
                error: function (obj) {

                    console.log(obj);
                }
            });
            return false;
        });
    });
}