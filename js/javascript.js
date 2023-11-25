
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("scroll-down").style.display = 'none';

        document.querySelector(".aboutme").style.visibility = 'visible';
        document.querySelector(".aboutme").style.animation = 'fade-in 1.5s';
    } 
    else if (document.documentElement.scrollTop < 50) {     
        document.querySelector(".aboutme").style.visibility = 'hidden';
        document.querySelector(".aboutme").style.animation = 'fade-out 1.5s';
        document.getElementById("scroll-down").style.display = 'block';
        
    }

    if (document.documentElement.scrollTop > 500) {
        document.querySelector(".icons").style.visibility = 'visible';
        document.querySelector(".icons").style.animation = 'fade-in 2.5s';
    } 
    else {
        document.querySelector(".icons").style.animation = 'fade-out 2.5s';
        document.querySelector(".icons").style.visibility = 'hidden';
    }

    if (document.documentElement.scrollTop > 200 && screen.width < 800) {
        document.querySelector(".header").style.visibility = 'visible';
        document.querySelector(".header").style.animation = 'fade-in 1s';
    } 
    else if (document.documentElement.scrollTop > 450) {
        document.querySelector(".header").style.visibility = 'visible';
        document.querySelector(".header").style.animation = 'fade-in 1s';
    } 
    else {     
        document.querySelector(".header").style.animation = 'fade-out 1s';
        document.querySelector(".header").style.visibility = 'hidden';
    }
}