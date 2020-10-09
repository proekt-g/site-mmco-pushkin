"use strict";function _defineProperty(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}$(window).on("load",function(){var e;function a(e,a){event.preventDefault(),$.ajax({url:a,type:"POST",dataType:"html",data:$("."+e).serialize(),success:function(e){var a=$.parseJSON(e);console.log(a)},error:function(e){alert("Ошибка. Данные не отправлены.")}})}function r(){var e=parseInt(document.documentElement.clientWidth),a=parseInt(window.innerWidth)-e;$("body").css({"padding-right":"".concat(a,"px")}),$("body").toggleClass("block")}function o(e){r(),$(".modal-overlay").toggleClass("modal-overlay--active"),$(".modal__".concat($(e.target).data("modal"))).toggleClass("modal--active")}function t(){r(),$(".modal-overlay").removeClass("modal-overlay--active"),$(".modal").removeClass("modal--active")}function n(){$(this).parents(".program__card").find(".program__card-modal-avatar-img").attr("src",$(this).find(".program__card-img").attr("src")),$(this).parents(".program__card").find(".program__card-modal-name").text($(this).data("avatarName")),$(this).parents(".program__card").find(".program__card-modal-text").text($(this).data("avatarInfo")),$(this).parents(".program__card").find(".program__card-modal").toggleClass("program__card-modal--active"),$(this).find(".program__card-img").toggleClass("program__card-img--hidden")}function l(){$(this).parents(".program__card").children(".program__card-note").toggleClass("program__card-note--active")}$('a[href^="#"]').on("click",function(e){if("#"!==String(this).slice(-1)){e.preventDefault();var a=$(this).attr("href"),r=$(a).offset().top;$("html, body").animate({scrollTop:r},1e3)}}),$(".program__form").on("change",a.bind(null,"program__form","test.php")),$(".modal__team-form").on("change",a.bind(null,"modal__team-form","test.php")),$(".menu__burger").on("click",function(){$(".menu").toggleClass("menu--open"),$("body").toggleClass("block")}),$(".menu__desktop-element").on("click",function(){$(".menu").removeClass("menu--open"),$(window).width()<=1200&&$("body").toggleClass("block")}),$(".head__link").on("click",o),$(".modal__close").on("click",t),$(".modal-overlay").on("click",function(e){$(e.target).hasClass("modal-overlay--active")&&t()}),$(".box__more").on("click",o),$(".team__more").on("click",o),$(".program__input").on("change",function(e){$(".program__label").removeClass("program__label--active"),$(e.target).parent(".program__label").addClass("program__label--active")}),$(".program__card-read").on("click",l),$(".program__card-note-close").on("click",l),$(".program__card-speaker-avatar").on("focus",n),$(".program__card-moder-avatar").on("focus",n),$(".program__card-speaker-avatar").on("blur",n),$(".program__card-moder-avatar").on("blur",n),$(".program__button").on("click",function(){$(".program__cards-hidden").slideDown(400)}),900<=$(window).width()&&OverlayScrollbars(document.querySelectorAll(".program__card-note-text"),{}),$(window).width()<=1200&&$(".header__button").appendTo(".menu__desktop"),new Swiper(".team__slider",{spaceBetween:30,grabCursor:!0,slidesPerView:"auto",loop:!0,navigation:{nextEl:".team__slider-arrow-right",prevEl:".team__slider-arrow-left"},centeredSlides:!0,breakpoints:{1200:{centeredSlides:!1}}}),new Swiper(".partners__slider",(_defineProperty(e={spaceBetween:48,grabCursor:!0,slidesPerView:"auto",loop:!0,centeredSlides:!0,navigation:{nextEl:".partners__slider-arrow-right",prevEl:".partners__slider-arrow-left"}},"centeredSlides",!0),_defineProperty(e,"breakpoints",{1200:{spaceBetween:69,slidesPerView:3,centeredSlides:!1},1350:{slidesPerView:5}}),e)),new simpleParallax(document.getElementsByClassName("thumbnail"))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIiQiLCJ3aW5kb3ciLCJvbiIsIl9Td2lwZXIiLCJhamF4UmVxdWVzdCIsImFqYXhGb3JtIiwidXJsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFqYXgiLCJ0eXBlIiwiZGF0YVR5cGUiLCJkYXRhIiwic2VyaWFsaXplIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicmVzdWx0IiwicGFyc2VKU09OIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWxlcnQiLCJzY3JvbGxFbXVsYXRpb24iLCJkb2N1bWVudFdpZHRoIiwicGFyc2VJbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwic2Nyb2xsYmFyV2lkdGgiLCJpbm5lcldpZHRoIiwiY3NzIiwicGFkZGluZy1yaWdodCIsImNvbmNhdCIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlTW9kYWwiLCJlIiwidGFyZ2V0IiwiY2xvc2VNb2RhbCIsInJlbW92ZUNsYXNzIiwidG9nZ2xlTW9kYWxJbmZvQXZhdGFyIiwidGhpcyIsInBhcmVudHMiLCJmaW5kIiwiYXR0ciIsInRleHQiLCJ0b2dnbGVNb3JlVGV4dENhcmQiLCJjaGlsZHJlbiIsIlN0cmluZyIsInNsaWNlIiwic2MiLCJkbiIsIm9mZnNldCIsInRvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJiaW5kIiwid2lkdGgiLCJoYXNDbGFzcyIsInBhcmVudCIsImFkZENsYXNzIiwic2xpZGVEb3duIiwiT3ZlcmxheVNjcm9sbGJhcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXBwZW5kVG8iLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJncmFiQ3Vyc29yIiwic2xpZGVzUGVyVmlldyIsImxvb3AiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiY2VudGVyZWRTbGlkZXMiLCJicmVha3BvaW50cyIsIjEyMDAiLCIxMzUwIiwic2ltcGxlUGFyYWxsYXgiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxhQUVBLFNBQVNBLGdCQUFnQkMsRUFBS0MsRUFBS0MsR0FBaUssT0FBcEpELEtBQU9ELEVBQU9HLE9BQU9DLGVBQWVKLEVBQUtDLEVBQUssQ0FBRUMsTUFBT0EsRUFBT0csWUFBWSxFQUFNQyxjQUFjLEVBQU1DLFVBQVUsSUFBa0JQLEVBQUlDLEdBQU9DLEVBQWdCRixFQU0zTVEsRUFBRUMsUUFBUUMsR0FBRyxPQUFRLFdBQ25CLElBQUlDLEVBTUosU0FBU0MsRUFBWUMsRUFBVUMsR0FDN0JDLE1BQU1DLGlCQUNOUixFQUFFUyxLQUFLLENBQ0xILElBQUtBLEVBQ0xJLEtBQU0sT0FDTkMsU0FBVSxPQUNWQyxLQUFNWixFQUFFLElBQU1LLEdBQVVRLFlBRXhCQyxRQUFTLFNBQWlCQyxHQUV4QixJQUFJQyxFQUFTaEIsRUFBRWlCLFVBQVVGLEdBQ3pCRyxRQUFRQyxJQUFJSCxJQUVkSSxNQUFPLFNBQWVMLEdBRXBCTSxNQUFNLG9DQUtaLFNBQVNDLElBQ1AsSUFBSUMsRUFBZ0JDLFNBQVNDLFNBQVNDLGdCQUFnQkMsYUFFbERDLEVBRGVKLFNBQVN2QixPQUFPNEIsWUFDQ04sRUFDcEN2QixFQUFFLFFBQVE4QixJQUFJLENBQ1pDLGdCQUFpQixHQUFHQyxPQUFPSixFQUFnQixRQUU3QzVCLEVBQUUsUUFBUWlDLFlBQVksU0FHeEIsU0FBU0MsRUFBWUMsR0FDbkJiLElBQ0F0QixFQUFFLGtCQUFrQmlDLFlBQVkseUJBQ2hDakMsRUFBRSxXQUFXZ0MsT0FBT2hDLEVBQUVtQyxFQUFFQyxRQUFReEIsS0FBSyxXQUFXcUIsWUFBWSxpQkFHOUQsU0FBU0ksSUFDUGYsSUFDQXRCLEVBQUUsa0JBQWtCc0MsWUFBWSx5QkFDaEN0QyxFQUFFLFVBQVVzQyxZQUFZLGlCQXFEMUIsU0FBU0Ms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QUNaQyxjQUFlLE9BQ2ZDLE1BQU0sRUFDTkksZ0JBQWdCLEVBQ2hCSCxXQUFZLENBQ1ZDLE9BQVEsZ0NBQ1JDLE9BQVEsaUNBRWdCLGtCQUFrQixHQUFPaEYsZ0JBQWdCWSxFQUFTLGNBQWUsQ0FDM0Z1RSxLQUFNLENBQ0pULGFBQWMsR0FDZEUsY0FBZSxFQUNmSyxnQkFBZ0IsR0FFbEJHLEtBQU0sQ0FDSlIsY0FBZSxLQUVmaEUsSUFDSixJQUFJeUUsZUFBZW5ELFNBQVNvRCx1QkFBdUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbi8vICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiKSB7XG4vLyAgICAgfVxuLy8gfVxuJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBfU3dpcGVyO1xuXG4gIC8vIHZhcmlhYmxlc1xuICAvLyAvdmFyaWFibGVzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdW5pdmVyc2FsIGZ1bmN0aW9uXG4gIGZ1bmN0aW9uIGFqYXhSZXF1ZXN0KGFqYXhGb3JtLCB1cmwpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IHVybCxcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxuICAgICAgZGF0YTogJChcIi5cIiArIGFqYXhGb3JtKS5zZXJpYWxpemUoKSxcbiAgICAgIC8vINCh0LXQsNGA0LjQu9C40LfRg9C10Lwg0L7QsdGK0LXQutGCXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgIC8v0JTQsNC90L3Ri9C1INC+0YLQv9GA0LDQstC70LXQvdGLINGD0YHQv9C10YjQvdC+XG4gICAgICAgIHZhciByZXN1bHQgPSAkLnBhcnNlSlNPTihyZXNwb25zZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKHJlc3BvbnNlKSB7XG4gICAgICAgIC8vINCU0LDQvdC90YvQtSDQvdC1INC+0YLQv9GA0LDQstC70LXQvdGLXG4gICAgICAgIGFsZXJ0KFwi0J7RiNC40LHQutCwLiDQlNCw0L3QvdGL0LUg0L3QtSDQvtGC0L/RgNCw0LLQu9C10L3Riy5cIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxFbXVsYXRpb24oKSB7XG4gICAgdmFyIGRvY3VtZW50V2lkdGggPSBwYXJzZUludChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xuICAgIHZhciB3aW5kb3dzV2lkdGggPSBwYXJzZUludCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgdmFyIHNjcm9sbGJhcldpZHRoID0gd2luZG93c1dpZHRoIC0gZG9jdW1lbnRXaWR0aDtcbiAgICAkKFwiYm9keVwiKS5jc3Moe1xuICAgICAgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiXCIuY29uY2F0KHNjcm9sbGJhcldpZHRoLCBcInB4XCIpXG4gICAgfSk7XG4gICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJibG9ja1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZU1vZGFsKGUpIHtcbiAgICBzY3JvbGxFbXVsYXRpb24oKTtcbiAgICAkKFwiLm1vZGFsLW92ZXJsYXlcIikudG9nZ2xlQ2xhc3MoXCJtb2RhbC1vdmVybGF5LS1hY3RpdmVcIik7XG4gICAgJChcIi5tb2RhbF9fXCIuY29uY2F0KCQoZS50YXJnZXQpLmRhdGEoXCJtb2RhbFwiKSkpLnRvZ2dsZUNsYXNzKFwibW9kYWwtLWFjdGl2ZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgc2Nyb2xsRW11bGF0aW9uKCk7XG4gICAgJChcIi5tb2RhbC1vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwibW9kYWwtb3ZlcmxheS0tYWN0aXZlXCIpO1xuICAgICQoXCIubW9kYWxcIikucmVtb3ZlQ2xhc3MoXCJtb2RhbC0tYWN0aXZlXCIpO1xuICB9IC8vICAvdW5pdmVyc2FsIGZ1bmN0aW9uXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gZXZlbnRcblxuXG4gICQoJ2FbaHJlZl49XCIjXCJdJykub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoU3RyaW5nKHRoaXMpLnNsaWNlKC0xKSAhPT0gXCIjXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgc2MgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpLFxuICAgICAgICAgIGRuID0gJChzYykub2Zmc2V0KCkudG9wO1xuICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogZG5cbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfSk7IC8vINCk0L7RgNC80LAg0LHQu9C+0LrQsFxuXG4gICQoXCIucHJvZ3JhbV9fZm9ybVwiKS5vbihcImNoYW5nZVwiLCBhamF4UmVxdWVzdC5iaW5kKG51bGwsIFwicHJvZ3JhbV9fZm9ybVwiLCBcInRlc3QucGhwXCIpKTsgLy8gL9Ck0L7RgNC80LAg0LHQu9C+0LrQsFxuICAvLyDQpNC+0YDQvNCwINC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwICjRgdC+INGB0L/QuNC60LXRgNCw0LzQuClcblxuICAkKFwiLm1vZGFsX190ZWFtLWZvcm1cIikub24oXCJjaGFuZ2VcIiwgYWpheFJlcXVlc3QuYmluZChudWxsLCBcIm1vZGFsX190ZWFtLWZvcm1cIiwgXCJ0ZXN0LnBocFwiKSk7IC8vIC/QpNC+0YDQvNCwINC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwICjRgdC+INGB0L/QuNC60LXRgNCw0LzQuClcblxuICAkKFwiLm1lbnVfX2J1cmdlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLm1lbnVcIikudG9nZ2xlQ2xhc3MoXCJtZW51LS1vcGVuXCIpO1xuICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwiYmxvY2tcIik7XG4gIH0pO1xuICAkKFwiLm1lbnVfX2Rlc2t0b3AtZWxlbWVudFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLm1lbnVcIikucmVtb3ZlQ2xhc3MoXCJtZW51LS1vcGVuXCIpO1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMjAwKSAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcImJsb2NrXCIpO1xuICB9KTtcbiAgJChcIi5oZWFkX19saW5rXCIpLm9uKFwiY2xpY2tcIiwgdG9nZ2xlTW9kYWwpO1xuICAkKFwiLm1vZGFsX19jbG9zZVwiKS5vbihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuICAkKFwiLm1vZGFsLW92ZXJsYXlcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcyhcIm1vZGFsLW92ZXJsYXktLWFjdGl2ZVwiKSkgY2xvc2VNb2RhbCgpO1xuICB9KTtcbiAgJChcIi5ib3hfX21vcmVcIikub24oXCJjbGlja1wiLCB0b2dnbGVNb2RhbCk7XG4gICQoXCIudGVhbV9fbW9yZVwiKS5vbihcImNsaWNrXCIsIHRvZ2dsZU1vZGFsKTtcbiAgJChcIi5wcm9ncmFtX19pbnB1dFwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICQoXCIucHJvZ3JhbV9fbGFiZWxcIikucmVtb3ZlQ2xhc3MoXCJwcm9ncmFtX19sYWJlbC0tYWN0aXZlXCIpO1xuICAgICQoZS50YXJnZXQpLnBhcmVudChcIi5wcm9ncmFtX19sYWJlbFwiKS5hZGRDbGFzcyhcInByb2dyYW1fX2xhYmVsLS1hY3RpdmVcIik7XG4gIH0pO1xuICAkKFwiLnByb2dyYW1fX2NhcmQtcmVhZFwiKS5vbihcImNsaWNrXCIsIHRvZ2dsZU1vcmVUZXh0Q2FyZCk7XG4gICQoXCIucHJvZ3JhbV9fY2FyZC1ub3RlLWNsb3NlXCIpLm9uKFwiY2xpY2tcIiwgdG9nZ2xlTW9yZVRleHRDYXJkKTtcbiAgJChcIi5wcm9ncmFtX19jYXJkLXNwZWFrZXItYXZhdGFyXCIpLm9uKFwiZm9jdXNcIiwgdG9nZ2xlTW9kYWxJbmZvQXZhdGFyKTtcbiAgJChcIi5wcm9ncmFtX19jYXJkLW1vZGVyLWF2YXRhclwiKS5vbihcImZvY3VzXCIsIHRvZ2dsZU1vZGFsSW5mb0F2YXRhcik7XG4gICQoXCIucHJvZ3JhbV9fY2FyZC1zcGVha2VyLWF2YXRhclwiKS5vbihcImJsdXJcIiwgdG9nZ2xlTW9kYWxJbmZvQXZhdGFyKTtcbiAgJChcIi5wcm9ncmFtX19jYXJkLW1vZGVyLWF2YXRhclwiKS5vbihcImJsdXJcIiwgdG9nZ2xlTW9kYWxJbmZvQXZhdGFyKTtcbiAgJChcIi5wcm9ncmFtX19idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5wcm9ncmFtX19jYXJkcy1oaWRkZW5cIikuc2xpZGVEb3duKDQwMCk7XG4gIH0pOyAvLyAvZXZlbnRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB1bmlxdWUgZnVuY3Rpb25cblxuICBmdW5jdGlvbiB0b2dnbGVNb2RhbEluZm9BdmF0YXIoKSB7XG4gICAgJCh0aGlzKS5wYXJlbnRzKFwiLnByb2dyYW1fX2NhcmRcIikuZmluZChcIi5wcm9ncmFtX19jYXJkLW1vZGFsLWF2YXRhci1pbWdcIikuYXR0cihcInNyY1wiLCAkKHRoaXMpLmZpbmQoXCIucHJvZ3JhbV9fY2FyZC1pbWdcIikuYXR0cihcInNyY1wiKSk7XG4gICAgJCh0aGlzKS5wYXJlbnRzKFwiLnByb2dyYW1fX2NhcmRcIikuZmluZChcIi5wcm9ncmFtX19jYXJkLW1vZGFsLW5hbWVcIikudGV4dCgkKHRoaXMpLmRhdGEoXCJhdmF0YXJOYW1lXCIpKTtcbiAgICAkKHRoaXMpLnBhcmVudHMoXCIucHJvZ3JhbV9fY2FyZFwiKS5maW5kKFwiLnByb2dyYW1fX2NhcmQtbW9kYWwtdGV4dFwiKS50ZXh0KCQodGhpcykuZGF0YShcImF2YXRhckluZm9cIikpO1xuICAgICQodGhpcykucGFyZW50cyhcIi5wcm9ncmFtX19jYXJkXCIpLmZpbmQoXCIucHJvZ3JhbV9fY2FyZC1tb2RhbFwiKS50b2dnbGVDbGFzcyhcInByb2dyYW1fX2NhcmQtbW9kYWwtLWFjdGl2ZVwiKTtcbiAgICAkKHRoaXMpLmZpbmQoXCIucHJvZ3JhbV9fY2FyZC1pbWdcIikudG9nZ2xlQ2xhc3MoXCJwcm9ncmFtX19jYXJkLWltZy0taGlkZGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTW9yZVRleHRDYXJkKCkge1xuICAgICQodGhpcykucGFyZW50cyhcIi5wcm9ncmFtX19jYXJkXCIpLmNoaWxkcmVuKFwiLnByb2dyYW1fX2NhcmQtbm90ZVwiKS50b2dnbGVDbGFzcyhcInByb2dyYW1fX2NhcmQtbm90ZS0tYWN0aXZlXCIpO1xuICB9IC8vIC91bmlxdWUgZnVuY3Rpb25cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQYWdlIGxvYWRcblxuXG4gIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA5MDApIHtcbiAgICBPdmVybGF5U2Nyb2xsYmFycyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2dyYW1fX2NhcmQtbm90ZS10ZXh0XCIpLCB7fSk7XG4gIH1cblxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTIwMCkgJChcIi5oZWFkZXJfX2J1dHRvblwiKS5hcHBlbmRUbyhcIi5tZW51X19kZXNrdG9wXCIpO1xuICBuZXcgU3dpcGVyKFwiLnRlYW1fX3NsaWRlclwiLCB7XG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICBncmFiQ3Vyc29yOiB0cnVlLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGxvb3A6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi50ZWFtX19zbGlkZXItYXJyb3ctcmlnaHRcIixcbiAgICAgIHByZXZFbDogXCIudGVhbV9fc2xpZGVyLWFycm93LWxlZnRcIlxuICAgIH0sXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDEyMDA6IHtcbiAgICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgbmV3IFN3aXBlcihcIi5wYXJ0bmVyc19fc2xpZGVyXCIsIChfU3dpcGVyID0ge1xuICAgIHNwYWNlQmV0d2VlbjogNDgsXG4gICAgZ3JhYkN1cnNvcjogdHJ1ZSxcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBsb29wOiB0cnVlLFxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIucGFydG5lcnNfX3NsaWRlci1hcnJvdy1yaWdodFwiLFxuICAgICAgcHJldkVsOiBcIi5wYXJ0bmVyc19fc2xpZGVyLWFycm93LWxlZnRcIlxuICAgIH1cbiAgfSwgX2RlZmluZVByb3BlcnR5KF9Td2lwZXIsIFwiY2VudGVyZWRTbGlkZXNcIiwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfU3dpcGVyLCBcImJyZWFrcG9pbnRzXCIsIHtcbiAgICAxMjAwOiB7XG4gICAgICBzcGFjZUJldHdlZW46IDY5LFxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIGNlbnRlcmVkU2xpZGVzOiBmYWxzZVxuICAgIH0sXG4gICAgMTM1MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNVxuICAgIH1cbiAgfSksIF9Td2lwZXIpKTtcbiAgbmV3IHNpbXBsZVBhcmFsbGF4KGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0aHVtYm5haWxcIikpOyAvLyAvUGFnZSBsb2FkXG59KTsiXX0=
