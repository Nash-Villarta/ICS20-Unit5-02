//  This identifies the button and listens for a click
document.getElementById('mybutton').addEventListener('click', displayMessage)
//  This sets the background color of the page
document.body.style.backgroundColor = 'lightblue'
//  This changes the color of the text
document.getElementById('title').style.color = 'darkblue'
//  This creates functionality for the button. I made it so that once clicked, it changes text and color. This also notifies the user with a alert once clicked.
function displayMessage () {
  document.getElementById('textone').innerHTML = 'Thank you for clicking!'
  document.getElementById('textone').style.color = 'red'
  document.getElementById('mybutton').innerHTML = 'Hello!'
  document.getElementById('response').innerHTML = 'Nash Villarta says...'
  alert('Hello!!!')
}
