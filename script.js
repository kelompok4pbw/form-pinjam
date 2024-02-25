document.addEventListener('DOMContentLoaded', function () {
    // Initialize Materialize components
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {edge: 'right'});
    M.FormSelect.init(document.querySelectorAll('select'));

    M.FormSelect.init(document.querySelectorAll('select'));
    
    var dropdown = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdown, {
        onCloseStart: function() {
            var dropdownArrow = document.querySelector('.dropdown-arrow-trigger');
            dropdownArrow.innerText = 'arrow_drop_down';
        },
        coverTrigger: false
    });

    dropdown.forEach(function(drop) {
        drop.addEventListener('click', function() {
            var dropdownArrow = document.querySelector('.dropdown-arrow-trigger');
            var instance = M.Dropdown.getInstance(drop);
            if (instance && instance.isOpen) {
                dropdownArrow.innerText = 'arrow_drop_up';
            }
        });
    });
});
