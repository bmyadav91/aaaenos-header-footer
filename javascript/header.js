const Hamburger = document.querySelector('nav .hamburger');
const MobileNavCont = document.querySelector('nav .mobile_menus_parent');
if(Hamburger && MobileNavCont){
    Hamburger.addEventListener('click', function(){
        MobileNavCont.classList.toggle('active');
    });
}