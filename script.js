function convertToUnicode() {
    var chineseInput = document.getElementById('chineseInput').value;
    var unicode = chineseInput.split('').map(function(char) {
        return "U+" + char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0');
    }).join(' ');
    document.getElementById('result').value = unicode;
}

function convertToChinese() {
    var unicodeInput = document.getElementById('unicodeInput').value;
    var chinese = unicodeInput.split(' ').map(function(uni) {
        return String.fromCharCode(parseInt(uni.substring(2), 16));
    }).join('');
    document.getElementById('result').value = chinese;
}

function copyToClipboard() {
    var copyText = document.getElementById("result");
    copyText.select();
    document.execCommand("copy");

    // 创建一个新的提示元素
    var tooltip = document.createElement("div");
    tooltip.innerText = "内容已复制到剪贴板";
    tooltip.id = "copy-tooltip";
    document.body.appendChild(tooltip);

    // 几秒钟后移除提示
    setTimeout(function() {
        tooltip.remove();
    }, 3000); // 2秒后提示消失
}
