window.addEventListener('keydown',(e)=>{
  const music = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.box[data-key="${e.keyCode}"]`)
  if(!music) return;
  key.classList.add("playing");
  music.currentTime=0
  music.play()
})

let keys = document.querySelectorAll('.box')
keys.forEach( key=> key.addEventListener('transitionend',(e)=>{
    if(e.propertyName!='transform')
    return;
    e.target.classList.remove("playing");
}))