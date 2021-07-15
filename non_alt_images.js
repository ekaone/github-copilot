// find images without an alt attribute
// and give them a red border

function nonAltImages() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        if (images[i].alt == "") {
            images[i].style.border = "1px solid red";
        }
    }
}