document.addEventListener('DOMContentLoaded', function () {
    // Initialize Materialize components
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), { coverTrigger: false});
    M.Sidenav.init(document.querySelectorAll('.sidenav'));
    M.FormSelect.init(document.querySelectorAll('select'));
});
