jQuery(document).ready(function () {
    $(".testimonial-carousel").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// country dropdown
// console.clear();

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        dropdown.classList.toggle('dropdown__options--visible')
    })

    dropdown.querySelectorAll('.dropdown__options .dropdown__option').forEach(opt => {
        opt.addEventListener('click', (e) => {
            dropdown.querySelector('.dropdown__selected').innerHTML = opt.innerHTML;
        })
    })
})



document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  });