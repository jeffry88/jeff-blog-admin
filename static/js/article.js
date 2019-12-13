//新建文章
function add_article() {
    // $(".container-fluid").html("新建文章");
    var title_html = '';
    title_html +=
    '<div class="layui-form-item title-head">'+
    '    <label class="layui-form-label title-label">标题</label>'+
    '    <div class="layui-input-block">'+
    '        <input type="text" name="title" required  lay-verify="required" placeholder="请输入文章标题" autocomplete="off" class="layui-input title-input">'+
    '        <button type="button" class="layui-btn jeff-button">发布</button>'+
    '    </div>'+
    '</div>'+
    '<div class="add-article-body" id="add_article_body"></div>';
    $(".container-fluid").html(title_html);


    var article_add_editor = editormd("add_article_body", {
        width: "100%",
        height:"90%",
        // autoHeight : true,
        markdown: "新建文章",     // dynamic set Markdown text
        path: "../static/vendor/editor.md/lib/" , // Autoload modules mode, codemirror, marked... dependents libs path,
        imageUpload : true,
        imageFormats : [ "jpg", "jpeg", "gif", "png", "bmp", "webp" ]
    });
}

//编辑文章
function article_edit() {
    $(".container-fluid").html("<div id=\"test-editormd\"></div>");
    var editor = editormd("test-editormd", {
        width: "100%",
        height:"100%",
        markdown: "编辑文章",     // dynamic set Markdown text
        path: "../static/vendor/editor.md/lib/" , // Autoload modules mode, codemirror, marked... dependents libs path,
        imageUpload : true,
        imageFormats : [ "jpg", "jpeg", "gif", "png", "bmp", "webp" ]
    });
}
//编辑分类
function article_classification() {
    $(".container-fluid").html("article_classification");
}
