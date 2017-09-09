window.onload = function() {
    function showPic(whichPicture) {
        var source = whichPicture.getAttribute("href");
        var placeholder = document.getElementById("placeholder");
        placeholder.setAttribute("src", source);
        var text = whichPicture.getAttribute("title") ? whichPicture.getAttribute("title") : "";
        var desc = document.getElementById("description");
        desc.firstChild.nodeValue = text;
    }

    function picEvent() {
        var links = document.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            links[i].onclick = function() {
                showPic(this);
                return false;
            }
        }
    }

    picEvent();
}