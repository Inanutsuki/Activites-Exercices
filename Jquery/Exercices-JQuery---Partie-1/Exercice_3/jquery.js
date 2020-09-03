$(function () {
    $('#hide').hide();
    $('#text').hide();
    $('#show').click(function () {
        $('#text').show();
        $('#hide').show();
        $('#show').hide();
    })
    $('#hide').click(function () {
        $('#text').hide();
        $('#show').show();
        $('#hide').hide();
    })
})