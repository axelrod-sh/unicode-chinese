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
