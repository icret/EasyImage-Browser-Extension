// 上传完毕后显示链接
$(function () {
    $("#outlink").hide();
    $('#myList a.first-child').tab('show')
})

// 动态修改action
var options_host = localStorage.options_host
document.getElementById('EasyImage').action = options_host;

// 如果API网站为空
if (!options_host) {
    alert('请初始化配置再上传!');
    window.location.href = "/pages/options.html";
}
// 如果Token为空
var options_token = localStorage.options_token
if (!options_token) {
    alert('请初始化配置再上传!');
    window.location.href = "/pages/options.html";
}

// 将token赋值
document.getElementById('apiToken').value = options_token;

// 复制
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    bs4pop.notice('复制成功', {type: 'success'})
    e.clearSelection();
});

clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
    bs4pop.notice('复制失败', {type: 'danger'});
});

// uploader上传控制
var uploader = new Dropzone(".dropzone", {

    // 读取已经存储的API网址,如果不存在则使用默认的
    url: options_host,
    paramName: 'image',
    // uploadMultiple: true,
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    forceFallback: false,
    withCredentials: true,
    // maxFilesize: 5, 最大上传限制
    parallelUploads: 20,
    dictDefaultMessage: "<button type=\"button\" class=\"btn btn-primary\">点击这里选择本机图片</button><br>或者<br>拖拽/黏贴您的文件到这里",
    dictFallbackMessage: "您的浏览器不支持拖拽......",
    dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
    dictFileTooBig: "你传的玩意有 {{filesize}}MiB这么大.但是我就允许你传: {{maxFilesize}}MiB.",
    dictInvalidFileType: "你不能上传这个文件类型.......",
    dictResponseError: "服务器返回 {{statusCode}} 代码.",
    dictCancelUpload: "取消上传",
    dictCancelUploadConfirmation: "你确认取消上传吗?",
    dictRemoveFile: "删除图片",
    dictMaxFilesExceeded: "您不能上传更多啦......",
})

// 修复 “Dropzone already attached” error
Dropzone.autoDiscover = false;

// 上传成功
uploader.on("success", function (file, response) {
    // var response = JSON.parse(response)
    console.log(response);

    if (response.code == 200) {
        //上传成功
        bs4pop.notice('上传成功', {type: 'light'});

        $('#clink').append('[img]' + response.url + "[/img]\r\n");
        $('#blink').append(response.url + "\r\n");
        $('#dlink').append('![简单图床 - EasyImage](' + response.url + ")\r\n");
        $('#htmllink').append("&lt;img src=\"" + response.url + "\" alt=\"简单图床 - EasyImage\" /&#62;" + "\r\n");
        $('#dellink').append(response.del + "\r\n");
        $("#outlink").show();

    } else {
        // 上传失败
        bs4pop.notice('上传失败：' + response.message, {type: 'danger'});
    }
});

// console
console.log("%cEasyImage2.0", "background: rgba(252,234,187,1);background: -moz-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%,rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -webkit-gradient(left top, right top, color-stop(0%, rgba(252,234,187,1)), color-stop(12%, rgba(175,250,77,1)), color-stop(28%, rgba(0,247,49,1)), color-stop(39%, rgba(0,210,247,1)), color-stop(51%, rgba(0,189,247,1)), color-stop(64%, rgba(133,108,217,1)), color-stop(78%, rgba(177,0,247,1)), color-stop(87%, rgba(247,0,189,1)), color-stop(100%, rgba(245,22,52,1)));background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -o-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: -ms-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);background: linear-gradient(to right, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#f51634', GradientType=1 );font-size:2.34em;font-weight:bold")
console.log('%c图床演示网站: https://png.cm \n请为本人博客 https://blog.png.cm/ 加上链接, 谢谢尊重!\n作为开发者你可以对相应的后台功能进行扩展(增删改相应代码), 但请保留代码中相关来源信息(例如: 本人博客, 邮箱等);\n本程序由 Icret 独自开发并完全开源, 碰到收费发布的请不要轻易付款; 本人仅为程序开源创作, 如非法网站使用与本人无关, 请勿用于非法用途.%c ', 'color: #eaad1a; padding:5px 0; border:1px solid #448ef6; font-size:12px;', '');
