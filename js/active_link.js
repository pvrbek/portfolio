var container = document.getElementsByClassName("navLinks");

for (let i = 0; i < container.length; i++) {
    container[i].addEventListener("click", function () {
        var current = document.getElementsByClassName(" active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}