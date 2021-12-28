jQuery('document').ready(function ($) {
    var menuBtn = $('.menu-icon'),
        menu = $('.navigation ul');
    menuBtn.click(function () {
        if (menu.hasClass('show')) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    })
});

const currentLocation = location.href;
const menuItem = document.querySelectorAll('ul li a');
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active"
    }
}
