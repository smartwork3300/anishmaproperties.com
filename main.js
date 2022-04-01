var hidden = document.getElementById('hidden');
var menu = document.getElementById('menu');
window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop) {
        hidden.classList.remove("sticky");

    }
    else {
        hidden.classList.add("sticky");
    }
}



VanillaTilt.init(document.querySelector(".project-list"), {
    max: 35,
    speed: 300
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".project-list"));