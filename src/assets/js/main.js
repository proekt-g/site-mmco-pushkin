$(window).on("load", () => {
    // variables
    // /variables
    // ----------------------------------------------
    // universal function
    function ajaxRequest(ajaxForm, url) {
        event.preventDefault()
        $.ajax({
            url: url,
            type: "POST",
            dataType: "html",
            data: $("." + ajaxForm).serialize(), // Сеарилизуем объект
            success: function (response) {
                //Данные отправлены успешно
                let result = $.parseJSON(response)
                console.log(result)
            },
            error: function (response) {
                // Данные не отправлены
                alert("Ошибка. Данные не отправлены.")
            },
        })
    }
    function scrollEmulation() {
        let documentWidth = parseInt(document.documentElement.clientWidth)
        let windowsWidth = parseInt(window.innerWidth)
        let scrollbarWidth = windowsWidth - documentWidth
        $("body").css({ "padding-right": `${scrollbarWidth}px` })
        $("body").toggleClass("block")
    }
    function toggleModal(e) {
        scrollEmulation()
        $(".modal-overlay").toggleClass(`modal-overlay--active`)
        $(`.modal__${$(e.target).data("modal")}`).toggleClass(`modal--active`)
    }
    function closeModal() {
        scrollEmulation()
        $(".modal-overlay").removeClass("modal-overlay--active")
        $(".modal").removeClass("modal--active")
    }
    //  /universal function
    // ----------------------------------------------
    // event
    $('a[href^="#"]').on("click", function (event) {
        if (String(this).slice(-1) !== "#") {
            event.preventDefault()
            let sc = $(this).attr("href"),
                dn = $(sc).offset().top
            $("html, body").animate({ scrollTop: dn }, 1000)
        }
    })
    // Форма блока
    $(".program__form").on(
        "change",
        ajaxRequest.bind(null, "program__form", "test.php")
    )
    // /Форма блока
    // Форма модального окна (со спикерами)
    $(".modal__team-form").on(
        "change",
        ajaxRequest.bind(null, "modal__team-form", "test.php")
    )
    // /Форма модального окна (со спикерами)
    $(".menu__burger").on("click", () => {
        $(".menu").toggleClass("menu--open")
        $("body").toggleClass("block")
    })
    $(".menu__desktop-element").on("click", () => {
        $(".menu").removeClass("menu--open")
        if ($(window).width() <= 1200) $("body").toggleClass("block")
    })
    $(".head__link").on("click", toggleModal)
    $(".modal__close").on("click", closeModal)
    $(".modal-overlay").on("click", (e) => {
        if ($(e.target).hasClass("modal-overlay--active")) closeModal()
    })
    $(".box__more").on("click", toggleModal)
    $(".team__more").on("click", toggleModal)
    $(".program__input").on("change", (e) => {
        $(".program__label").removeClass("program__label--active")
        $(e.target).parent(".program__label").addClass("program__label--active")
    })
    $(".program__card-read").on("click", toggleMoreTextCard)
    $(".program__card-note-close").on("click", toggleMoreTextCard)
    $(".program__card-speaker-avatar").on("focus", toggleModalInfoAvatar)
    $(".program__card-moder-avatar").on("focus", toggleModalInfoAvatar)
    $(".program__card-speaker-avatar").on("blur", toggleModalInfoAvatar)
    $(".program__card-moder-avatar").on("blur", toggleModalInfoAvatar)
    $(".program__button").on("click", () => {
        $(".program__cards-hidden").slideDown(400)
    })
    // /event
    // ----------------------------------------------
    // unique function
    function toggleModalInfoAvatar() {
        $(this)
            .parents(".program__card")
            .find(".program__card-modal-avatar-img")
            .attr("src", $(this).find(".program__card-img").attr("src"))
        $(this)
            .parents(".program__card")
            .find(".program__card-modal-name")
            .text($(this).data("avatarName"))
        $(this)
            .parents(".program__card")
            .find(".program__card-modal-text")
            .text($(this).data("avatarInfo"))
        $(this)
            .parents(".program__card")
            .find(".program__card-modal")
            .toggleClass("program__card-modal--active")
        $(this)
            .find(".program__card-img")
            .toggleClass("program__card-img--hidden")
    }
    function toggleMoreTextCard() {
        $(this)
            .parents(".program__card")
            .children(".program__card-note")
            .toggleClass("program__card-note--active")
    }
    // /unique function
    // ----------------------------------------------
    // Page load
    if ($(window).width() >= 900) {
        OverlayScrollbars(
            document.querySelectorAll(".program__card-note-text"),
            {}
        )
    }
    if ($(window).width() <= 1200)
        $(".header__button").appendTo(".menu__desktop")
    new Swiper(".team__slider", {
        spaceBetween: 30,
        grabCursor: true,
        slidesPerView: "auto",
        loop: true,
        navigation: {
            nextEl: ".team__slider-arrow-right",
            prevEl: ".team__slider-arrow-left",
        },
        centeredSlides: true,
        breakpoints: {
            1200: {
                centeredSlides: false,
            },
        },
    })
    new Swiper(".partners__slider", {
        spaceBetween: 48,
        grabCursor: true,
        slidesPerView: "auto",
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".partners__slider-arrow-right",
            prevEl: ".partners__slider-arrow-left",
        },
        centeredSlides: true,
        breakpoints: {
            1200: {
                spaceBetween: 69,
                slidesPerView: 3,
                centeredSlides: false,
            },
            1350: {
                slidesPerView: 5,
            },
        },
    })
    new simpleParallax(document.getElementsByClassName("concept__bg-img"), {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)' 
    })
    document.querySelectorAll('.head__img--left').forEach((item) => {
        new simpleParallax(item, {
            delay: .6,
        	transition: 'cubic-bezier(0,0,0,1)' ,
            orientation: 'right',
            overflow: true
        })
    })
    document.querySelectorAll('.head__img--right').forEach((item) => {
        new simpleParallax(item, {
            delay: .6,
        	transition: 'cubic-bezier(0,0,0,1)' ,
            orientation: 'left',
            overflow: true
        })
    })
    new simpleParallax(document.getElementsByClassName("header__img"), {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)' ,
        orientation: 'left',
        overflow: true
    })
    if(!localStorage.getItem('first-requery')) {        
        scrollEmulation()
        $(".modal-overlay").toggleClass(`modal-overlay--active`)
        $(`.modal__concept`).toggleClass(`modal--active`)
        localStorage.setItem('first-requery', 'false')
    }
    // /Page load
})
