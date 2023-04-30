function ddmenu() {
    var menu = document.getElementById("links");
    var more = document.getElementById("more")

    if (menu.style.display === "none") {
        menu.style.display = "block";
        more.style.textAlign = "left";
        more.style.paddingLeft = "40px";
    } 

    else {
        menu.style.display = "none";
        more.style.textAlign = "center";
        more.style.paddingLeft = "0";
    }
}
