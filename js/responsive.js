/* Mobile responsive menu */
let responsiveMenu = {
    menuBtn : document.querySelector(".mobile-header-main-parent-menu"),
    menuCloseBtn : document.querySelector(".close"),
    menu : document.querySelector(".mobile-header-nav-menu"),
    init: function(){
        responsiveMenu.menuBtn.addEventListener("click",function(){
            responsiveMenu.menu.style.right = "0px";
        })
        responsiveMenu.menuCloseBtn.addEventListener("click",function(){
            responsiveMenu.menu.style.right = "-200px";
        })
    }
}
responsiveMenu.init();