var button = document.getElementById('get');
const url = "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl";

button.addEventListener('click', function () {
    pobierzDane("GET", url)

})

function pobierzDane(method, endpoint) {
    // tworze obiekt ajaksowego zapytnia do serwera 
    let httpReq = new XMLHttpRequest();
    // otwieram połączenie ustawiajac metode url
    httpReq.open(method, endpoint);
    // wysyłam request do serwera oraz adres url
    httpReq.send();
    // nasłuchuję zdarzenia readystatechange
    httpReq.addEventListener('readystatechange', function () {

        // sprawdzam zapytania
        if (httpReq.readyState == 4 && httpReq.status == 200) {
//            let data = JSON.parse(httpReq.responseText);
            // jeśli status i readystate są odpowiednie, pobieram dane i konwertuje je na JSON
            var data = JSON.parse(httpReq.responseText);

            // tworze strukture html na strone

            let html = `<p>User ID: ${data.userId}</p> <hr>
<p>User Name: ${data.userName}</p> <hr>
<p>User Url: ${data.userURL}</p>`;
            document.getElementById('output').innerHTML = html;
        }

    });
    
}