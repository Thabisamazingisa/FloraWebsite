var accordion = document.getElementById('accordion');
var trans = document.getElementById('trans')
var accord_class  = accordion.classList

trans.addEventListener('click', ()=>{
    accord_class.toggle('accordion') ;   
})