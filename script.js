// --- Part 1 & 2: Interactive Elements ---

// 1. Light/Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// The event listener listens for a 'click' on the theme toggle button.
themeToggleBtn.addEventListener('click', () => {
    // The classList.toggle() method adds the 'dark-mode' class if it's not present,
    // and removes it if it is. This is a simple and clean way to toggle styles.
    body.classList.toggle('dark-mode');
    
    // Change the button text based on the current mode for a better user experience.
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
    }
});

// 2. Collapsible FAQ Section
// We use querySelectorAll to select all elements with the class 'faq-question'.
// This returns a NodeList, which we can iterate over.
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    // For each question, we add a click event listener.
    question.addEventListener('click', () => {
        // Select the very next element, which should be the answer.
        const answer = question.nextElementSibling;
        
        // Check if the answer is currently visible (display is 'block').
        // If it is, hide it; otherwise, show it. This creates the toggle effect.
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

// --- Part 3: Form Validation with JavaScript ---

const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('success-message');

// Get all the error message elements
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Add a 'submit' event listener to the entire form.
contactForm.addEventListener('submit', (event) => {
    // Prevent the default form submission (page reload). This is essential
    // for performing custom validation with JavaScript.
    event.preventDefault();

    // Reset error messages from previous submission attempts.
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = '';

    let formIsValid = true; // A flag to track the overall form validity.

    // 1. Name Validation: Check if the name field is empty.
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Full Name is required.';
        formIsValid = false;
    }

    // 2. Email Validation: Use a regular expression to validate the format.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        formIsValid = false;
    }

    // 3. Password Validation: Check for a minimum length (e.g., 8 characters).
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        formIsValid = false;
    }

    // If the 'formIsValid' flag is still true, all validations passed.
    if (formIsValid) {
        successMessage.textContent = 'Form submitted successfully! We will contact you soon.';
        contactForm.reset(); // Clear the form fields after successful submission.
    }
});