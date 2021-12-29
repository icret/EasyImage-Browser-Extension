$(function () {
    $("#outlink").hide();
    $('#myList a.first-child').tab('show')
})

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

var uploader = new Dropzone(".dropzone",{
    url: "https://img.545141.com/api/index.php",
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

uploader.on("success", function (file, response) {
    bs4pop.notice('上传成功', {type: 'light'});
    var response = JSON.parse(response);
    console.log(response);
    $('#clink').append('[img]' + response.url + "[/img]\r\n");
    $('#blink').append(response.url + "\r\n");
    $('#dlink').append('![](' + response.url + ")\r\n");
    $('#htmllink').append("&lt;img src=\"" + response.url + "\" alt=\"简单图床 - EasyImage\" /&#62;" + "\r\n");
    $('#dellink').append(response.del + "\r\n");
    $("#outlink").show();
});

