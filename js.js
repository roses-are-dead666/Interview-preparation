function openPage(pageName) {
    let i, tabContent;
        tabContent = document.getElementsByClassName("tabContent");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        document.getElementById(pageName).style.display = "block";
    }

    document.getElementById("defaultOpen").click();

$(function() {

    let header = $("#header");
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    })

    function checkScroll(scrollOffset) {

        if (scrollOffset >= 200) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    $("#navBurger").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("nav").toggleClass("active");
        $( "nav a" ).on("click", function(){
            $("#navBurger").click();
          });
    })

})
