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