jQuery(document).ready(function () {
    $(".testimonial-carousel").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        autoplay: false,
    });
});

function setCountry(code) {
    if (code || code == '') {
        var text = jQuery('a[cunt_code="' + code + '"]').html();
        $(".dropdown-country dt a span").html(text);
    }
}
$(document).ready(function () {
    $(".dropdown-country img.flag").addClass("flagvisibility");

    $(".dropdown-country dt a").click(function () {
        $(".dropdown-country dd ul").toggle();
    });

    $(".dropdown-country dd ul li a").click(function () {
        //console.log($(this).html())
        var text = $(this).html();
        $(".dropdown-country dt a span").html(text);
        $(".dropdown-country dd ul").hide();
        $("#result").html("Selected value is: " + getSelectedValue("country-select"));
    });

    function getSelectedValue(id) {
        //console.log(id,$("#" + id).find("dt a span.value").html())
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown"))
            $(".dropdown-country dd ul").hide();
    });


    $("#flagSwitcher").click(function () {
        $(".dropdown-country img.flag").toggleClass("flagvisibility");
    });
});



// country slect box
const wrapper = document.querySelector(".wrapper"),
    selectBtn = wrapper.querySelector(".select-btn"),
    searchInp = wrapper.querySelector("input"),
    options = wrapper.querySelector(".options");

let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
    "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
    "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
    "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
    "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    searchInp.value = "";
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));