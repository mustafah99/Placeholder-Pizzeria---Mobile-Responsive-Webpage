$(document).ready(function() {
    $('#menuToggle').click(function() {
        $('#menuId').fadeToggle(500);
    }).on('keyup', function(evt) {
        if(evt.keyCode == 27) {
            $('#menuId').fadeOut(300);
        }
    })
    $('#closeMenu').click(() => {
        $('#menuId').fadeToggle(500);
    })
});