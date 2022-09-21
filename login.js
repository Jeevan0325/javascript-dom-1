var birthday = document.getElementById('birthday')
function getAge(birthday) {
    var today = new Date();
    var birthDate = new Date(birthday);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age > 18){
        document.write(alert("success"));
    }
    if(age<18){
        document.write(alert("success"));
    }
}
