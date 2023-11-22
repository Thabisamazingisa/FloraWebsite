var accordion = document.getElementById('accordion');
var trans = document.getElementById('trans')
var accord_class  = accordion.classList
var nav = document.getElementById('nav'); 
var lastScrollY = window.scrollY; 


window.addEventListener('scroll', ()=>{
    if (lastScrollY < window.scrollY){
        // console.log(lastScrollY)
        nav.classList.add('hide-nav');
    }else{
        nav.classList.remove('hide-nav');
    }
    lastScrollY = window.scrollY;
})

trans.addEventListener('click', ()=>{
    accord_class.toggle('accordion') ;   
})


