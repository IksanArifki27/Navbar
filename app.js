const navSlide = () =>  {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
burger.addEventListener('click', () => {
    //toggle nav
    nav.classList.toggle('nav-active');
  
    //burgeranimation
    burger.classList.toggle('toggle');

    });

}

navSlide();
