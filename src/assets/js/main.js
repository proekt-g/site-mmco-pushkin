// document.onreadystatechange = function() {
//     if (document.readyState === "interactive") {

//     }
// }

$(window).on("load", () => {
    // variables
    // /variables
    // ----------------------------------------------
    // universal function
    //  /universal function
    // ----------------------------------------------
    // event
    $('a[href^="#"]').on("click", function (event) {
        if (String(this).slice(-1) !== "#") {
            event.preventDefault()
            let sc = $(this).attr("href"),
                dn = $(sc).offset().top
            $("html, body").animate({ scrollTop: dn - 100 }, 1000)
        }
    })
    $(".menu__burger").on("click", () => {
        $(".menu").toggleClass("menu--open")
        $("body").toggleClass("block")
    })
    $(".menu__desktop-element").on("click", () => {
        $(".menu").removeClass("menu--open")
        $("body").toggleClass("block")
    })
    // /event
    // ----------------------------------------------
    // unique function
    // /unique function
    // ----------------------------------------------
    // Page load
    if ($(window).width() <= 1200)
        $(".header__button").appendTo(".menu__desktop")
    new simpleParallax(document.getElementsByClassName("thumbnail"))
    // /Page load
})
