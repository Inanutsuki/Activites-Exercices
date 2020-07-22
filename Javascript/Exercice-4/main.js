const buttonSubmit = document.getElementById('submit');




buttonSubmit.addEventListener('click', function(form) {
    var lastName = document.getElementById('lastname').value;
    var firstName = document.getElementById('firstname').value;
    var city = document.getElementById('city').value;
    alert(lastName +"\n"+ firstName +"\n"+ city);
});