

const buttonSubmit = document.getElementById('submit');

buttonSubmit.addEventListener('click', function(){
    var age = document.getElementById('age').value;
    if (age >= 18) {
        alert('Vous etes majeur');
    }else{
        alert("Vous n'etes pas majeur")
    }
})