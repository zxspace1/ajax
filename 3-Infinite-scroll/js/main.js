const url = "https://jsonplaceholder.typicode.com/users";
const output = document.querySelector('ul');

function ajax(method, endpoint) {
    let httpReq = new XMLHttpRequest();
    httpReq.open(method,endpoint);
    httpReq.send();

    httpReq.addEventListener('readystatechange',function(){


        if(httpReq.readyState == 4 && httpReq.status == 200) {
            let data = JSON.parse(httpReq.responseText);
            console.log(data);
            data.forEach(function(elem, index){
               let html = `${elem.id} ${elem.name} ${elem.username} ${elem.email}`;
                let wezel = document.createElement('li');
                wezel.innerHTML = html;
                output.appendChild(wezel);
            });
        }
    });   
}


window.addEventListener('scroll', function(){
    if(document.documentElement.offsetHeight == document.documentElement.scrollTop + window.innerHeight){
        console.log('przewinStrone');
        ajax('GET', url);
    }
});




















