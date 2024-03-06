
function adjustLayout() {
    
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var loginContainer = document.querySelector('.login-container');
    var backgroundImage = document.querySelector('.background-image');

  

    loginContainer.style.width = containerWidth + 'px';
    loginContainer.style.top = containerTop + 'px';
    loginContainer.style.left = containerLeft + 'px';

    backgroundImage.style.width = windowWidth + 'px';
    backgroundImage.style.height = windowHeight + 'px';
}


adjustLayout();
window.addEventListener('resize', adjustLayout);
