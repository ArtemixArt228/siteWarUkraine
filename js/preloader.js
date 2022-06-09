const loader = document.querySelector('#preloader');

const stateCheck = setInterval(() => {
    if(document.readyState === 'complete') {
        const fadeOutEffect = setInterval(() => {
          if (!preloader.style.opacity) {
            preloader.style.opacity = 1;
          }
          if (preloader.style.opacity > 0) {
            preloader.style.opacity -= 0.01;
          } else {
            clearInterval(fadeOutEffect);
            loader.style.display = 'none';
          }
        }, 1);
        
        clearInterval(stateCheck);
    }
});

window.addEventListener('load', stateCheck);