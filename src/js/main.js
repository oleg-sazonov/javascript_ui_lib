"use strict";

import "./lib/lib";

document.addEventListener("DOMContentLoaded", () => {
    // Accordion

    $(".accordion").delegate("click", ".accordion-head", function () {
        console.log("Click on .child: ", this);
    });

    let t = 0;
    $(".accordion-head").hover(
        () => console.log(t++),
        () => console.log(t--)
    );

    // Generic Carousel

    $().createCarousel({
        images: [
            "https://as1.ftcdn.net/jpg/07/33/90/18/1000_F_733901878_mA9lvDJkhR2RA4Ex8Jlch4Nay1VgKMXc.jpg",
            "https://as1.ftcdn.net/jpg/04/02/64/08/1000_F_402640862_Mg9kbil2AP20CvQBWr9pX99e9xmfCHpP.jpg",
            "https://as1.ftcdn.net/jpg/05/35/43/12/1000_F_535431282_VhH2Uo9QfgdEvRQdxMbwgn70ZIWisCQh.jpg",
        ],
        autoplay: true,
        duration: 2000,
        containerSelector: ".secondContainer",
        sliderId: "secondCarousel",
        carouselWidth: "700px",
        showDots: false,
        showArrows: true,
        stopAutoplayAtEnd: false,
        arrowsOpacity: false,
    });

    $("nav")
        .createHamburger()
        .display("block")
        .click(() => $(".hamburger").toggleClass("hamburger_active"));

    // Create scrollUpBtn inside selector and then use its functionality
    $(".container").createScrollUpBtn().smoothScrollUp();

    $("#first").click(() => {
        $(".w-500px").eq(0).fadeToggleLeft(900);
    });

    $('[data-count="second"]').click(() => {
        $(".w-500px").eq(1).fadeToggleRight(900);
    });

    $(".btn-warning").click(() => {
        $(".w-500px").fadeToggle(900);
    });

    $("#trigger").click(() =>
        $("#trigger").createModal({
            text: {
                title: "Modal title",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque a temporibus perspiciatis quos vero, labore sed aspernatur aut est eaque blanditiis officia repudiandae culpa vel, nemo quis quisquam soluta nesciunt?",
            },
            btns: {
                count: 3,
                settings: [
                    ["Close", ["btn-danger", "mr-10"], true],
                    [
                        "Save changes",
                        ["btn-success"],
                        false,
                        () => {
                            alert("Data has saved");
                        },
                    ],
                    [
                        "Like",
                        ["btn-primary", "ml-10"],
                        false,
                        () => {
                            alert("Liked");
                        },
                    ],
                ],
            },
        })
    );

    // Get request

    $()
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => console.log(res));

    // 1) First arg is scrollOffset; Second arg is upSelector; No one of args is required
    // 2) I can change styles of SVG using '.svg-wrapper'
    // $('.scroll-arrow').smoothScrollUp(900);

    // console.log($('form').containsClass('form').clearClasses().addClass('newForm'));

    // $('form').clearClasses().addClass('newFormeddd').addClass().toggleClass('form').removeClass('newFormeddd');

    console.log(
        $("form")
            .clearClasses()
            .addClass("newFormeddd", "form", "gambler")
            .addClass()
            .hasClasses("newFormeddd", "gamblers")
    );

    // I need to include jsdoc!!!!!!!!!!

    // Should I add to my UI JS Lib module with methods which will create DOM-elements?

    // $('.form').filterChildren('.form__group');

    console.log($(".form").filterChildren(".form__group"));
    console.log($(".form__group").siblings());

    const newFormGroup = document.createElement("div");
    newFormGroup.classList.add("form__group");

    console.log(newFormGroup);

    // $('.form').append('<div class="form__group"></div>');
    $(".form").append(newFormGroup);

    // $('.form__group').siblings();

    $(".form").addAttr("data-submit", "true");

    console.log($(".form").getAttrValue("data-submit"));

    console.log($(".form").hasAttr());

    $(".form").toggleAttr("data-set", "true");

    $(".form").toggleAttr("data-set");

    // $('nav').createHamburger() returns .hamburger
    // $('nav').createHamburger().fadeIn(500).click(() => $('.hamburger').toggleClass('hamburger_active'));

    // console.log($('nav').createHamburger());

    // $('.hamburger').fadeIn(500).click(() => $('.hamburger').toggleClass('hamburger_active'));

    console.log($(".form").isVisible());
    $(".form").display("flex");

    $(".tab-item").one("click", function () {
        console.log("Click on .tab-item: ", this);
    });

    //Timer

    $(".timer-container").createTimer("2025-04-31");
    // $('.timer').timer('2025-04-31');

    // Theme toggler with custom element

    // $("[data-theme-toggle]").toggleTheme();
});
