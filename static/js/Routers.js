// 页面加载完不会触发 hashchange，这里主动触发一次 hashchange 事件
window.addEventListener('DOMContentLoaded', onLoad);
// 监听路由变化
window.addEventListener('hashchange', onHashChange);

// 路由视图
var routerView = null;

function onLoad () {
    routerView = document.querySelector('#container_fluid');
    onHashChange();
}

// 路由变化时，根据路由渲染对应 UI
function onHashChange () {
    switch (location.hash) {
        case '#/':
            routerView.innerHTML = '<div class="content-body"><h3>博客后台管理系统</h3></div>';
            break;
        case '#/add_article':
            add_article();
            break;
        case '#/edit_article':
            article_edit();
            break;
        case '#/article_classification':
            routerView.innerHTML = 'article_classification';
            break;
        default:
            break;
    }
}

