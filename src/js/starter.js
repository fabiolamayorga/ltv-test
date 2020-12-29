// Importing JavaScript

import $ from 'jquery';

let form = document.querySelectorAll('.email-form')

/**
 * Form Validation
 */
Array.prototype.slice.call(form)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {

            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated');

            let data = $(form).serialize();
            
            window.location.replace(`/results?${data}`);


        }, false)
    })



