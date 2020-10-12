"use strict";function _defineProperty(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}$(window).on("load",function(){var e;function a(e,a){event.preventDefault(),$.ajax({url:a,type:"POST",dataType:"html",data:$("."+e).serialize(),success:function(e){var a=$.parseJSON(e);console.log(a)},error:function(e){alert("Ошибка. Данные не отправлены.")}})}function r(){var e=parseInt(document.documentElement.clientWidth),a=parseInt(window.innerWidth)-e;$("body").css({"padding-right":"".concat(a,"px")}),$("body").toggleClass("block")}function o(e){r(),$(".modal-overlay").toggleClass("modal-overlay--active"),$(".modal__".concat($(e.target).data("modal"))).toggleClass("modal--active")}function t(){r(),$(".modal-overlay").removeClass("modal-overlay--active"),$(".modal").removeClass("modal--active")}function l(){$(this).parents(".program__card").find(".program__card-modal-avatar-img").attr("src",$(this).find(".program__card-img").attr("src")),$(this).parents(".program__card").find(".program__card-modal-name").text($(this).data("avatarName")),$(this).parents(".program__card").find(".program__card-modal-text").text($(this).data("avatarInfo")),$(this).parents(".program__card").find(".program__card-modal").toggleClass("program__card-modal--active"),$(this).find(".program__card-img").toggleClass("program__card-img--hidden")}function n(){$(this).parents(".program__card").children(".program__card-note").toggleClass("program__card-note--active")}$('a[href^="#"]').on("click",function(e){if("#"!==String(this).slice(-1)){e.preventDefault();var a=$(this).attr("href"),r=$(a).offset().top;$("html, body").animate({scrollTop:r},1e3)}}),$(".program__form").on("change",a.bind(null,"program__form","test.php")),$(".modal__team-form").on("change",a.bind(null,"modal__team-form","test.php")),$(".menu__burger").on("click",function(){$(".menu").toggleClass("menu--open"),$("body").toggleClass("block")}),$(".menu__desktop-element").on("click",function(){$(".menu").removeClass("menu--open"),$(window).width()<=1200&&$("body").toggleClass("block")}),$(".head__link").on("click",o),$(".modal__close").on("click",t),$(".modal-overlay").on("click",function(e){$(e.target).hasClass("modal-overlay--active")&&t()}),$(".box__more").on("click",o),$(".team__more").on("click",o),$(".program__input").on("change",function(e){$(".program__label").removeClass("program__label--active"),$(e.target).parent(".program__label").addClass("program__label--active")}),$(".program__card-read").on("click",n),$(".program__card-note-close").on("click",n),$(".program__card-speaker-avatar").on("focus",l),$(".program__card-moder-avatar").on("focus",l),$(".program__card-speaker-avatar").on("blur",l),$(".program__card-moder-avatar").on("blur",l),$(".program__button").on("click",function(){$(".program__cards-hidden").slideDown(400)}),900<=$(window).width()&&OverlayScrollbars(document.querySelectorAll(".program__card-note-text"),{}),$(window).width()<=1200&&$(".header__button").appendTo(".menu__desktop"),new Swiper(".team__slider",{spaceBetween:30,grabCursor:!0,slidesPerView:"auto",loop:!0,navigation:{nextEl:".team__slider-arrow-right",prevEl:".team__slider-arrow-left"},centeredSlides:!0,breakpoints:{1200:{centeredSlides:!1}}}),new Swiper(".partners__slider",(_defineProperty(e={spaceBetween:48,grabCursor:!0,slidesPerView:"auto",loop:!0,centeredSlides:!0,navigation:{nextEl:".partners__slider-arrow-right",prevEl:".partners__slider-arrow-left"}},"centeredSlides",!0),_defineProperty(e,"breakpoints",{1200:{spaceBetween:69,slidesPerView:3,centeredSlides:!1},1350:{slidesPerView:5}}),e)),new simpleParallax(document.getElementsByClassName("concept__bg-img"),{delay:.6,transition:"cubic-bezier(0,0,0,1)"}),document.querySelectorAll(".head__img--left").forEach(function(e){new simpleParallax(e,{delay:.6,transition:"cubic-bezier(0,0,0,1)",orientation:"right",overflow:!0})}),document.querySelectorAll(".head__img--right").forEach(function(e){new simpleParallax(e,{delay:.6,transition:"cubic-bezier(0,0,0,1)",orientation:"left",overflow:!0})}),new simpleParallax(document.getElementsByClassName("header__img"),{delay:.6,transition:"cubic-bezier(0,0,0,1)",orientation:"left",overflow:!0}),localStorage.getItem("first-requery")||(r(),$(".modal-overlay").toggleClass("modal-overlay--active"),$(".modal__concept").toggleClass("modal--active"),localStorage.setItem("first-requery","false"))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwidmFsdWUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIiQiLCJ3aW5kb3ciLCJvbiIsIl9Td2lwZXIiLCJhamF4UmVxdWVzdCIsImFqYXhGb3JtIiwidXJsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFqYXgiLCJ0eXBlIiwiZGF0YVR5cGUiLCJkYXRhIiwic2VyaWFsaXplIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicmVzdWx0IiwicGFyc2VKU09OIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWxlcnQiLCJzY3JvbGxFbXVsYXRpb24iLCJkb2N1bWVudFdpZHRoIiwicGFyc2VJbnQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwic2Nyb2xsYmFyV2lkdGgiLCJpbm5lcldpZHRoIiwiY3NzIiwicGFkZGluZy1yaWdodCIsImNvbmNhdCIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlTW9kYWwiLCJlIiwidGFyZ2V0IiwiY2xvc2VNb2RhbCIsInJlbW92ZUNsYXNzIiwidG9nZ2xlTW9kYWxJbmZvQXZhdGFyIiwidGhpcyIsInBhcmVudHMiLCJmaW5kIiwiYXR0ciIsInRleHQiLCJ0b2dnbGVNb3JlVGV4dENhcmQiLCJjaGlsZHJlbiIsIlN0cmluZyIsInNsaWNlIiwic2MiLCJkbiIsIm9mZnNldCIsInRvcCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJiaW5kIiwid2lkdGgiLCJoYXNDbGFzcyIsInBhcmVudCIsImFkZENsYXNzIiwic2xpZGVEb3duIiwiT3ZlcmxheVNjcm9sbGJhcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYXBwZW5kVG8iLCJTd2lwZXIiLCJzcGFjZUJldHdlZW4iLCJncmFiQ3Vyc29yIiwic2xpZGVzUGVyVmlldyIsImxvb3AiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiY2VudGVyZWRTbGlkZXMiLCJicmVha3BvaW50cyIsIjEyMDAiLCIxMzUwIiwic2ltcGxlUGFyYWxsYXgiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGVsYXkiLCJ0cmFuc2l0aW9uIiwiZm9yRWFjaCIsIml0ZW0iLCJvcmllbnRhdGlvbiIsIm92ZXJmbG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiJBQUFBLGFBRUEsU0FBU0EsZ0JBQWdCQyxFQUFLQyxFQUFLQyxHQUFpSyxPQUFwSkQsS0FBT0QsRUFBT0csT0FBT0MsZUFBZUosRUFBS0MsRUFBSyxDQUFFQyxNQUFPQSxFQUFPRyxZQUFZLEVBQU1DLGNBQWMsRUFBTUMsVUFBVSxJQUFrQlAsRUFBSUMsR0FBT0MsRUFBZ0JGLEVBRTNNUSxFQUFFQyxRQUFRQyxHQUFHLE9BQVEsV0FDbkIsSUFBSUMsRUFNSixTQUFTQyxFQUFZQyxFQUFVQyxHQUM3QkMsTUFBTUMsaUJBQ05SLEVBQUVTLEtBQUssQ0FDTEgsSUFBS0EsRUFDTEksS0FBTSxPQUNOQyxTQUFVLE9BQ1ZDLEtBQU1aLEVBQUUsSUFBTUssR0FBVVEsWUFFeEJDLFFBQVMsU0FBaUJDLEdBRXhCLElBQUlDLEVBQVNoQixFQUFFaUIsVUFBVUYsR0FDekJHLFFBQVFDLElBQUlILElBRWRJLE1BQU8sU0FBZUwsR0FFcEJNLE1BQU0sb0NBS1osU0FBU0MsSUFDUCxJQUFJQyxFQUFnQkMsU0FBU0MsU0FBU0MsZ0JBQWdCQyxhQUVsREMsRUFEZUosU0FBU3ZCLE9BQU80QixZQUNDTixFQUNwQ3ZCLEVBQUUsUUFBUThCLElBQUksQ0FDWkMsZ0JBQWlCLEdBQUdDLE9BQU9KLEVBQWdCLFFBRTdDNUIsRUFBRSxRQUFRaUMsWUFBWSxTQUd4QixTQUFTQyxFQUFZQyxHQUNuQmIsSUFDQXRCLEVBQUUsa0JBQWtCaUMsWUFBWSx5QkFDaENqQyxFQUFFLFdBQVdnQyxPQUFPaEMsRUFBRW1DLEVBQUVDLFFBQVF4QixLQUFL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QUNoQkMsWUFBYSxDQUNYQyxLQUFNLENBQ0pGLGdCQUFnQixNQUl0QixJQUFJUixPQUFPLHFCQVVSekUsZ0JBVjhCWSxFQUFVLENBQ3pDOEQsYUFBYyxHQUNkQyxZQUFZLEVBQ1pDLGNBQWUsT0FDZkMsTUFBTSxFQUNOSSxnQkFBZ0IsRUFDaEJILFdBQVksQ0FDVkMsT0FBUSxnQ0FDUkMsT0FBUSxpQ0FFZ0Isa0JBQWtCLEdBQU9oRixnQkFBZ0JZLEVBQVMsY0FBZSxDQUMzRnVFLEtBQU0sQ0FDSlQsYUFBYyxHQUNkRSxjQUFlLEVBQ2ZLLGdCQUFnQixHQUVsQkcsS0FBTSxDQUNKUixjQUFlLEtBRWZoRSxJQUNKLElBQUl5RSxlQUFlbkQsU0FBU29ELHVCQUF1QixtQkFBb0IsQ0FDckVDLE1BQU8sR0FDUEMsV0FBWSwwQkFFZHRELFNBQVNxQyxpQkFBaUIsb0JBQW9Ca0IsUUFBUSxTQUFVQyxHQUM5RCxJQUFJTCxlQUFlSyxFQUFNLENBQ3ZCSCxNQUFPLEdBQ1BDLFdBQVksd0JBQ1pHLFlBQWEsUUFDYkMsVUFBVSxNQUdkMUQsU0FBU3FDLGlCQUFpQixxQkFBcUJrQixRQUFRLFNBQVVDLEdBQy9ELElBQUlMLGVBQWVLLEVBQU0sQ0FDdkJILE1BQU8sR0FDUEMsV0FBWSx3QkFDWkcsWUFBYSxPQUNiQyxVQUFVLE1BR2QsSUFBSVAsZUFBZW5ELFNBQVNvRCx1QkFBdUIsZUFBZ0IsQ0FDakVDLE1BQU8sR0FDUEMsV0FBWSx3QkFDWkcsWUFBYSxPQUNiQyxVQUFVLElBR1BDLGFBQWFDLFFBQVEsbUJBQ3hCL0QsSUFDQXRCLEVBQUUsa0JBQWtCaUMsWUFBWSx5QkFDaENqQyxFQUFFLG1CQUFtQmlDLFlBQVksaUJBQ2pDbUQsYUFBYUUsUUFBUSxnQkFBaUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4kKHdpbmRvdykub24oXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIF9Td2lwZXI7XG5cbiAgLy8gdmFyaWFibGVzXG4gIC8vIC92YXJpYWJsZXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB1bml2ZXJzYWwgZnVuY3Rpb25cbiAgZnVuY3Rpb24gYWpheFJlcXVlc3QoYWpheEZvcm0sIHVybCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogdXJsLFxuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICBkYXRhVHlwZTogXCJodG1sXCIsXG4gICAgICBkYXRhOiAkKFwiLlwiICsgYWpheEZvcm0pLnNlcmlhbGl6ZSgpLFxuICAgICAgLy8g0KHQtdCw0YDQuNC70LjQt9GD0LXQvCDQvtCx0YrQtdC60YJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgLy/QlNCw0L3QvdGL0LUg0L7RgtC/0YDQsNCy0LvQtdC90Ysg0YPRgdC/0LXRiNC90L5cbiAgICAgICAgdmFyIHJlc3VsdCA9ICQucGFyc2VKU09OKHJlc3BvbnNlKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IocmVzcG9uc2UpIHtcbiAgICAgICAgLy8g0JTQsNC90L3Ri9C1INC90LUg0L7RgtC/0YDQsNCy0LvQtdC90YtcbiAgICAgICAgYWxlcnQoXCLQntGI0LjQsdC60LAuINCU0LDQvdC90YvQtSDQvdC1INC+0YLQv9GA0LDQstC70LXQvdGLLlwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbEVtdWxhdGlvbigpIHtcbiAgICB2YXIgZG9jdW1lbnRXaWR0aCA9IHBhcnNlSW50KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgdmFyIHdpbmRvd3NXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB2YXIgc2Nyb2xsYmFyV2lkdGggPSB3aW5kb3dzV2lkdGggLSBkb2N1bWVudFdpZHRoO1xuICAgICQoXCJib2R5XCIpLmNzcyh7XG4gICAgICBcInBhZGRpbmctcmlnaHRcIjogXCJcIi5jb25jYXQoc2Nyb2xsYmFyV2lkdGgsIFwicHhcIilcbiAgICB9KTtcbiAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcImJsb2NrXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTW9kYWwoZSkge1xuICAgIHNjcm9sbEVtdWxhdGlvbigpO1xuICAgICQoXCIubW9kYWwtb3ZlcmxheVwiKS50b2dnbGVDbGFzcyhcIm1vZGFsLW92ZXJsYXktLWFjdGl2ZVwiKTtcbiAgICAkKFwiLm1vZGFsX19cIi5jb25jYXQoJChlLnRhcmdldCkuZGF0YShcIm1vZGFsXCIpKSkudG9nZ2xlQ2xhc3MoXCJtb2RhbC0tYWN0aXZlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICBzY3JvbGxFbXVsYXRpb24oKTtcbiAgICAkKFwiLm1vZGFsLW92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJtb2RhbC1vdmVybGF5LS1hY3RpdmVcIik7XG4gICAgJChcIi5tb2RhbFwiKS5yZW1vdmVDbGFzcyhcIm1vZGFsLS1hY3RpdmVcIik7XG4gIH0gLy8gIC91bml2ZXJzYWwgZnVuY3Rpb25cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBldmVudFxuXG5cbiAgJCgnYVtocmVmXj1cIiNcIl0nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChTdHJpbmcodGhpcykuc2xpY2UoLTEpICE9PSBcIiNcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBzYyA9ICQodGhpcykuYXR0cihcImhyZWZcIiksXG4gICAgICAgICAgZG4gPSAkKHNjKS5vZmZzZXQoKS50b3A7XG4gICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcbiAgICAgICAgc2Nyb2xsVG9wOiBkblxuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9KTsgLy8g0KTQvtGA0LzQsCDQsdC70L7QutCwXG5cbiAgJChcIi5wcm9ncmFtX19mb3JtXCIpLm9uKFwiY2hhbmdlXCIsIGFqYXhSZXF1ZXN0LmJpbmQobnVsbCwgXCJwcm9ncmFtX19mb3JtXCIsIFwidGVzdC5waHBcIikpOyAvLyAv0KTQvtGA0LzQsCDQsdC70L7QutCwXG4gIC8vINCk0L7RgNC80LAg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LAgKNGB0L4g0YHQv9C40LrQtdGA0LDQvNC4KVxuXG4gICQoXCIubW9kYWxfX3RlYW0tZm9ybVwiKS5vbihcImNoYW5nZVwiLCBhamF4UmVxdWVzdC5iaW5kKG51bGwsIFwibW9kYWxfX3RlYW0tZm9ybVwiLCBcInRlc3QucGhwXCIpKTsgLy8gL9Ck0L7RgNC80LAg0LzQvtC00LDQu9GM0L3QvtCz0L4g0L7QutC90LAgKNGB0L4g0YHQv9C40LrQtdGA0LDQvNC4KVxuXG4gICQoXCIubWVudV9fYnVyZ2VyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubWVudVwiKS50b2dnbGVDbGFzcyhcIm1lbnUtLW9wZW5cIik7XG4gICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJibG9ja1wiKTtcbiAgfSk7XG4gICQoXCIubWVudV9fZGVza3RvcC1lbGVtZW50XCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIubWVudVwiKS5yZW1vdmVDbGFzcyhcIm1lbnUtLW9wZW5cIik7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEyMDApICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwiYmxvY2tcIik7XG4gIH0pO1xuICAkKFwiLmhlYWRfX2xpbmtcIikub24oXCJjbGlja1wiLCB0b2dnbGVNb2RhbCk7XG4gICQoXCIubW9kYWxfX2Nsb3NlXCIpLm9uKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gICQoXCIubW9kYWwtb3ZlcmxheVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKFwibW9kYWwtb3ZlcmxheS0tYWN0aXZlXCIpKSBjbG9zZU1vZGFsKCk7XG4gIH0pO1xuICAkKFwiLmJveF9fbW9yZVwiKS5vbihcImNsaWNrXCIsIHRvZ2dsZU1vZGFsKTtcbiAgJChcIi50ZWFtX19tb3JlXCIpLm9uKFwiY2xpY2tcIiwgdG9nZ2xlTW9kYWwpO1xuICAkKFwiLnByb2dyYW1fX2lucHV0XCIpLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgJChcIi5wcm9ncmFtX19sYWJlbFwiKS5yZW1vdmVDbGFzcyhcInByb2dyYW1fX2xhYmVsLS1hY3RpdmVcIik7XG4gICAgJChlLnRhcmdldCkucGFyZW50KFwiLnByb2dyYW1fX2xhYmVsXCIpLmFkZENsYXNzKFwicHJvZ3JhbV9fbGFiZWwtLWFjdGl2ZVwiKTtcbiAgfSk7XG4gICQoXCIucHJvZ3JhbV9fY2FyZC1yZWFkXCIpLm9uKFwiY2xpY2tcIiwgdG9nZ2xlTW9yZVRleHRDYXJkKTtcbiAgJChcIi5wcm9ncmFtX19jYXJkLW5vdGUtY2xvc2VcIikub24oXCJjbGlja1wiLCB0b2dnbGVNb3JlVGV4dENhcmQpO1xuICAkKFwiLnByb2dyYW1fX2NhcmQtc3BlYWtlci1hdmF0YXJcIikub24oXCJmb2N1c1wiLCB0b2dnbGVNb2RhbEluZm9BdmF0YXIpO1xuICAkKFwiLnByb2dyYW1fX2NhcmQtbW9kZXItYXZhdGFyXCIpLm9uKFwiZm9jdXNcIiwgdG9nZ2xlTW9kYWxJbmZvQXZhdGFyKTtcbiAgJChcIi5wcm9ncmFtX19jYXJkLXNwZWFrZXItYXZhdGFyXCIpLm9uKFwiYmx1clwiLCB0b2dnbGVNb2RhbEluZm9BdmF0YXIpO1xuICAkKFwiLnByb2dyYW1fX2NhcmQtbW9kZXItYXZhdGFyXCIpLm9uKFwiYmx1clwiLCB0b2dnbGVNb2RhbEluZm9BdmF0YXIpO1xuICAkKFwiLnByb2dyYW1fX2J1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLnByb2dyYW1fX2NhcmRzLWhpZGRlblwiKS5zbGlkZURvd24oNDAwKTtcbiAgfSk7IC8vIC9ldmVudFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHVuaXF1ZSBmdW5jdGlvblxuXG4gIGZ1bmN0aW9uIHRvZ2dsZU1vZGFsSW5mb0F2YXRhcigpIHtcbiAgICAkKHRoaXMpLnBhcmVudHMoXCIucHJvZ3JhbV9fY2FyZFwiKS5maW5kKFwiLnByb2dyYW1fX2NhcmQtbW9kYWwtYXZhdGFyLWltZ1wiKS5hdHRyKFwic3JjXCIsICQodGhpcykuZmluZChcIi5wcm9ncmFtX19jYXJkLWltZ1wiKS5hdHRyKFwic3JjXCIpKTtcbiAgICAkKHRoaXMpLnBhcmVudHMoXCIucHJvZ3JhbV9fY2FyZFwiKS5maW5kKFwiLnByb2dyYW1fX2NhcmQtbW9kYWwtbmFtZVwiKS50ZXh0KCQodGhpcykuZGF0YShcImF2YXRhck5hbWVcIikpO1xuICAgICQodGhpcykucGFyZW50cyhcIi5wcm9ncmFtX19jYXJkXCIpLmZpbmQoXCIucHJvZ3JhbV9fY2FyZC1tb2RhbC10ZXh0XCIpLnRleHQoJCh0aGlzKS5kYXRhKFwiYXZhdGFySW5mb1wiKSk7XG4gICAgJCh0aGlzKS5wYXJlbnRzKFwiLnByb2dyYW1fX2NhcmRcIikuZmluZChcIi5wcm9ncmFtX19jYXJkLW1vZGFsXCIpLnRvZ2dsZUNsYXNzKFwicHJvZ3JhbV9fY2FyZC1tb2RhbC0tYWN0aXZlXCIpO1xuICAgICQodGhpcykuZmluZChcIi5wcm9ncmFtX19jYXJkLWltZ1wiKS50b2dnbGVDbGFzcyhcInByb2dyYW1fX2NhcmQtaW1nLS1oaWRkZW5cIik7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVNb3JlVGV4dENhcmQoKSB7XG4gICAgJCh0aGlzKS5wYXJlbnRzKFwiLnByb2dyYW1fX2NhcmRcIikuY2hpbGRyZW4oXCIucHJvZ3JhbV9fY2FyZC1ub3RlXCIpLnRvZ2dsZUNsYXNzKFwicHJvZ3JhbV9fY2FyZC1ub3RlLS1hY3RpdmVcIik7XG4gIH0gLy8gL3VuaXF1ZSBmdW5jdGlvblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFBhZ2UgbG9hZFxuXG5cbiAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDkwMCkge1xuICAgIE92ZXJsYXlTY3JvbGxiYXJzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3JhbV9fY2FyZC1ub3RlLXRleHRcIiksIHt9KTtcbiAgfVxuXG4gIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMjAwKSAkKFwiLmhlYWRlcl9fYnV0dG9uXCIpLmFwcGVuZFRvKFwiLm1lbnVfX2Rlc2t0b3BcIik7XG4gIG5ldyBTd2lwZXIoXCIudGVhbV9fc2xpZGVyXCIsIHtcbiAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgIGdyYWJDdXJzb3I6IHRydWUsXG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLnRlYW1fX3NsaWRlci1hcnJvdy1yaWdodFwiLFxuICAgICAgcHJldkVsOiBcIi50ZWFtX19zbGlkZXItYXJyb3ctbGVmdFwiXG4gICAgfSxcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgMTIwMDoge1xuICAgICAgICBjZW50ZXJlZFNsaWRlczogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBuZXcgU3dpcGVyKFwiLnBhcnRuZXJzX19zbGlkZXJcIiwgKF9Td2lwZXIgPSB7XG4gICAgc3BhY2VCZXR3ZWVuOiA0OCxcbiAgICBncmFiQ3Vyc29yOiB0cnVlLFxuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIGxvb3A6IHRydWUsXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5wYXJ0bmVyc19fc2xpZGVyLWFycm93LXJpZ2h0XCIsXG4gICAgICBwcmV2RWw6IFwiLnBhcnRuZXJzX19zbGlkZXItYXJyb3ctbGVmdFwiXG4gICAgfVxuICB9LCBfZGVmaW5lUHJvcGVydHkoX1N3aXBlciwgXCJjZW50ZXJlZFNsaWRlc1wiLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9Td2lwZXIsIFwiYnJlYWtwb2ludHNcIiwge1xuICAgIDEyMDA6IHtcbiAgICAgIHNwYWNlQmV0d2VlbjogNjksXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlXG4gICAgfSxcbiAgICAxMzUwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiA1XG4gICAgfVxuICB9KSwgX1N3aXBlcikpO1xuICBuZXcgc2ltcGxlUGFyYWxsYXgoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbmNlcHRfX2JnLWltZ1wiKSwge1xuICAgIGRlbGF5OiAuNixcbiAgICB0cmFuc2l0aW9uOiAnY3ViaWMtYmV6aWVyKDAsMCwwLDEpJ1xuICB9KTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRfX2ltZy0tbGVmdCcpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBuZXcgc2ltcGxlUGFyYWxsYXgoaXRlbSwge1xuICAgICAgZGVsYXk6IC42LFxuICAgICAgdHJhbnNpdGlvbjogJ2N1YmljLWJlemllcigwLDAsMCwxKScsXG4gICAgICBvcmllbnRhdGlvbjogJ3JpZ2h0JyxcbiAgICAgIG92ZXJmbG93OiB0cnVlXG4gICAgfSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZF9faW1nLS1yaWdodCcpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBuZXcgc2ltcGxlUGFyYWxsYXgoaXRlbSwge1xuICAgICAgZGVsYXk6IC42LFxuICAgICAgdHJhbnNpdGlvbjogJ2N1YmljLWJlemllcigwLDAsMCwxKScsXG4gICAgICBvcmllbnRhdGlvbjogJ2xlZnQnLFxuICAgICAgb3ZlcmZsb3c6IHRydWVcbiAgICB9KTtcbiAgfSk7XG4gIG5ldyBzaW1wbGVQYXJhbGxheChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaGVhZGVyX19pbWdcIiksIHtcbiAgICBkZWxheTogLjYsXG4gICAgdHJhbnNpdGlvbjogJ2N1YmljLWJlemllcigwLDAsMCwxKScsXG4gICAgb3JpZW50YXRpb246ICdsZWZ0JyxcbiAgICBvdmVyZmxvdzogdHJ1ZVxuICB9KTtcblxuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaXJzdC1yZXF1ZXJ5JykpIHtcbiAgICBzY3JvbGxFbXVsYXRpb24oKTtcbiAgICAkKFwiLm1vZGFsLW92ZXJsYXlcIikudG9nZ2xlQ2xhc3MoXCJtb2RhbC1vdmVybGF5LS1hY3RpdmVcIik7XG4gICAgJChcIi5tb2RhbF9fY29uY2VwdFwiKS50b2dnbGVDbGFzcyhcIm1vZGFsLS1hY3RpdmVcIik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ZpcnN0LXJlcXVlcnknLCAnZmFsc2UnKTtcbiAgfSAvLyAvUGFnZSBsb2FkXG5cbn0pOyJdfQ==
