'use strict';
class PortalSideNav {
  constructor () {
    this.showMenuButtonEl = document.querySelector('.showMenuButtonEl');
    this.closeMenuButtonEl = document.querySelector('.closeMenuButtonEl');
    this.openSubMenuButtonEl = document.querySelector('.openSubMenuButtonEl');
    this.closeSubMenuButtonEl = document.querySelector('.closeSubMenuButtonEl');
    this.sideNavEl = document.querySelector('.sideNav');
    this.sideNavContainerEl = document.querySelector('.sideNav__container');
    this.sideNavMainEl = document.querySelector('.sideNav__main');
    this.sideNavSecondEl = document.querySelector('.sideNav__second');

    this.isOpenMenu = false;
    this.isFoldSubMenu = false;

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openSubMenu = this.openSubMenu.bind(this);
    this.foldSubMenu = this.foldSubMenu.bind(this);
    PortalSideNav.blockClicks = PortalSideNav.blockClicks.bind(this);
    this.addEventListeners();
  }

  addEventListeners () {
    this.showMenuButtonEl.addEventListener('click', this.openMenu);
    this.closeMenuButtonEl.addEventListener('click', this.closeMenu);
    this.openSubMenuButtonEl.addEventListener('click', this.openSubMenu);
    this.closeSubMenuButtonEl.addEventListener('click', this.foldSubMenu);
    this.sideNavEl.addEventListener('click', this.closeMenu);
    this.sideNavContainerEl.addEventListener('click', PortalSideNav.blockClicks);
  }

  static blockClicks (evt) {
    evt.stopPropagation();
    console.log('blocked click');
  }

  openMenu () {
    if (this.isOpenMenu)
      return;

    if (this.isFoldSubMenu) {
      this.sideNavEl.classList.add('is-open-subMenu');
      this.sideNavEl.classList.remove('is-closed-sideNav', 'is-closed-subMenu');
      this.isFoldSubMenu = true;
    }

    this.isOpenMenu = true;
    this.sideNavEl.classList.add('is-open-sideNav');
  }

  closeMenu () {
    if (!this.isOpenMenu)
      return;

    if (this.isFoldSubMenu) {
      this.sideNavEl.classList.add('is-closed-sideNav');
      this.sideNavEl.classList.remove('is-open-subMenu', 'is-open-sideNav');
    }

    this.isOpenMenu = false;
    this.sideNavEl.classList.remove('is-open-sideNav');
  }

  openSubMenu () {
    if (!this.isFoldSubMenu && !this.isOpenMenu)
      return;

    this.isFoldSubMenu = true;
    this.sideNavEl.classList.add('is-open-subMenu');
    this.sideNavEl.classList.remove('is-closed-subMenu');
  }

  foldSubMenu () {
    if (!this.isFoldSubMenu)
      return;

    this.isFoldSubMenu = true;
    this.sideNavEl.classList.add('is-closed-subMenu');
    this.sideNavEl.classList.remove('is-open-subMenu');
  }

}

const sideNav = new PortalSideNav();
sideNav();
