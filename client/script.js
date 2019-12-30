/*function someFunc(){
    alert(document.getElementById("name").value);
    }
    document.getElementById("submit").onclick = someFunc;*/

function valid (form) {
    var fail = false;
    var name = form.name.value;
    var email = form.email.value;
    var password = form.password.value;
    var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
        if(name =="")
            fail = "Введите ваше имя";
        else if(adr_pattern.test(email) == false)
            fail = "Вы ввели ваш Email неправильно";
        else if(password == "")
            fail = "Введите пароль";
        if (fail) {
            alert(fail);
    }
        else
            alert(name + email + password);
            
}

