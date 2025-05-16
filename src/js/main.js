"use strict";

import "./lib/lib";

document.addEventListener("DOMContentLoaded", () => {
    // Accordion

    $(".accordion").delegate("click", ".accordion-head", function () {
        console.log("Click on .child: ", this);
    });

    // let t = 0;
    // $(".accordion-head").hover(
    //     () => console.log(t++),
    //     () => console.log(t--)
    // );

    // Generic Carousel

    const myCarousel = document.createElement("div");
    myCarousel.classList.add("modal-carousel");

    $(myCarousel).createCarousel({
        images: [
            {
                src: "https://shikimori.one/system/screenshots/original/14ab4a93d712ae28e62481cd89d3bdd8ef4df2eb.jpg?1712767055",
                alt: "anime girl",
            },
            {
                src: "https://shikimori.one/system/screenshots/original/eb043fb026c0ccf012d759210769273c70b357e0.jpg?1712767056",
                alt: "anime girl",
            },
            {
                src: "https://shikimori.one/system/screenshots/original/0a9843c8c5cda1296d2d2d3968dd65af5f74462b.jpg?1712767058",
                alt: "two anime characters",
            },
        ],
        width: "450px",
        height: "300px",
        autoplay: true,
    });

    $(".card-carousel").createCarousel({
        images: [
            {
                src: "https://shikimori.one/system/screenshots/original/14ab4a93d712ae28e62481cd89d3bdd8ef4df2eb.jpg?1712767055",
                alt: "anime girl",
            },
            {
                src: "https://shikimori.one/system/screenshots/original/eb043fb026c0ccf012d759210769273c70b357e0.jpg?1712767056",
                alt: "anime girl",
            },
            {
                src: "https://shikimori.one/system/screenshots/original/0a9843c8c5cda1296d2d2d3968dd65af5f74462b.jpg?1712767058",
                alt: "two anime characters",
            },
        ],
        width: "350px",
        height: "300px",
        autoplay: true,
        stopAutoplayAtEnd: true,
    });

    $(".secondContainer").createCarousel({
        images: [
            {
                src: "https://as1.ftcdn.net/jpg/07/33/90/18/1000_F_733901878_mA9lvDJkhR2RA4Ex8Jlch4Nay1VgKMXc.jpg",
                alt: "some pic",
            },
            {
                src: "https://as1.ftcdn.net/jpg/04/02/64/08/1000_F_402640862_Mg9kbil2AP20CvQBWr9pX99e9xmfCHpP.jpg",
                alt: "some pic",
            },
            {
                src: "https://as1.ftcdn.net/jpg/05/35/43/12/1000_F_535431282_VhH2Uo9QfgdEvRQdxMbwgn70ZIWisCQh.jpg",
                alt: "some pic",
            },
        ],
        autoplay: true,
        duration: 2000,
        width: "700px",
        height: "500px",
        showDots: false,
        showArrows: false,
        stopAutoplayAtEnd: true,
        arrowsOpacity: false,
    });

    // Generic modal-window
    // Add docs

    $(`[data-toggle="modal-aqua"]`).click((e) => {
        if (!document.querySelector(".modal")) {
            $(e.target).createModal({
                text: {
                    title: "Aqua title",
                    body: myCarousel,
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
            });
        }
    });

    $(`[data-toggle="modal-nana"]`).click((e) => {
        if (!document.querySelector(".modal")) {
            $(e.target).createModal({
                text: {
                    title: "Nana",
                    body: "Nana is the nice one!",
                },
                btns: {
                    count: 2,
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
                    ],
                },
            });
        }
    });

    //Hamburger

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

    $(".timer-container").createTimer("2026-04-31");
    // $('.timer').timer('2025-04-31');

    // Theme toggler with custom element

    // $("[data-theme-toggle]").toggleTheme();
});
