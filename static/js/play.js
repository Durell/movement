$(document).ready(function() {
    $('.hideme').on("click", "button", function() {
        $(this).closest('div').find('.more').slideToggle();
    });
})
