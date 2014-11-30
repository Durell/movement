(function() {
    var app = angular.module('skills', []);

    app.controller('KungFuController', function() {
    });
})();

$(document).ready(function() {
    $('div').on('click', 'button', function() {
        $(this).closest('div').find("#all_badges").slideToggle(800, function() {
            $(this).addClass('highlight');
        });
    });
});
