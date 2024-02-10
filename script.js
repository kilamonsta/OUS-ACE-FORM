function redirectToAnotherSection() {
    window.location.href = 'mainform.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const courseActionFieldset = document.getElementById('courseActionFieldset');
    const forms = document.querySelectorAll('.formContainer');

    courseActionFieldset.addEventListener('click', function() {
        const selectedValue = document.querySelector('input[name="courseAction"]:checked').value;

        forms.forEach(form => form.classList.add('hidden'));

        const selectedForm = document.getElementById(`${selectedValue}Form`);
        if (selectedForm) {
            selectedForm.classList.remove('hidden');
        }
    });

    const form = document.getElementById('enrollmentForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const form = document.getElementById('enrollmentForm');
        const formData = new FormData(form);

        // Send form data to Google Apps Script endpoint
        fetch('https://script.google.com/macros/s/AKfycbzXn6DIufedK7zU9ikdFhHcSMJsWkud0c3Dt_qRc7zoaN-MIvi8RYaCJdk5tTwLv5mh/exec', {
            method: 'POST',
            body: formData
        });
        // For now, let's simulate form submission delay with setTimeout
        setTimeout(function() {
            window.location.href = 'submitted.html'; // Redirect after form submission is complete
        }, 1000); // Change the timeout value as needed
    });
});

function submitForm() {
    window.location.href = 'submitted.html';
}