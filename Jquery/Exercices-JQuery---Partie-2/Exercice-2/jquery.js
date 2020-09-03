$(function () {
    $('#resultat').hide()
    $('#submit').click(function () {
        event.preventDefault()
        let moyenne = 0;
        $('#form input').each(function () {
            let note = Number($(this).val());
            moyenne += note;
        })
        let noteFinale = (moyenne/5)
        $('#moyenne').text((noteFinale).toFixed(2));
        if (isNaN(noteFinale)) {
            alert('Veuillez renseigner tous les champs par des nombres.')
            $('#resultat').hide()
        } else if (noteFinale < 10) {
            $('#appreciation').text('En dessous de la moyenne')
        } else if (noteFinale >= 10 && noteFinale < 13) {
            $('#appreciation').text('Moyen')
        } else if (noteFinale >= 13 && noteFinale < 16) {
            $('#appreciation').text('Bien')
        } else if (noteFinale >= 16 && noteFinale < 20) {
            $('#appreciation').text('Très bien')
        } else if (noteFinale >= 20) {
            $('#appreciation').text('Excellent')
        }
        $('#resultat').show()
    })
})