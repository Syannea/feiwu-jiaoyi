function time() {
	function format(i) { 
		return (i < 10 ? "0" + i : i); 
	} 
	document.getElementById("time").innerHTML = "让字体滚动吧！哈哈哈哈哈哈哈哈哈" 
} 
var interval = setInterval(time, 100);
