//  This identifies the button and listens for a click
document.getElementById('mybutton').addEventListener('click', displayMessage)
//  This sets the background color of the page
document.body.style.backgroundColor = 'lightblue'
//  This changes the color of the text
document.getElementById('title').style.color = 'darkblue'
//  This creates functionality for the button. I made it so that once clicked, it changes text and color. This also notifies the user with a alert once clicked.
//  Extra Work. I added a different font and color once the click me is pressed. This time it changes my name and website title to different sizes and fonts.
function displayMessage () {
  document.getElementById('textone').innerHTML = 'Thank you for clicking!'
  document.getElementById('textone').style.fontSize = '200%'
  document.getElementById('textone').style.color = 'red'
  document.getElementById('mybutton').innerHTML = 'Hello!'
  document.getElementById('response').innerHTML = 'Nash Villarta says...'
//  Extrawork. Here I used style.fontfamily to change the font style. I noticed that it has nearly the same commands as style.css. style.fontsize changes the font and style.color changes the color of text
  document.getElementById('response').style.fontFamily = 'Courier New, monospace'
  document.getElementById('response').style.fontSize = '200%'
  alert('Hello!!!')
}
