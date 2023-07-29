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