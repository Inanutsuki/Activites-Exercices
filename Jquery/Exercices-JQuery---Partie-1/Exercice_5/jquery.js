$(function(){
    $('input').focus(function(){
        $(this).css('outline', '0').css('border', '1px solid green')
    })
    $('input').blur(function(){
        $(this).css('border', '1px solid red')
    })
})