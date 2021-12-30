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


// 复制
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function (e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    bs4pop.notice('复制成功', { type: 'success' })
    e.clearSelection();
});

clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
    bs4pop.notice('复制失败', { type: 'danger' });
});

var uploader = new Dropzone(".dropzone", {

    // 读取已经存储的API网址，如果不存在则使用默认的
    url: options_host,
    paramName: 'image',
    // uploadMultiple: true,
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    forceFallback: false,
    withCredentials: true,
    maxFilesize: 5,
    parallelUploads: 20,
    dictDefaultMessage: "<button type=\"button\" class=\"btn btn-primary\">点击这里选择本机图片</button><br>或者<br>拖拽/黏贴您的文件到这里",
    dictFallbackMessage: "您的浏览器不支持拖拽......",
    dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
    dictFileTooBig: "你传的玩意有 ({{filesize}}MiB)这么大.但是我就允许你传: {{maxFilesize}}MiB.",
    dictInvalidFileType: "你不能上传这个文件类型.......",
    dictResponseError: "服务器返回 {{statusCode}} 代码.",
    dictCancelUpload: "取消上传",
    dictCancelUploadConfirmation: "你确认取消上传吗?",
    dictRemoveFile: "删除图片",
    dictMaxFilesExceeded: "您不能上传更多啦......",
})

// 修复 “Dropzone already attached” error
Dropzone.autoDiscover = false;

uploader.on("success", function (file, response) {
    bs4pop.notice('上传成功', { type: 'light' });
    var response = JSON.parse(response);
    console.log(response);
    $('#clink').append('[img]' + response.url + "[/img]\r\n");
    $('#blink').append(response.url + "\r\n");
    $('#dlink').append('![简单图床 - EasyImage](' + response.url + ")\r\n");
    $('#htmllink').append("&lt;img src=\"" + response.url + "\" alt=\"简单图床 - EasyImage\" /&#62;" + "\r\n");
    $('#dellink').append(response.del + "\r\n");
    $("#outlink").show();
});

