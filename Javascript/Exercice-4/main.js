const buttonSubmit = document.getElementById('submit');




buttonSubmit.addEventListener('click', function(form) {
    var lastName = document.querySelector('label[for="lastname"]').textContent + document.getElementById('lastname').value;
    var firstName = document.querySelector('label[for="firstname"]').textContent + document.getElementById('firstname').value;
    var city = document.querySelector('label[for="city"]').textContent + document.getElementById('city').value;
    
    // var iln = document.getElementById('infoLastName');
    // var infoLastName = iln.textContent;

    // var infoLastName = document.querySelector('label[for="lastname"]').textContent;

    // var firstName = document.getElementById('firstname').value;
    // var ifn = document.getElementById('infoFirstName');
    // var infoFirstName = ifn.textContent;

    // var city = document.getElementById('city').value;
    // var ic = document.getElementById('infoCity');
    // var infoCity = ic.innerText;

    alert(lastName+"\n"+firstName+"\n"+city);
});




//infoLastName+lastName+"\n"+infoFirstName+firstName+"\n"+infoCity+city