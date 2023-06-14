const showSubMenu = (toggleId, menuId) => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('rotate-chevron');
            menu.classList.toggle('show-dropdown-menu');
        });
    }
}

showSubMenu('recipesToogle', 'recipesSubMenu');