// var nav = document.getElementById('nav'); 
// var lastScrollY = window.scrollY; 

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
        $('#nav').removeClass('hide-nav').addClass('show-nav').css('background', '#fff');
        $('#to-top').addClass('show').removeClass('hide');
    } else {
        $('#nav').removeClass('hide-nav').addClass('show-nav').css('background', 'transparent');
        $('#to-top').addClass('hide').removeClass('show');
    }
}


$('.faq-qa-cont').on( 'click',function(){
    $(this).find('.faq-answer').slideToggle();
    $(this).find('.faq-question i').toggleClass('icon-rotate');
})


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

const smoothScroll=()=> {
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




