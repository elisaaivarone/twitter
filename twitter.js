var message = document.querySelector('#message');
document.getElementById('button').addEventListener('click', tweetar)

function tweetar(event) {
    event.preventDefault();
  var paragraph=document.createElement('p');
  paragraph.innerHTML = message.value;
  document.getElementById('feed').appendChild(paragraph);
  message.value="";
  }

