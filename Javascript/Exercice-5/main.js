const buttonSubmit = document.getElementById('submit');

buttonSubmit.addEventListener('click', function(sum) {
    var firstNumber = document.getElementById('first-number').value;
    var secondNumber = document.getElementById('second-number').value;
    alert(Math.floor(firstNumber)*secondNumber);
});