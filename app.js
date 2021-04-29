// Navegation Menu

let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');


let menuContent = document.querySelector('.menu');
var activador = false;



btnMenu.addEventListener('click', (event) => {

  //Icon X
  barIconX.classList.toggle('fa-times');
  

   if(activador){
     menu.style.left = '0%'; 
     menu.style.transition = '0.5s';
  
     activador = false;
   }
   
   else{
    activador = false;
    menu.style.left = '-100%';

    activador = true;
   }
   

});

// Al presionar una opción se cierra el menu

menu.addEventListener('click', (event) => {

  

   if(activador){
     menu.style.left = '0%'; 
     menu.style.transition = '0.5s';
  
     activador = false;
   }
   
   else{
    activador = false;
    menu.style.left = '-100%';

    activador = true;
   }
   

});

// fin al presionar una opción se cierra el menu



window.onscroll = () => {
  
  //Hide & Show - Scroll Menu (Function)
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
  }else{
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;
  
  //Scroll Menu & Go Top & See Down (Styles)
  let arriba = window.pageYOffset;

  //Conditions
  if(arriba <= 600){
    menuContent.style.borderBottom = 'none';

    //Ocultar Go Top
    goTop.style.left = '-100px';
  }else{
    menuContent.style.borderBottom = 'none';

    //Mostrar Go Top
    goTop.style.left = '0px';
  }
  
}
