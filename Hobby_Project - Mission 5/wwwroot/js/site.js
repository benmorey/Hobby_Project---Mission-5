// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#calculateButton').click(function () {
        var hours = parseFloat($('#hours').val());
        var tip = parseFloat($('#tip').val());

        if (isNaN(hours)) {
            $('#totalCost').text("Please enter valid numbers");
        } else {
            var totalCost = (hours * 20.50) + tip;
            $('#totalCost').text('$' + totalCost.toFixed(2));
        }
    });
});
