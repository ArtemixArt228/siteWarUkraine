const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};

if(isMobile.any()) {
    document.body.classList.add('_touch');
    
    let menuArrows = document.querySelectorAll('.menu-arrow');
    if(menuArrows.length > 0) {
        menuArrows.forEach((menuArrow) => {
           menuArrow.addEventListener('click', function(event) {
              menuArrow.parentElement.classList.toggle('_active'); 
           }); 
        });
    }
} else {
    document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-body');
if(iconMenu) {
    iconMenu.addEventListener('click', function(event) {
        document.body.classList.toggle('_lock');
        
        menuBody.classList.toggle('_active');
        iconMenu.classList.toggle('_active');
    });
}
