$(function(){
    $('.color').click(function(){
        let eltId = $(this).attr('id');
        $('#text').css('color', eltId)
    })
})