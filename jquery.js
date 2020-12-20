$(document).ready(function () {
    $('.menuToggle').click(function () {
        $('#menuId').fadeToggle(500);
        $('#contactUs').fadeOut(500);
    }).on('keyup', function (evt) {
        if (evt.keyCode == 27) {
            $('#menuId').fadeOut(300);
        }
    })
    $('#closeMenu').click(() => {
        $('#menuId').fadeToggle(500);
    })

    $('.contactToggle').click(() => {
        $('#contactUs').fadeToggle(500);
    }).on('keyup', function (evt) {
        if (evt.keyCode == 27) {
            $('#contactUs').fadeToggle(300);
        }
    })
    $('#closeContact').click(() => {
        $('#contactUs').fadeToggle(500);
    })

    $('.findUsToggle').click(() => {
        $('#findUs').fadeToggle(500);
        $('#contactUs').fadeOut(500);
    }).on('keyup', function (evt) {
        if (evt.keyCode == 27) {
            $('#findUs').fadeOut(300);
        }
    })

    $('#closeMaps').click(() => {
        $('#findUs').fadeToggle(500);
    })

    $('#icon').click(() => {
        $('.collapsedNavbarIcon').fadeToggle(300);
        $('#iconA').toggleClass('fa-bars');
        $('#iconA').toggleClass('fa-times-circle');
    })

    $('#menuOptions').click(() => {
        $('.menuOptions').fadeToggle(300);
    })
});
