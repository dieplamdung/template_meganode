(function () {
  const content = document.querySelector(".content_landing_page");
  const menuMobile = document.querySelector(".wrap_nav_menu_mobile");


  if (content) {

    window.addEventListener("resize",()=>{
      const screen = content.getBoundingClientRect()?.width;
      if(screen > 415 && !!menuMobile){
        menuMobile.classList.remove("show_wrap_nav_menu_mobile");
      }
    })

    window.addEventListener("scroll", function (e) {
      const height = 150;
      const scrollTop = Math.abs(content.getBoundingClientRect()?.y);
      const header = document.querySelector(".header_landing_page");

      if (scrollTop > height) {
        if (header) {
          header.classList.add("add_background");
        }
        return;
      }
      if (scrollTop <= height) {
        if (header) {
          header.classList.remove("add_background");
        }
        return;
      }
    });
  }

  const iconMenu = document.querySelector(".icon_nav_menu");

  if (iconMenu) {
    iconMenu.addEventListener("click", () => {
      if (menuMobile) {
        menuMobile.classList.add("show_wrap_nav_menu_mobile");
      }
    });
  }

  const iconCloseMenu = document.querySelector(".icon_nav_menu_close");

  if (iconCloseMenu) {
    iconCloseMenu.addEventListener("click", () => {
      if (menuMobile) {
        menuMobile.classList.remove("show_wrap_nav_menu_mobile");
      }
    });
  }
})();
