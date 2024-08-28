document.addEventListener("DOMContentLoaded", function () {
    var box = document.getElementById("animatedBox");

    function animateBox() {
        box.style.position = "relative";
        var pos = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (pos === 350) {
                clearInterval(id);
            } else {
                pos++;
                box.style.top = pos + "px";
                box.style.left = pos + "px";
            }
        }
    }

    box.addEventListener("click", animateBox);
});
