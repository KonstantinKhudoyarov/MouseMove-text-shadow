'use strict'

let TextShadow = (function(){
  
  const eventSpace = document.querySelector('.intro');
  const title = eventSpace.querySelector('.title');
  const step = 20;
  
  function shadowUpdate(e) {
    const {offsetWidth: width, offsetHeight: height} = eventSpace;
    let {offsetX: x, offsetY: y} = e;
    
    if(this !== e.target) {
      x += e.target.offsetLeft;
      y += e.target.offsetTop;
    }
    
    const xStep = Math.round((x / width * step) - (step / 2));
    const yStep = Math.round((y / height * step) - (step / 2));
    
    title.style.textShadow = `${xStep}px ${yStep}px 0 rgba(255,0,255, .5)`;
    
  }
  
  return {
    eventSpace: eventSpace,
    shadowUpdate: shadowUpdate
  }
  
})();

TextShadow.eventSpace.addEventListener('mousemove', TextShadow.shadowUpdate);