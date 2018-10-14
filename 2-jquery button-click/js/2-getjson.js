const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

const mojPrzycisk = document.getElementById('get');

function pobierzDane(endpoint) {

    //a pomocą jquery i jego wbudowanej funkcji $,getJSON pobieram JSONA z serwera


    $.getJSON(endpoint, function (result) {

        var html = `<p>User ID: ${result.userId}</p> <hr>
<p>User Name: ${result.userName}</p> <hr>
<p>User Url: ${result.userURL}</p>`

        document.getElementById('output').innerHTML = html;

    })

};


mojPrzycisk.addEventListener('click', function () {
    pobierzDane(url);
})
