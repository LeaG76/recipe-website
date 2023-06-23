/* Function to show/hide the navbar menu when we are on a mobile type screen */

const showMenu = (toggleId, menuId) => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('rotate-toggle-menu');
            menu.classList.toggle('show-menu');
        });
    }
}

showMenu('menuToogle', 'navigationMenu');

/* Function to show/hide the navbar Recipes submenu */

const showSubMenu = (arrowId, subMenuId) => {
    const arrow = document.getElementById(arrowId);
    const subMenu = document.getElementById(subMenuId);
    if (arrow && subMenu) {
        arrow.addEventListener('click', () => {
            arrow.classList.toggle('rotate-chevron');
            subMenu.classList.toggle('show-dropdown-menu');
        });
    }
}

showSubMenu('recipesToogle', 'recipesSubMenu');

/* Function to show/hide the search form of the navbar when we are on a mobile type screen */

const showSearchForm = (searchIconId, cancelIconId, formId) => {
    const search = document.getElementById(searchIconId);
    const cancel = document.getElementById(cancelIconId);
    const form = document.getElementById(formId);
    if (search && cancel && form) {
        search.addEventListener('click', () => {
            search.classList.toggle('hide-icon');
            cancel.classList.toggle('show-icon');
            form.classList.toggle('show-search-form');
        });
        cancel.addEventListener('click', () => {
            search.classList.toggle('hide-icon');
            cancel.classList.toggle('show-icon');
            form.classList.toggle('show-search-form');
        });
    }
}

showSearchForm('navigationSearch', 'navigationCancel', 'navigationForm');