var message = document.querySelector('#message');
var button = document.querySelector('#button')

document.querySelector('#button').addEventListener('click', tweetar)

function tweetar(event) {
    event.preventDefault();
    var post = document.createElement('p');
    post.innerHTML = message.value;
    document.querySelector('#feed').appendChild(post);
    message.value = "";
}

document.querySelector ('#message').addEventListener("input", caracter);
button.disabled = true;
function maxCaracter() {
    var button = document.querySelector('#button');
    if (message.value ==='' || message.value.length > 140) {
        button.disabled = true;
      } else {
        button.disabled = false;
      }
    }
    function caracter() {
        var max = 140;
        var msg = document.getElementById('message').value.length;
        var counter = max - msg;
        document.getElementById('contagem').innerHTML=counter;
    if (counter > 20){
            message.style.color= "#424242";
        } else if (counter < 21 && counter > 10){
            message.style.color = '#0000FF';
      } else if (counter <= 10 && counter > -1) {
            message.style.color = '#8A0808';
      } else if (counter <= -1){
             message.style.color = '#E6E6E6';
      }
    
    }