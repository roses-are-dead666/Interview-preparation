function openPage(pageName) {
    let i, tabContent;
        tabContent = document.getElementsByClassName("tabContent");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        document.getElementById(pageName).style.display = "block";
    }

    document.getElementById("defaultOpen").click();

    const menuWrap = document.querySelectorAll('.tabLink');

    for (var i = 0; i < menuWrap.length; i++) {
        menuWrap[i].addEventListener('click', select, false);
    }
    
    function select(){
      for (var i = 0; i < menuWrap.length; i++) {
          menuWrap[i].removeAttribute('selected');
      }
      this.setAttribute("selected", "true"); 
    }

    function hamburgerMenu() {
        let mobileNav = document.getElementById("mobileTabLink");
        
            if (mobileNav.style.display === "block") {
                mobileNav.style.display = "none";
            } else {
                mobileNav.style.display = "block";
            }
        }