// 将存储的数据输出到前台
chrome.storage.local.get(["options_host", "options_token"], function (data) {
  if (data.options_host) {
    document.getElementById("options_host").value = data.options_host;
  }
  if (data.options_token) {
    document.getElementById("options_token").value = data.options_token;
  }
});

// 将数据存储
document.getElementById("options_save").onclick = function () {
  var host = document.getElementById("options_host").value;
  var token = document.getElementById("options_token").value;

  chrome.storage.local.set(
    {
      options_host: host,
      options_token: token,
    },
    function () {
      alert("保存成功!");
      // window.location.href = "/pages/tuchuang.html";   // 跳转
      window.open("about:blank", "_self").close(); // 关闭当前页
    },
  );
};
/** 屏蔽右键菜单
document.oncontextmenu = function () {
    return false;
}
*/
