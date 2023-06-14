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