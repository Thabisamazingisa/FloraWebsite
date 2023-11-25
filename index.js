var accordion = document.getElementById('accordion');
var trans = document.getElementById('trans')
var accord_class  = accordion.classList
var nav = document.getElementById('nav'); 
var lastScrollY = window.scrollY; 

$(window).ready(function (e) {
    let scroll_pos = $(window).scrollTop();
    scroller();
})

$('#to-top').addClass('hide').removeClass('show');

$(window).on("scroll", function () {
    scroller()
});

function scroller() {
    if ($(window).scrollTop() > 100) {
        $('#nav').removeClass('hide-nav').addClass('show-nav').css('background', '#ffff');
        $('#to-top').addClass('show').removeClass('hide');
    } else {
        $('#nav').removeClass('hide-nav').addClass('show-nav').css('background', 'transparent');
        $('#to-top').addClass('hide').removeClass('show');
    }
}


$('#to-top').on('click', function () {
    smoothScroll()

});

$(".nav-link").on('click', function (e) {
    e.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function () {
        window.location.hash = hash;
    });
});

function smoothScroll() {
    $('html, body').animate({
        scrollTop: $('html, body').offset().top,
    }, 800);
    }

// window.addEventListener('scroll', ()=>{
//     if (lastScrollY < window.scrollY){
//         // console.log(lastScrollY)
//         nav.classList.add('hide-nav');
//     }else{
//         nav.classList.remove('hide-nav');
//     }
//     lastScrollY = window.scrollY;
// })

trans.addEventListener('click', ()=>{
    accord_class.toggle('accordion') ;   
})


