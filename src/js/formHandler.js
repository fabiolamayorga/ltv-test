/**
 * Form handler to validate and submit 
 * @param {Object} form 
 */
const formHandler = (form) => {

    Array.prototype.slice.call(form)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated');
            }, false)
        })

};

export { formHandler };