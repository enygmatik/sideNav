"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var portalSideNav = function () {
    function portalSideNav() {
        _classCallCheck(this, portalSideNav);

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
        portalSideNav.blockClicks = portalSideNav.blockClicks.bind(this);

        this.addEventListeners();
    }

    _createClass(portalSideNav, [{
        key: 'addEventListeners',
        value: function addEventListeners() {
            this.showMenuButtonEl.addEventListener('click', this.openMenu);
            this.closeMenuButtonEl.addEventListener('click', this.closeMenu);
            this.openSubMenuButtonEl.addEventListener('click', this.openSubMenu);
            this.closeSubMenuButtonEl.addEventListener('click', this.foldSubMenu);
            this.sideNavEl.addEventListener('click', this.closeMenu);
            this.sideNavContainerEl.addEventListener('click', portalSideNav.blockClicks);
        }
    }, {
        key: 'openMenu',
        value: function openMenu() {
            if (this.isOpenMenu) return;

            if (this.isFoldSubMenu) {
                this.sideNavEl.classList.add('is-open-subMenu');
                this.sideNavEl.classList.remove('is-closed-sideNav', 'is-closed-subMenu');

                this.isFoldSubMenu = true;
            }

            this.isOpenMenu = true;

            this.sideNavEl.classList.add('is-open-sideNav');
        }
    }, {
        key: 'closeMenu',
        value: function closeMenu() {
            if (!this.isOpenMenu) return;

            if (this.isFoldSubMenu) {
                this.sideNavEl.classList.add('is-closed-sideNav');
                this.sideNavEl.classList.remove('is-open-subMenu', 'is-open-sideNav');
            }

            this.isOpenMenu = false;

            this.sideNavEl.classList.remove('is-open-sideNav');
        }
    }, {
        key: 'openSubMenu',
        value: function openSubMenu() {
            if (!this.isFoldSubMenu && !this.isOpenMenu) return;

            this.isFoldSubMenu = true;

            this.sideNavEl.classList.add('is-open-subMenu');
            this.sideNavEl.classList.remove('is-closed-subMenu');
        }
    }, {
        key: 'foldSubMenu',
        value: function foldSubMenu() {
            if (!this.isFoldSubMenu) return;

            this.isFoldSubMenu = true;

            this.sideNavEl.classList.add('is-closed-subMenu');
            this.sideNavEl.classList.remove('is-open-subMenu');
        }
    }], [{
        key: 'blockClicks',
        value: function blockClicks(evt) {
            evt.stopPropagation();
            console.log('blocked click');
        }
    }]);

    return portalSideNav;
}();

new portalSideNav();

//# sourceMappingURL=script-compiled.js.map