import outsideClick from "./outsideClick.js";

export default class MenuMobile {
  constructor(btnMenu, menuList, events) {
    this.btnMenu = document.querySelector(btnMenu);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";

    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.btnMenu.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.btnMenu.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((event) =>
      this.btnMenu.addEventListener(event, this.openMenu)
    );
  }

  init() {
    if (this.btnMenu && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
