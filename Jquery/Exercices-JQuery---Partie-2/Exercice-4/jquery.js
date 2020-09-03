$(function () {
    $('#story').hide()
    $('#submit').click(function () {
        event.preventDefault();
        $('#story').show()
        $('.first-name').text($('#first-name').val())
        $('.last-name').text($('#last-name').val())
        $('.birthday').text($('#birthday').val())
        $('.city-birth').text($('#city-birth').val())
        $('.job').text($('#job').val())
        $('.society').text($('#society').val())
    })
})