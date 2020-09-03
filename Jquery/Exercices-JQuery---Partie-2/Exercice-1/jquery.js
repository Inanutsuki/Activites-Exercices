$(function () {
    $('body').append('<ul id="list"></ul>');
    $('#list').css('list-style-type', 'none')
    $('#list').append('<li><button class="btn" id="1">pierre</button></li>');
    $('#list').append('<li><button class="btn" id="2">feuille</button></li>');
    $('#list').append('<li><button class="btn" id="3">ciseaux</button></li>');
    $('body').append('<button id="submit">Shifumi</button>')
    $('.btn').css('margin', '5px');
    $('body').append(`<p>resultat : </p><p id='result'></p>`)

    let player;
    let computer;
    $('.btn').each(function () {
        $(this).click(function () {
            player = $(this).text();
        })
    })

    let shifumiObj = {
        'pierre': {
            'ciseaux': true,
            'feuille': false
        },
        'feuille': {
            'pierre': true,
            'ciseaux': false
        },
        'ciseaux': {
            'feuille': true,
            'pierre': false
        }
    }

    function shifumi() {
        let randomNumber = Math.floor((Math.random() * 3) + 1);
        computer = $(`#${randomNumber}`).text();
        console.log(computer)
        if (player == computer) {
            $('#result').text('égalité')
        } else if(shifumiObj[player][computer] == true) {
            $('#result').text('tu as gagné')
        }else{
            $('#result').text('tu as perdu')
        }
    }
    $('#submit').click(shifumi)
})