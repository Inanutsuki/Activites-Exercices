$(function(){
    $('.color').mouseover(function(){
        let eltId = $(this).attr('id');
        $('#text').css('color', eltId);
    })
    $('.color').mouseout(function(){
        $('#text').css('color', 'black');
    })
})