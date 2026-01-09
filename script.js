var content = document.getElementById("Navigation_Button");
var menu = document.getElementsByClassName("Jumping_banner")[0];
if (content && menu) {
  content.onclick = function() {
    if (menu.style.visibility === "visible") {
      menu.style.visibility = "hidden";
      content.innerHTML = "Navigation";
    } else {
      menu.style.visibility = "visible";
      content.innerHTML = "❌";
    }
  };
}