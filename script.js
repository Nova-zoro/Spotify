const Play      = document.getElementById('play/pause');
const Music     = document.querySelector('audio');
const Image     = document.querySelector('img');
var IsPlaying   = false;


const Playin = () =>{
 Play.addEventListener('click' , ()=>{
   IsPlaying = true;
   Music.play();
   Play.classList.replace('fa-play' , 'fa-pause');
   Image.classList.add('anime');
 })
};
const Pause = () =>{
   IsPlaying  = false;
   Play.addEventListener('click' , () => {
   Music.pause();
   Play.classList.replace('fa-pause','fa-play');
   Image.classList.remove('anime');
 } )
}
Play.addEventListener('click' , () => {
  IsPlaying ? Pause() : Playin()
}) 