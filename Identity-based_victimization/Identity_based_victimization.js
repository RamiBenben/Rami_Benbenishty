document.getElementById("Navigation_Button").onclick = function() {
	var menu = document.getElementsByClassName("Jumping_banner")[0]; // Access the first element
	var content = document.getElementById("Navigation_Button");
	if (menu.style.visibility === "visible") {
		menu.style.visibility = "hidden";
		content.innerHTML = "Navigation";
		content.style.right = "10px";
	} else {
		menu.style.visibility = "visible";
		content.innerHTML = "❌";
		content.style.right = "12%";
	}
};