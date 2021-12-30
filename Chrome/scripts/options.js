var options_host = localStorage.options_host
document.getElementById('options_host').value = options_host;

var options_token = localStorage.options_token
document.getElementById('options_token').value = options_token;

document.getElementById('options_save').onclick = function () {

    localStorage.options_host = document.getElementById('options_host').value;
    localStorage.options_token = document.getElementById('options_token').value;
    alert("保存成功!")
    window.location.href = "/pages/tuchuang.html";
}