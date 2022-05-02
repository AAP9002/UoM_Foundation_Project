window.onscroll = function () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("bar").style.width = scrolled + "%";
};


function ToggleCollapsable(objectSelected) {
    objectSelected.classList.toggle("active");
    var content = objectSelected.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

function ToggleMobileNAV() {
    var MobileNav = document.getElementById("MobileNav");
    if (MobileNav.style.maxHeight) {
        MobileNav.style.maxHeight = null;
    } else {
        MobileNav.style.maxHeight = MobileNav.scrollHeight + "px";
    }
}