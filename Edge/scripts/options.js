// 将存储的数据输出到前台
var options_host = localStorage.options_host
document.getElementById('options_host').value = options_host;

var options_token = localStorage.options_token
document.getElementById('options_token').value = options_token;

// 将数据存储
document.getElementById('options_save').onclick = function () {

    localStorage.options_host = document.getElementById('options_host').value;
    localStorage.options_token = document.getElementById('options_token').value;
    alert("保存成功!")
    window.location.href = "/pages/tuchuang.html";
}
/** 屏蔽右键菜单
document.oncontextmenu = function () {
    return false;
}
*/