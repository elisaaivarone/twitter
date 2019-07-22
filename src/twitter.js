const MAX_LENGTH = 140;
const twitterText = document.querySelector('#twitterText');
const button = document.querySelector('#button');
const twitterPost = document.querySelector('#twitterPost')
const twitterCount = document.querySelector('#twitterCount')

button.addEventListener('click', tweet);
function tweet(event) {
  event.preventDefault();
  const newpost = document.createElement('li');
  const date =  new Date().toTimeString().substring(0,5);
  const textWithEnters = twitterText.value.replace(/\n/g, '<BR>');
  newpost.innerHTML = '[' + date +'] ' + textWithEnters;
  twitterPost.appendChild(newpost);
  twitterText.value = '';
  colorCounter();
}

twitterText.addEventListener('keyup', colorCounter);
function disabledButton() {
  const countValue = MAX_LENGTH - twitterText.value.length;
  twitterCount.textContent = countValue;
  if(countValue === MAX_LENGTH || countValue < 0) {
    button.setAttribute('disabled', '')
  }else {
    button.removeAttribute('disabled')
  }
}

function colorCounter(event) {
  disabledButton();
  if(twitterText.value.length > 130) {
    twitterCount.setAttribute('class', 'red');
  }else if(twitterText.value.length > 120) {
    twitterCount.setAttribute('class', 'yellow')
    }else {
      twitterCount.setAttribute('class', 'black');
    }
  const lines = twitterText.value.split('\n');
    twitterText.setAttribute('rows', lines.length); 
}



