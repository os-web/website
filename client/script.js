/*function someFunc(){
    alert(document.getElementById("name").value);
    }
    document.getElementById("submit").onclick = someFunc;*/

    
    $( document ).ready(function() {
        $('.vote').on ('click', function(){
    
            $(this).addClass('active');
    
            var parent = $(this).parent().parent().parent().parent();
            var commentCountElement = parent.find('.commentscount');
            var ratingValueElement = parent.find('.ratingvalue');
            var votedValue = parseInt($(this).attr('data-score'));
    
            parent.addClass('voted');
    
            var commentCount = parseInt(commentCountElement.text());
            commentCountElement.text(commentCount + 1);
    
            var rating = parseFloat(ratingValueElement.text());
            rating = (commentCount * rating + votedValue)/(commentCount + 1);
            ratingValueElement.text(rating.toFixed(2));
    
            console.log('AJAX запрос примет значение ' + votedValue);
        })
    })

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

