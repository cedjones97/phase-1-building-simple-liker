// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const init = () => {
 const article = document.querySelector('.media-post').addEventListener('submit', (e) => {
  e.preventDefault()
 })


}
const modal = document.querySelector('#modal')
modal.className = 'hidden'
const glyph = document.querySelector('.like-glyph')

function handleClick() {
glyph.addEventListener('click', () => {
   mimicServerCall().then(() => {
    if(glyph.innerHTML === EMPTY_HEART){
      glyph.innerHTML = FULL_HEART
    glyph.className = 'activated-heart'
    } else{
      glyph.innerHTML = EMPTY_HEART
    glyph.className = 'like-glyph'
    }
    // if(glyph.className = 'activated-heart'){
    //   return glyph.innerHTML = EMPTY_HEART
    // }
   }).catch((error) => {
    let h2 = document.querySelector('h2') 
    h2.innerHTML = error
    setTimeout( () => {h2.hidden = true}, 3000)
   })
   //<input type="hidden">
})
}handleClick()
//



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
